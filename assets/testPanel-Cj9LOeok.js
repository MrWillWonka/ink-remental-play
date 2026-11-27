import{a as e,i as t,n,o as r,r as i,t as a,y as o}from"./index-BNVGQiVR.js";var s=[{value:`auto`,label:`Auto`},{value:`charge`,label:`Charge`},{value:`keys`,label:`Keys / Stick`}],c=class{cb;el;selects=new Map;skillSel;stageSel;simPenSel;styleSel;mechSel;crashASel;crashBSel;watchPlayerBtn;watchMechBtn;stopDemoBtn;statusEl;constructor(c){this.cb=c,this.el=document.createElement(`div`),this.el.id=`test-panel`,this.el.innerHTML=`
      <div class="tp-head">
        <span class="tp-title">Test Panel</span>
        <button type="button" class="tp-close" title="Close (Tab)">×</button>
      </div>
      <div class="tp-body">
        <div class="tp-actions"></div>
        <div class="tp-section">
          <div class="tp-label">Player sim / Play loadout</div>
          <div class="tp-grid">
            <label class="tp-field"><span>Skill</span><select class="tp-skill"></select></label>
            <label class="tp-field"><span>Stage</span><select class="tp-stage"></select></label>
            <label class="tp-field"><span>Pen</span><select class="tp-sim-pen"></select></label>
            <label class="tp-field"><span>Style</span><select class="tp-style"></select></label>
          </div>
          <div class="tp-demo-row">
            <button type="button" class="tp-act accent tp-watch-player">Watch AI</button>
            <button type="button" class="tp-act accent tp-watch-duo">Watch 2 AI</button>
            <button type="button" class="tp-act tp-play-loadout">Play as This</button>
            <button type="button" class="tp-act tp-stop-demo">Stop</button>
          </div>
        </div>
        <div class="tp-section">
          <div class="tp-label">Mechanic demos (all 11)</div>
          <div class="tp-demo-row">
            <select class="tp-mech"></select>
            <button type="button" class="tp-act accent tp-watch-mech">Watch</button>
          </div>
        </div>
        <div class="tp-section">
          <div class="tp-label">Crash test (Ledger joust)</div>
          <div class="tp-grid">
            <label class="tp-field"><span>West pen</span><select class="tp-crash-a"></select></label>
            <label class="tp-field"><span>East pen</span><select class="tp-crash-b"></select></label>
          </div>
          <div class="tp-demo-row">
            <button type="button" class="tp-act accent tp-launch-crash">Launch Crash</button>
            <button type="button" class="tp-act tp-rand-crash">Random Pair</button>
          </div>
        </div>
        <div class="tp-section">
          <div class="tp-label">Setup</div>
          <div class="tp-grid tp-env"></div>
        </div>
        <div class="tp-section tp-note-wrap">
          <form class="tp-note">
            <input type="text" placeholder="Log a quick playtest note..." />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
      <div class="tp-foot"></div>
    `,this.el.addEventListener(`pointerdown`,e=>e.stopPropagation()),this.el.querySelector(`.tp-close`).addEventListener(`click`,()=>this.show(!1));let l=this.el.querySelector(`.tp-actions`),u=(e,t,n=!1)=>{let r=document.createElement(`button`);r.type=`button`,r.className=n?`tp-act accent`:`tp-act`,r.textContent=e,r.addEventListener(`click`,t),l.appendChild(r)};u(`Restart`,()=>c.restart(),!0),u(`Refill ink`,()=>c.refillInk()),u(`+1000`,()=>c.grant(1e3)),u(`Tuning`,()=>c.toggleTuning()),u(`Log ↓`,()=>c.download()),u(`Wipe save`,()=>{confirm(`Wipe your own save and start fresh from Run 1?`)&&c.resetSave()}),this.skillSel=this.el.querySelector(`.tp-skill`);for(let e of i){let t=document.createElement(`option`);t.value=e.id,t.textContent=e.label,this.skillSel.appendChild(t)}this.skillSel.value=`average`,this.stageSel=this.el.querySelector(`.tp-stage`);for(let e of t){let t=document.createElement(`option`);t.value=e.id,t.textContent=e.label,this.stageSel.appendChild(t)}this.stageSel.value=`mid`,this.simPenSel=this.el.querySelector(`.tp-sim-pen`);for(let e of[{value:`auto`,label:`Auto (archetype)`},...o.map(e=>({value:e.id,label:e.name}))]){let t=document.createElement(`option`);t.value=e.value,t.textContent=e.label,this.simPenSel.appendChild(t)}this.simPenSel.value=`auto`,this.styleSel=this.el.querySelector(`.tp-style`);for(let t of e){let e=document.createElement(`option`);e.value=t.id,e.textContent=t.label,this.styleSel.appendChild(e)}this.styleSel.value=`balanced`,this.watchPlayerBtn=this.el.querySelector(`.tp-watch-player`),this.watchPlayerBtn.addEventListener(`click`,()=>{c.setDemo({kind:`player`,skill:this.skillSel.value,stage:this.stageSel.value,pen:this.simPenSel.value,style:this.styleSel.value}),this.refresh()}),this.el.querySelector(`.tp-watch-duo`).addEventListener(`click`,()=>{c.setDemo({kind:`player`,skill:this.skillSel.value,stage:this.stageSel.value,pen:this.simPenSel.value,style:this.styleSel.value,duo:!0}),this.refresh()}),this.el.querySelector(`.tp-play-loadout`).addEventListener(`click`,()=>{c.playLoadout(this.skillSel.value,this.stageSel.value,this.simPenSel.value,this.styleSel.value),this.refresh()}),this.stopDemoBtn=this.el.querySelector(`.tp-stop-demo`),this.stopDemoBtn.addEventListener(`click`,()=>{c.setDemo({kind:`off`}),this.refresh()}),this.mechSel=this.el.querySelector(`.tp-mech`);for(let e of n){let t=document.createElement(`option`);t.value=e.id,t.textContent=e.label,this.mechSel.appendChild(t)}this.watchMechBtn=this.el.querySelector(`.tp-watch-mech`),this.watchMechBtn.addEventListener(`click`,()=>{c.setDemo({kind:`mechanic`,id:this.mechSel.value}),this.refresh()}),this.crashASel=this.el.querySelector(`.tp-crash-a`),this.crashBSel=this.el.querySelector(`.tp-crash-b`);let d=[{value:`random`,label:`Random`},...o.map(e=>({value:e.id,label:e.name}))];for(let e of[this.crashASel,this.crashBSel]){for(let t of d){let n=document.createElement(`option`);n.value=t.value,n.textContent=t.label,e.appendChild(n)}e.value=`random`}this.el.querySelector(`.tp-launch-crash`).addEventListener(`click`,()=>{c.setDemo({kind:`mechanic`,id:`crash`,penA:this.crashASel.value,penB:this.crashBSel.value}),this.refresh()}),this.el.querySelector(`.tp-rand-crash`).addEventListener(`click`,()=>{this.crashASel.value=`random`,this.crashBSel.value=`random`,c.setDemo({kind:`mechanic`,id:`crash`,penA:`random`,penB:`random`}),this.refresh()});let f=this.el.querySelector(`.tp-env`),p=(e,t,n)=>{let r=document.createElement(`label`);r.className=`tp-field`;let i=document.createElement(`span`);i.textContent=t;let a=document.createElement(`select`);for(let e of n){let t=document.createElement(`option`);t.value=e.value,t.textContent=e.label,a.appendChild(t)}a.addEventListener(`change`,()=>{c.set(e,a.value),this.refresh()}),r.append(i,a),f.appendChild(r),this.selects.set(e,a)};p(`save`,`Save`,[{value:`mine`,label:`Mine`},...a.map(e=>({value:e.id,label:e.name}))]),p(`pen`,`Pen`,[{value:`save`,label:`Save's pen`},...o.map(e=>({value:e.id,label:e.name}))]),p(`controls`,`Controls`,s),p(`view`,`Camera`,r.camera.views.map((e,t)=>({value:String(t),label:e.name}))),p(`partnerSkill`,`Partner AI`,[{value:`off`,label:`Off (solo)`},{value:`casual`,label:`Casual`},{value:`average`,label:`Average`},{value:`pro`,label:`Pro`}]),p(`partnerPen`,`Partner pen`,o.map(e=>({value:e.id,label:e.name})));let m=this.el.querySelector(`.tp-note`),h=m.querySelector(`input`);m.addEventListener(`submit`,e=>{e.preventDefault();let t=h.value.trim();t&&(c.note(t),h.value=``,this.refresh())}),this.statusEl=this.el.querySelector(`.tp-foot`),document.body.appendChild(this.el),this.refresh()}get open(){return this.el.classList.contains(`show`)}show(e){this.el.classList.toggle(`show`,e),document.body.classList.toggle(`testing`,e),e&&this.refresh()}refresh(){let e=this.cb.state();for(let[t,n]of this.selects)n.value=e[t];e.demo.kind===`player`?(this.skillSel.value=e.demo.skill,this.stageSel.value=e.demo.stage,this.simPenSel.value=e.demo.pen??`auto`,this.styleSel.value=e.demo.style??`balanced`):e.demo.kind===`mechanic`&&(e.demo.id===`crash`?(this.crashASel.value=e.demo.penA??`random`,this.crashBSel.value=e.demo.penB??`random`):this.mechSel.value=e.demo.id),this.stopDemoBtn.disabled=e.demo.kind===`off`,this.statusEl.textContent=this.cb.status()}};export{c as TestPanel};