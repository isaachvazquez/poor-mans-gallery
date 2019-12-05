function SuperSimpleGallery() {
  'use strict';

  let _options, _gallery, _activeItem, _activeIndex, _items, timer, _currentIndex = 1, _galleryItems = [], _defaults = {
    speed: 4000,
    autostart: true,
    containerSelector: '.gallery',
    itemSelector: '.g-item',
    activeItemClass: '.active',
    callback: (e) => { console.log(e) }
  }

  // Public
  function init(options) {
    // Override default options
    _options = typeof options === 'object' ? { ..._defaults, ...options } : { ..._defaults };

    _gallery = document.querySelector(_options.containerSelector);
    _gallery.addEventListener('SSGevent', _options.callback, false);
    _items = document.querySelectorAll(`${_options.containerSelector} ${_options.itemSelector}`);
    _activeItem = document.querySelector(`${_options.containerSelector} ${_options.activeItemClass}`);
    _items.forEach(i => _galleryItems.push(i));

    if (_options.autostart) setTimeout(() => updateGallery(), _options.speed);
  }

  // Public
  function updateGallery(direction = 'next', stopGallery = false, directIndex = false) {
    _activeItem = document.querySelector(`${_options.containerSelector} ${_options.activeItemClass}`);
    _activeIndex = _galleryItems.indexOf(_activeItem) + 1;
    let nextItem;

    if (!directIndex && direction == 'next') nextItem = _activeIndex < _galleryItems.length ? _galleryItems[_activeIndex] : _galleryItems[0];
    if (!directIndex && direction == 'prev') nextItem = _activeIndex > 1 ? _galleryItems[_activeIndex - 2] : _galleryItems[_galleryItems.length - 1];
    if (directIndex) { nextItem = _galleryItems[directIndex - 1] }

    _currentIndex = _galleryItems.indexOf(nextItem) + 1;

    _activeItem.classList.remove(`${_options.activeItemClass.replace('.', '')}`);
    nextItem.classList.add(`${_options.activeItemClass.replace('.', '')}`);


    // Dispatch the event
    const event = new CustomEvent('SSGevent', { detail: { type: direction, currentIndex: _getCurrentIndex(), itemCount: _galleryItems.length } });
    _gallery.dispatchEvent(event);

    if (stopGallery) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => updateGallery(), _options.speed);
    }
  }

  function _getCurrentIndex() {
    return _currentIndex;
  }

  return {
    init: init,
    updateGallery: updateGallery
  };
};