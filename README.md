# jQuery Clone Event [![Build Status](https://secure.travis-ci.org/instaclick/jquery.cloneEvent.png)](http://travis-ci.org/instaclick/jquery.cloneEvent)

Copy events from an element to another :)

## Getting Started

Download the [production version][min] or the [development version][max]. You can install through bower as well:

```CLI
$ bower install jquery.cloneEvent
```

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
Be sure to have [Node.js](http://nodejs.org), [Bower](https://github.com/bower/bower), [Gulp](http://gulpjs.com) and [Testem](https://github.com/airportyh/testem) globally installed.

```CLI
$ npm install && bower install
$ npm test
```
