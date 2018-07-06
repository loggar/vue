## Mutation Methods

Vue wraps an observed array’s mutation methods so they will also trigger view updates. The wrapped methods are:

```
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

You can open the console and play with the previous examples’ items array by calling their mutation methods. For example: 

```
example1.items.push({ message: 'Baz' }).
```

## Replacing an Array

Mutation methods, as the name suggests, mutate the original array they are called on. In comparison, there are also non-mutating methods, e.g. filter(), concat() and slice(), which do not mutate the original array but always return a new array. When working with non-mutating methods, you can replace the old array with the new one:

```
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
```

You might think this will cause Vue to throw away the existing DOM and re-render the entire list - luckily, that is not the case. Vue implements some smart heuristics to maximize DOM element reuse, so replacing an array with another array containing overlapping objects is a very efficient operation.
