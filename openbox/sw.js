console.log('Load service worker');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.precaching.precacheAndRoute([
      '/index.html',
      '/css/style.css',
      '/js/script.js',
      {'url': '/', 'version': '1.1'}
  ]);


} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

