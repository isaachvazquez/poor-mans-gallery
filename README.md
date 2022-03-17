# SuperSimpleGallery


## Markup

```
<!-- The most basic implementation -->

<div class="SSG">
  <img src="https://web.com/image.png" alt="Item 1" class="ssg-item active">
  <img src="https://web.com/image.png" alt="Item 2" class="ssg-item">
  <img src="https://web.com/image.png" alt="Item 3" class="ssg-item">
  <div class="ssg-item">Item 4</div>
  <div class="ssg-item">Item 5</div>
</div>
```

## JS

```
const mygallery = new SuperSimpleGallery();
mygallery.init({});
```

## Options

* containerSelector: (default: '.SSG')
* itemSelector: (default: '.ssg-item')
* activeItemClass: (default: '.active')
* speed (default: 4000)
* autostart (default: true)
* callback (default: console.log(e), logs the SSGevent with details 'type', 'currentIndex', 'itemCount')
* emitEvents (boolean - default: false)