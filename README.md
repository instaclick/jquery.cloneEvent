# jQuery Clone Event

Copy events from an element to another :)

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/instaclick/jquery.cloneEvent/master/dist/jquery.cloneEvent.min.js
[max]: https://raw.github.com/instaclick/jquery.cloneEvent/master/jquery.cloneEvent.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.cloneEvent.min.js"></script>

<button id="foo">foo</button>
<button id="bar">bar</button>
<script>
jQuery(function($) {
    var $foo = $('#foo');

    $foo.on('click', function () {
        alert('Woww!');
    });

    $('#bar').cloneEvent($foo); //copy all events from #foo
});
</script>
```

## Specific event
```js
$('#bar').cloneEvent($foo, 'click hover');
```
or

```js
$('#bar').cloneEvent($foo, ['click', 'hover']);
```

## Release History
0.1.0 - First release

## Development
Just few steps

```CLI
$ npm install
```

We use [Gulp](http://gulpjs.com) tasks to generate a build version.

```CLI
$ gulp
```
