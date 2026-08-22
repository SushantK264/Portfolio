/* SUSHANT KATKAR — PORTFOLIO v4 */

const skillsData = {
  lang:[
    {i:'☕',n:'Java (8/11)'},
    {i:'📊',n:'SQL'},
    {i:'⚡',n:'JavaScript'},
    {i:'🌐',n:'HTML5'},
    {i:'🎨',n:'CSS3'},
    {i:'📐',n:'Bootstrap'},
  ],
  backend:[
    {i:'🚀',n:'Spring Boot'},
    {i:'🧩',n:'Spring MVC'},
    {i:'🔗',n:'Spring JDBC'},
    {i:'🗃',n:'JPA'},
    {i:'🌱',n:'Hibernate'},
    {i:'📄',n:'JSP'},
    {i:'🔄',n:'REST APIs'},
    {i:'🧵',n:'Servlets'},
  ],
  db:[
    {i:'🐬',n:'MySQL'},
    {i:'📊',n:'SQL'},
  ],
  tools:[
    {i:'🔷',n:'IntelliJ IDEA'},
    {i:'🌑',n:'Eclipse'},
    {i:'📮',n:'Postman'},
    {i:'🧪',n:'JUnit'},
    {i:'🧫',n:'Mockito'},
    {i:'📦',n:'Maven'},
    {i:'🐙',n:'Git / GitHub'},
    {i:'🌐',n:'Apache Tomcat'},
    {i:'⚙️',n:'Jenkins'},
  ],
  mendix:[
    {i:'🔍',n:'OOP & Collections'},
    {i:'🏗️',n:'MVC Architecture'},
    {i:'🧬',n:'Microservices'},
    {i:'🛡️',n:'Exception Handling'},
    {i:'🧵',n:'Multithreading'},
    {i:'♟️',n:'Design Patterns'},
    {i:'🔐',n:'Auth & CRUD'},
    {i:'🌀',n:'Agile / Scrum'},
    {i:'📋',n:'SDLC / STLC'},
  ],
};

const projectsData = [
  {
    emoji:'🏦',
    tags:['Java','Spring Boot','Spring MVC','REST APIs','JPA/Hibernate','MySQL'],
    title:'Enterprise Digital Banking & Customer Service Platform',
    desc:'Enterprise digital banking and customer service platform built at Cognizant Technology Solutions, supporting account management, transaction services, and customer authentication.',
    bullets:[
      'Developed backend modules using Java, Spring Boot, and Spring MVC.',
      'Designed and implemented REST APIs for customer, account, transaction, and service modules.',
      'Developed CRUD operations, business logic, validations, and exception handling.',
      'Integrated JPA/Hibernate with MySQL and optimized SQL queries.',
      'Implemented authentication and authorization for secure application access.',
      'Developed unit tests using JUnit &amp; Mockito and tested APIs using Postman.',
    ],
    link:'#',
    linkLabel:'Confidential · Cognizant Client Project',
    isLive:false,
    disabled:true,
  },
  {
    emoji:'🛒',
    tags:['Java','Spring Boot','Spring MVC','REST APIs','JPA/Hibernate','MySQL'],
    title:'Enterprise Retail & E-Commerce Management Platform',
    desc:'Retail and e-commerce management platform built at Cognizant Technology Solutions, handling product catalogs, inventory, orders, and payments.',
    bullets:[
      'Developed enterprise applications using Java, Spring Boot, Spring MVC, JPA/Hibernate, and MySQL.',
      'Designed and developed REST APIs for customer, product, order, inventory, and service modules.',
      'Implemented CRUD operations, business logic, validations, and exception handling.',
      'Implemented authentication and role-based access control.',
      'Supported Jenkins CI/CD builds, application deployment, and release activities.',
    ],
    link:'#',
    linkLabel:'Confidential · Cognizant Client Project',
    isLive:false,
    disabled:true,
  },
];

/* Certifications */
const certsData = [
  {icon:'🏆', title:'FullStack Java Course Completion',  issuer:"Giri's Tech Hub, Pune",     image:'./images/course-complete.jpg'},
  {icon:'🤖', title:'Microsoft Copilot Studio',          issuer:'Microsoft',                  image:'./images/Micro Copilot.jpg'},
  {icon:'🧠', title:'Introduction to Generative AI',     issuer:'Google Cloud',               image:'./images/Google Gen AI.jpg'},
  {icon:'☕', title:'Java Developer',                    issuer:'HackerRank',                 image:'./images/java Hackerrank.png'},
  {icon:'🗄', title:'SQL Developer',                     issuer:'HackerRank',                 image:'./images/Sql Hackerrank.png'},
  {icon:'🐍', title:'Python Workshop',                   issuer:'Workshop Certificate',       image:'./images/Python_Workshop.jpg'},
];

