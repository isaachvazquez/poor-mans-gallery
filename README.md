# PoorMansGallery


## Markup

```
<div class="gallery">
  <img src="https://web.com/image.png" alt="Item 1" class="g-item active">
  <img src="https://web.com/image.png" alt="Item 2" class="g-item">
  <img src="https://web.com/image.png" alt="Item 3" class="g-item">
  <div class="g-item">Item 4</div>
  <div class="g-item">Item 5</div>
</div>
```

## JS

```
const mygallery = new PoorMansGallery();
mygallery.init({});
```

## Options

* containerSelector: (default: '.gallery')
* itemSelector: (default: '.g-item')
* activeItemClass: (default: '.active')
* speed (default: 4000)
* autostart (default: true)
* callback (default: console.log(e), logs the PMGevent with details 'type', 'currentIndex', 'itemCount')