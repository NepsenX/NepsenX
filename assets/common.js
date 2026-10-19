(function(){const $=id=>document.getElementById(id);window.NX={$: $,esc:s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])),url:s=>{try{const u=new URL(s,location.href);return ["http:","https:"].includes(u.protocol)?u.href:"#"}catch{return "#"}},get:async u=>{const r=await fetch(u,{headers:{"Accept":"application/vnd.github+json"}});if(!r.ok)throw Error("Request failed ("+r.status+")");return r.json()},status:(s,err)=>{const el=$("status");if(el){el.textContent=s;el.className="status"+(err?" error":"")}},date:s=>s?new Date(s).toLocaleDateString():"—",fileIcon:i=>i.type==="dir"?"▰":/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)$/i.test(i.name)?"▧":/\.(pdf)$/i.test(i.name)?"▤":/\.(mp4|webm|mov|mp3|wav|ogg)$/i.test(i.name)?"▷":/\.(js|jsx|ts|tsx|py|html|css|json|md|yml|yaml|sh|rs|go|java|c|cpp)$/i.test(i.name)?"⌘":"▱"};
document.addEventListener("DOMContentLoaded",function(){
 document.querySelectorAll(".brand-mark").forEach(function(el){
  var img=document.createElement("img");img.src="https://nepsenx.pages.dev/favicon.ico";img.alt="NepsenX logo";img.style.width="100%";img.style.height="100%";img.style.objectFit="contain";
  img.onerror=function(){el.textContent="N"};el.textContent="";el.appendChild(img);
 });
 document.querySelectorAll(".navlinks").forEach(function(nav){
  var old=nav.querySelector('a[href="editor.html"]');if(old)old.remove();
  [["media.html","Media Library"],["community.html","Community"]].forEach(function(item){
   if(!nav.querySelector('a[href="'+item[0]+'"]')){var a=document.createElement("a");a.href=item[0];a.textContent=item[1];if(location.pathname.endsWith(item[0]))a.className="active";nav.appendChild(a);}
  });
 });
});
})();