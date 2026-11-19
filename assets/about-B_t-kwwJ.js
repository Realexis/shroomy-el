import{A as e,a as t,c as n,f as r,i,l as a,n as o,p as s,v as c,y as l}from"./count-B_B_yHWd.js";var u=e.about;i(t()),l([...document.querySelectorAll(`[data-emergency]`)]),c(),o(`/about`),fetch(new URL(`data/meta.json`,document.baseURI),{cache:`no-cache`}).then(e=>e.json()).then(e=>{document.getElementById(`run`).textContent=a(e.weather_run,{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}),document.getElementById(`credits`).innerHTML=e.credits.map(e=>`
      <div class="card">
        <p><b>${n(e.name)}</b></p>
        <p>${n(u.credit[e.credit]??e.credit)}</p>
        <p class="tag">${n(u.licence[e.licence]??e.licence)}${e.status===`verified`?``:u.beingChecked}</p>
        ${e.use?`<p class="tag">${n(u.use[e.use]??e.use)}</p>`:``}
      </div>`).join(``)+`
      <div class="card"><p><b>${u.protomapsName}</b></p><p>${u.protomapsCredit}</p></div>`});var d=[...s.map(e=>({name:e.latin,photos:e.photos})),...r.map(e=>({name:e.latin,photos:e.photos}))];document.getElementById(`photo-credits`).innerHTML=d.map(e=>e.photos.map(t=>`
  <li><i>${n(t.taxon??e.name)}</i>: <a href="${n(t.page)}" target="_blank" rel="noopener">${n(t.attribution)}</a></li>`).join(``)).join(``);