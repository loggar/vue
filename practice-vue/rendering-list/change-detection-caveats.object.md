Due to limitations of modern JavaScript, Vue cannot detect property addition or deletion. For example:

```
var vm = new Vue({
  data: {
    a: 1
  }
})
// `vm.a` is now reactive

vm.b = 2
// `vm.b` is NOT reactive
```

Vue does not allow dynamically adding new root-level reactive properties to an already created instance. However, it’s possible to add reactive properties to a nested object using the `Vue.set(object, key, value)` method. For example, given:

```
var vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})
```

You could add a new age property to the nested userProfile object with:

```
Vue.set(vm.userProfile, 'age', 27)
```

```
vm.$set(vm.userProfile, 'age', 27)
```

Sometimes you may want to assign a number of new properties to an existing object, for example using Object.assign() or _.extend(). In such cases, you should create a fresh object with properties from both objects. So instead of:

```
Object.assign(vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```

You would add new, reactive properties with:

```
vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```
