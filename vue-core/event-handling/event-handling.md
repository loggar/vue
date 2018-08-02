## Event handling

Ref)

https://vuejs.org/v2/guide/events.html


Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable:

```
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

```
// ...
methods: {
  warn: function (message, event) {
    // now we have access to the native event
    if (event) event.preventDefault()
    alert(message)
  }
}
```

