// Nome da versão do cache (mude o 'v2' para 'v3' se fizer novas alterações no futuro)
const CACHE_NAME = 'pescaria-app-v2';

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  // Força o novo Service Worker a ativar imediatamente
  self.skipWaiting();
});

// Ativação e Limpeza do Cache Antigo
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          // Deleta todos os caches antigos que não sejam a versão atual
          if (cache !== CACHE_NAME) {
            console.log('Limpando cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      // Assume o controle de todas as abas abertas imediatamente
      return self.clients.claim();
    })
  );
});

// Interceptação de Requisições (Busca primeiro na rede para ter sempre a versão mais recente)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Se a rede responder com sucesso, atualiza o cache
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Se estiver offline, serve a versão salva em cache
        return caches.match(event.request);
      })
  );
});
