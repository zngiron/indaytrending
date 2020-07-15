navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister();
  }
});

caches.delete('workbox-precache-v2-https://indaytrending.com/');
caches.delete('images');
caches.delete('stories');
caches.delete('cache');