Due to limitations in JavaScript, Vue cannot detect the following changes to an array:

1. caveat 1: When you directly set an item with the index, e.g. `vm.items[indexOfItem] = newValue`
2. caveat 2: When you modify the length of the array, e.g. `vm.items.length = newLength`

For example:

```
var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // is NOT reactive
vm.items.length = 2 // is NOT reactive
```

To overcome caveat 1, both of the following will accomplish the same as vm.items[indexOfItem] = newValue, but will also trigger state updates in the reactivity system:

```
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
```

```
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
```

You can also use the vm.$set instance method, which is an alias for the global Vue.set:

```
vm.$set(vm.items, indexOfItem, newValue)
```

To deal with caveat 2, you can use splice:

```
vm.items.splice(newLength)
```