/* ── RENDER SKILLS ── */
function renderSkills(){
  const map={skillsLang:skillsData.lang,skillsBackend:skillsData.backend,skillsDB:skillsData.db,skillsTools:skillsData.tools,skillsMendix:skillsData.mendix};
  Object.entries(map).forEach(([id,list])=>{
    const el=document.getElementById(id);
    if(!el)return;
    el.innerHTML=list.map(s=>`
      <div class="chip reveal">
        <span class="chip-i">${s.i}</span>${s.n}
      </div>`).join('');
  });
}

/* ── RENDER PROJECTS ── */
function renderProjects(){
  const g=document.getElementById('projectsGrid');
  if(!g)return;
  g.innerHTML=projectsData.map((p,i)=>`
    <div class="pcard reveal" style="transition-delay:${i*.1}s">
      <div class="pcard-thumb">${p.emoji}</div>
      <div class="pcard-body">
        <div class="ptags">${p.tags.map(t=>`<span class="ptag">${t}</span>`).join('')}</div>
        <div class="ptitle">${p.title}</div>
        <div class="pdesc">${p.desc}</div>
        <ul class="pbullets">${p.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
        <div class="plinks">
          ${p.disabled
            ? `<span class="plink plink-disabled" title="${p.linkLabel}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
                ${p.linkLabel}
              </span>`
            : `<a href="${p.link}" target="_blank" class="plink ${p.isLive?'plink-live':''}">
                ${p.isLive
                  ?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>`
                  :`<svg viewBox="0 0 24 24" fill="currentColor" width="11" height="11"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`
                }
                ${p.linkLabel}
              </a>`
          }
        </div>
      </div>
    </div>`).join('');
}

/* ── RENDER CERTIFICATIONS ── */
function renderCerts(){
  const g=document.getElementById('certGrid');
  if(!g)return;
  g.innerHTML=certsData.map((c,i)=>{
    const visual=`<img src="${c.image}" alt="${c.title}" class="cthumb" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="cicon" style="display:none">${c.icon}</div>`;
    const specialClass=c.type==='intern'?'cc-intern':c.type==='course'?'cc-course':c.type==='mendix'?'cc-mendix':'';
    const badge=c.type==='intern'
      ?`<span class="cc-badge cc-badge-intern">Internship</span>`
      :c.type==='course'
      ?`<span class="cc-badge cc-badge-course">Course</span>`
      :c.type==='mendix'
      ?`<span class="cc-badge cc-badge-mendix">Certification</span>`:'';
    return `
      <div class="ccard-cert ${specialClass} reveal" style="transition-delay:${i*.07}s"
           data-img="${c.image}" data-title="${c.title}" data-issuer="${c.issuer}">
        ${badge}
        ${visual}
        <div>
          <div class="ctitle">${c.title}</div>
          <div class="cissuer">By ${c.issuer}</div>
          <div class="cview">Click to view</div>
        </div>
      </div>`;
  }).join('');

  g.querySelectorAll('.ccard-cert').forEach(card=>{
    card.addEventListener('click',()=>openModal(
      card.dataset.img, card.dataset.title, card.dataset.issuer
    ));
  });
}

/* ── MODAL ── */
function openModal(src,title,issuer){
  document.getElementById('modalImg').src=src;
  document.getElementById('modalCaption').textContent=`${title} — By ${issuer}`;
  document.getElementById('certModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('certModal').classList.remove('open');
  document.body.style.overflow='';
}
function initModal(){
  document.getElementById('modalClose').addEventListener('click',closeModal);
  document.getElementById('modalBg').addEventListener('click',closeModal);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
}

/* ── REVEAL ── */
function initReveal(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:.07,rootMargin:'0px 0px -36px 0px'});
  const go=()=>document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
  go(); setTimeout(go,160);
}

/* ── NAV ── */
function initNav(){
  const ham=document.getElementById('hamburger'),menu=document.getElementById('mobileMenu');
  if(!ham||!menu)return;
  ham.addEventListener('click',()=>{ham.classList.toggle('open');menu.classList.toggle('open')});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ham.classList.remove('open');menu.classList.remove('open')}));
  document.addEventListener('click',e=>{if(!ham.contains(e.target)&&!menu.contains(e.target)){ham.classList.remove('open');menu.classList.remove('open')}});
}
function initActiveNav(){
  const secs=document.querySelectorAll('section[id]'),links=document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll',()=>{
    let cur='';
    secs.forEach(s=>{if(window.scrollY>=s.offsetTop-88)cur=s.id});
    links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
  },{passive:true});
}
function initNavBg(){
  const nav=document.getElementById('navbar');
  if(!nav)return;
  window.addEventListener('scroll',()=>{
    nav.style.background=window.scrollY>10?'rgba(9,11,17,.97)':'rgba(9,11,17,.82)';
  },{passive:true});
}
function initScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const t=document.querySelector(a.getAttribute('href'));
      if(!t)return;
      e.preventDefault();
      window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-62,behavior:'smooth'});
    });
  });
}

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded',()=>{
  renderSkills(); renderProjects(); renderCerts();
  requestAnimationFrame(initReveal);
  initNav(); initActiveNav(); initNavBg(); initScroll(); initModal();
});
