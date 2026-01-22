(function(){
  // Mark active nav item based on pathname
  const path = (location.pathname || "/").replace(/\/+$/,"/") || "/";
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const href = (a.getAttribute('href')||"").replace(/\/+$/,"/") || "/";
    if(href === path) a.classList.add('active');
  });

  
  // Theme tokens (offline, local only)
  const THEME_KEY = "sus_theme_v1";
  const THEMES = ["theatre","modern","classic"];

  function setTheme(t){
    if(!THEMES.includes(t)) return;
    document.documentElement.setAttribute("data-theme", t);
    try{ localStorage.setItem(THEME_KEY, t); }catch(e){}
  }

  // 1) URL param ?theme=theatre|modern|classic
  const params = new URLSearchParams(location.search);
  const urlTheme = (params.get("theme") || "").toLowerCase();
  if(THEMES.includes(urlTheme)){
    setTheme(urlTheme);
  } else {
    // 2) saved preference
    let saved = null;
    try{ saved = localStorage.getItem(THEME_KEY); }catch(e){}
    if(THEMES.includes(saved)) setTheme(saved);
  }

  // 3) Dev switcher panel with ?dev=1
  if(params.get("dev")==="1"){
    const panel = document.createElement("div");
    panel.style.cssText = "position:fixed;right:14px;bottom:14px;z-index:9999;padding:10px 12px;border-radius:12px;background:rgba(0,0,0,.55);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.18);font:12px/1.2 system-ui;color:#fff";
    panel.innerHTML = `
      <div style="display:flex;gap:8px;align-items:center">
        <strong style="font-weight:700">Tema</strong>
        <select id="sus-theme-select" style="padding:6px 8px;border-radius:10px;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.08);color:#fff">
          ${THEMES.map(t=>`<option value="${t}">${t}</option>`).join("")}
        </select>
      </div>
      <div style="opacity:.75;margin-top:6px">Atalho: Ctrl+Shift+T</div>
    `;
    document.body.appendChild(panel);
    const sel = panel.querySelector("#sus-theme-select");
    sel.value = document.documentElement.getAttribute("data-theme") || "theatre";
    sel.addEventListener("change", ()=> setTheme(sel.value));
  }

  // 4) Hotkey: Ctrl+Shift+T cycles themes
  window.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.shiftKey && (e.key==="T" || e.key==="t")){
      const cur = document.documentElement.getAttribute("data-theme") || "theatre";
      const idx = THEMES.indexOf(cur);
      const next = THEMES[(idx+1) % THEMES.length];
      setTheme(next);
      e.preventDefault();
    }
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
