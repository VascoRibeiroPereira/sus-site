(function(){
  // Mark active nav item based on pathname
  const path = (location.pathname || "/").replace(/\/+$/,"/") || "/";
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const href = (a.getAttribute('href')||"").replace(/\/+$/,"/") || "/";
    if(href === path) a.classList.add('active');
  });

  // Very simple cookie banner (local-only)
  const key="sus_cookie_ok_v1";
  const banner=document.getElementById("cookie-banner");
  if(!banner) return;
  if(localStorage.getItem(key)==="1"){ banner.remove(); return; }
  banner.querySelectorAll("[data-cookie]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      localStorage.setItem(key,"1");
      banner.remove();
    });
  });
})();
