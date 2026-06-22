self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',(e)=>{e.waitUntil((async()=>{
try{const ks=await caches.keys();await Promise.all(ks.map(k=>caches.delete(k)));}catch(_){}
await self.registration.unregister();
const cs=await self.clients.matchAll({type:'window'});cs.forEach(c=>c.navigate(c.url));
})());});
self.addEventListener('fetch',()=>{});