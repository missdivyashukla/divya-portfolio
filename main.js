(function(){
var FLOAT="catalyst-avatar.png";
var GIGGLE="catalyst-giggle.png";
(new Image()).src=GIGGLE;
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function esc(t){var d=document.createElement('div');d.textContent=t;return d.innerHTML}

/* ---------- content ---------- */
var GOOD=[
["User Intent","Match the page to what the searcher actually needs."],
["Topical Authority","Cover a subject deeply with connected, useful pages."],
["Original Research","Publish evidence and insights people cannot find elsewhere."],
["Brand Building","Earn recognition and trust beyond a single search result."],
["Entity Optimization","Make people, products and their relationships clear."],
["Quality Content","Create accurate, helpful content with a clear purpose."],
["Technical SEO","Keep important pages crawlable, indexable and fast."],
["Quality Backlinks","Earn relevant links through genuine value."],
["Internal Linking","Connect related pages so users and crawlers can explore."],
["Schema Markup","Describe visible, truthful page content with structured data."],
["Conversational Queries","Answer natural-language questions directly."],
["Content Accessibility","Make content usable for people with different needs."],
["AI Visibility","Make trustworthy information clear and easy to cite."],
["Digital PR","Earn attention through useful stories and credible coverage."],
["Conversion Optimization","Help the right visitors take a meaningful next step."],
["Smart Automation","Automate repeatable work while keeping human review."],
["Content Refresh","Update facts and improve pages as needs change."],
["Competitor Analysis","Learn from the landscape without copying blindly."],
["Channel Diversification","Build acquisition beyond a single platform."],
["Revenue Focus","Connect organic growth to real business outcomes."]];
var BAD=[
["Keyword Stuffing","Repeating keywords unnaturally harms readability."],
["Spam Backlinks","Manipulative links can damage trust and search performance."],
["AI Spam","Unreviewed, low-value AI pages do not serve readers."],
["Duplicate Content","Repeated pages dilute usefulness and create indexing confusion."],
["Doorway Pages","Near-identical pages made only to funnel search traffic add little value."],
["Keyword Cannibalization","Overlapping pages can compete for the same search intent."],
["Search Intent Mismatch","Traffic is not useful when the page misses the visitor's need."],
["Fake Statistics","Invented numbers undermine credibility."],
["Misleading Schema","Structured data must reflect what the page really contains."],
["Thin Content","Pages need substance, not just a keyword and a heading."],
["Mass Publishing","Volume without quality control can flood a site with weak pages."],
["Over-Optimization","Optimizing for bots at the expense of people weakens the experience."],
["Traffic Obsession","Visits alone do not prove business impact."],
["Vanity Metrics","Impressive-looking numbers can hide a lack of meaningful results."],
["Algorithm Dependency","Relying entirely on search leaves growth vulnerable."],
["Blind Automation","Unsupervised workflows can multiply mistakes."],
["Fake Expertise","Claimed expertise needs real experience and evidence."],
["Outdated Content","Stale information can mislead visitors."],
["GEO Manipulation","Trying to deceive AI search is not a durable visibility strategy."],
["Guaranteed Rankings","No one can promise a fixed organic ranking."]];
function fillList(id,arr){$(id).innerHTML=arr.map(function(a){return '<li><b>'+esc(a[0])+'</b>. '+esc(a[1])+'</li>'}).join('')}
fillList('#goodList',GOOD);fillList('#badList',BAD);

var TOOLS=[
["Search performance & analytics",[["Google Search Console","Search clicks, impressions and indexing"],["Google Analytics 4","Website audiences, events and conversions"],["Google Tag Manager","Manage tags and event tracking"],["Looker Studio","Reporting and dashboards"]]],
["Keyword & competitor research",[["Ahrefs","Keyword research and backlink analysis"],["Semrush","Keyword, ranking and competitor research"],["Google Trends","Compare search interest over time"],["Google Keyword Planner","Keyword ideas and search estimates"]]],
["Technical SEO",[["Screaming Frog SEO Spider","Crawl pages and audit links and metadata"],["PageSpeed Insights","Page performance and Core Web Vitals"],["Rich Results Test","Check eligibility for Google rich results"]]],
["Programmatic SEO & automation",[["Google Sheets","Manage keyword lists, page data and templates"],["Google Apps Script","Automate spreadsheet tasks and reporting"],["n8n","Connect apps and automate recurring workflows"]]]];
var chipBox=$('#toolChips'),toolBox=$('#tools');
function chip(label,val,on){var b=document.createElement('button');b.className='chip';b.type='button';b.textContent=label;b.setAttribute('aria-pressed',on?'true':'false');b.onclick=function(){$$('.chip',chipBox).forEach(function(c){c.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');$$('.tool',toolBox).forEach(function(t){t.hidden=!(val==='all'||t.dataset.cat===val)})};chipBox.appendChild(b)}
chip('All','all',true);
TOOLS.forEach(function(g){chip(g[0],g[0],false);g[1].forEach(function(t){var d=document.createElement('div');d.className='tool';d.dataset.cat=g[0];d.innerHTML='<b>'+esc(t[0])+'</b><span>'+esc(t[1])+'</span>';toolBox.appendChild(d)})});

/* ---------- pages (hash routes) + nav ---------- */
var ROUTES={'home':'s01','intro':'s02','proof-of-work':'s03','skills':'s04','case-studies':'s05','career':'s06','about':'s07','contact':'s08','ask-the-cat':'s09'};
var ID2R={};Object.keys(ROUTES).forEach(function(k){ID2R[ROUTES[k]]=k});
var SECS=[["s01","Home"],["s02","Intro"],["s03","Proof"],["s04","Skills"],["s05","Cases"],["s06","Career"],["s07","About"],["s08","Contact"],["s09","Meow"]];
var dock=$('#dock'),pages=$$('.page'),pendingFocus=null;
SECS.forEach(function(s,i){var b=document.createElement('button');b.type='button';b.dataset.go=s[0];b.innerHTML='<i>0'+(i+1)+'</i>'+s[1];dock.appendChild(b)});
function showPage(route){
  var id=ROUTES[route]||'s01';
  pages.forEach(function(p){p.hidden=(p.id!==id)});
  $$('button',dock).forEach(function(b){var on=b.dataset.go===id;b.setAttribute('aria-current',on?'true':'false');if(on){var l=b.offsetLeft-dock.clientWidth/2+b.clientWidth/2;dock.scrollTo({left:l,behavior:'auto'})}});
  var f=pendingFocus&&document.getElementById(pendingFocus);pendingFocus=null;
  if(f){f.scrollIntoView({block:'start'});f.style.boxShadow='0 0 0 2px var(--accent)';setTimeout(function(){f.style.boxShadow=''},1800)}
  else window.scrollTo(0,0);
  observeReveals();
}
function go(id,focus){
  var r=ID2R[id];if(!r)return;
  closeModal();pendingFocus=focus||null;
  if(location.hash==='#'+r)showPage(r);else location.hash=r;
  rain(1500);
}
document.addEventListener('click',function(e){var t=e.target.closest('[data-go]');if(t)go(t.dataset.go,t.dataset.focus)});
window.addEventListener('hashchange',function(){showPage(location.hash.slice(1))});
var io=null;
function observeReveals(){
  var els=$$('.io:not(.in)');
  if(!('IntersectionObserver' in window)||reduce){els.forEach(function(e){e.classList.add('in')});return}
  io=io||new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}})},{threshold:.25});
  els.forEach(function(e){io.observe(e)});
}

/* ---------- cat: purr, chaser, rain, lonely tab ---------- */
var purrs=0;try{purrs=parseInt(localStorage.getItem('purrs')||'0',10)||0}catch(e){}
var purrN=$('#purrN');purrN.textContent=purrs;
var actx=null;
function purrSound(){try{
  actx=actx||new (window.AudioContext||window.webkitAudioContext)();
  var o=actx.createOscillator(),g=actx.createGain(),l=actx.createOscillator(),lg=actx.createGain();
  o.type='sawtooth';o.frequency.value=62;l.frequency.value=22;lg.gain.value=.05;g.gain.value=.06;
  l.connect(lg);lg.connect(g.gain);o.connect(g);g.connect(actx.destination);
  var t=actx.currentTime;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.06,t+.15);g.gain.linearRampToValueAtTime(0,t+1.1);
  o.start(t);l.start(t);o.stop(t+1.15);l.stop(t+1.15);
}catch(e){}}
var catbtn=$('#catbtn'),catimg=$('#catimg');
catbtn.addEventListener('click',function(){
  purrs++;purrN.textContent=purrs;try{localStorage.setItem('purrs',String(purrs))}catch(e){}
  purrSound();if(!rainBusy)giggle(1400);catbtn.classList.remove('purr');void catbtn.offsetWidth;catbtn.classList.add('purr');
});
window.addEventListener('pointermove',function(e){
  if(e.pointerType==='touch')return;
  var r=catbtn.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  var dx=(e.clientX-cx),dy=(e.clientY-cy),d=Math.max(1,Math.hypot(dx,dy)),k=Math.min(1,d/300);
  catimg.style.transform='translate('+(dx/d*5*k).toFixed(1)+'px,'+(dy/d*4*k).toFixed(1)+'px) scale(1.06)';
});
var hehe=$('#hehe'),rainBusy=false,gT=null;
function giggle(ms){catimg.src=GIGGLE;hehe.classList.add('on');clearTimeout(gT);gT=setTimeout(function(){catimg.src=FLOAT;hehe.classList.remove('on')},ms)}
function rain(ms){
  if(reduce||rainBusy)return;rainBusy=true;
  var n=Math.round(ms/90),i=0;
  giggle(ms+900);var hc=$('#herocat');hc.classList.remove('giggle');void hc.offsetWidth;hc.classList.add('giggle');
  var iv=setInterval(function(){
    var el=document.createElement('div');el.className='rain'+(Math.random()<.5?' kib':'');
    if(!el.classList.contains('kib')){el.textContent='🐟';el.style.fontSize=(16+Math.random()*8)+'px'}
    el.style.left=(Math.random()*100)+'vw';el.style.animationDuration=(1.6+Math.random()*1.4)+'s';
    document.body.appendChild(el);setTimeout(function(){el.remove()},3200);
    if(++i>=n){clearInterval(iv);setTimeout(function(){rainBusy=false},900)}
  },90);
}
var title=document.title;
document.addEventListener('visibilitychange',function(){
  if(document.hidden){title=document.title;document.title='Come back, I’m lonely 🐾'}else{document.title=title}
});
window.addEventListener('load',function(){setTimeout(function(){rain(2200)},400)});

/* ---------- knock it off the table ---------- */
function shoveBubble(rect){
  var b=document.createElement('div');b.className='shove';
  b.innerHTML='<img src="'+FLOAT+'" alt=""><span>…it was in the way.</span>';
  var x=Math.min(Math.max(8,rect.left),window.innerWidth-240),y=Math.min(Math.max(8,rect.top),window.innerHeight-70);
  b.style.left=x+'px';b.style.top=y+'px';document.body.appendChild(b);setTimeout(function(){b.remove()},2400);
}
$$('.knock').forEach(function(card){
  var g=document.createElement('span');g.className='grip';g.textContent='⠿';g.title='Drag me';g.setAttribute('aria-hidden','true');card.appendChild(g);
  var sx,sy,dx=0,dy=0,drag=false,box=card.closest('.wrap');
  g.addEventListener('pointerdown',function(e){drag=true;sx=e.clientX;sy=e.clientY;g.setPointerCapture(e.pointerId);card.classList.remove('settle','fell');card.classList.add('dragging');e.preventDefault()});
  g.addEventListener('pointermove',function(e){if(!drag)return;dx=e.clientX-sx;dy=e.clientY-sy;card.style.transform='translate('+dx+'px,'+dy+'px) rotate('+(dx/60)+'deg)'});
  function end(){
    if(!drag)return;drag=false;card.classList.remove('dragging');
    var r=card.getBoundingClientRect(),b=box.getBoundingClientRect();
    var over=Math.max(b.left-r.left,r.right-b.right,r.top-b.top>b.height?0:0);
    var out=(b.left-r.left>r.width*.3)||(r.right-b.right>r.width*.3)||(b.top-r.top>r.height*.3)||(r.bottom-b.bottom>r.height*.3);
    if(out){
      shoveBubble(r);card.classList.add('fell');
      setTimeout(function(){card.classList.remove('fell');card.classList.add('settle');card.style.transform='';dx=dy=0;setTimeout(function(){card.classList.remove('settle')},400)},2300);
    }else{card.classList.add('settle');card.style.transform='';dx=dy=0;setTimeout(function(){card.classList.remove('settle')},400)}
  }
  g.addEventListener('pointerup',end);g.addEventListener('pointercancel',end);
});

/* ---------- copy email ---------- */
$('#copyMail').addEventListener('click',function(){
  var btn=this,txt=$('#mail').textContent;
  function done(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy'},1600)}
  function fallback(){var r=document.createRange();r.selectNodeContents($('#mail'));var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='Selected'; setTimeout(function(){btn.textContent='Copy'},1600)}
  try{navigator.clipboard.writeText(txt).then(done,fallback)}catch(e){fallback()}
});

/* ---------- Search City game ---------- */
var COLS=9,ROWS=12,G=null;
var board=$('#board'),gMsg=$('#gMsg');
function initials(n){var w=n.replace(/[^A-Za-z ]/g,' ').split(/\s+/).filter(Boolean);return (w.length>1?w[0][0]+w[1][0]:w[0].slice(0,2)).toUpperCase()}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function newGame(){
  var cells=[];for(var y=0;y<ROWS;y++)for(var x=0;x<COLS;x++){if((x===0&&y===0)||(x===COLS-1&&y===ROWS-1))continue;if(x<2&&y<2)continue;cells.push([x,y])}
  shuffle(cells);var items={},k=0;
  GOOD.forEach(function(g,i){var c=cells[k++];items[c[0]+','+c[1]]={t:'good',i:i}});
  BAD.forEach(function(g,i){var c=cells[k++];items[c[0]+','+c[1]]={t:'bad',i:i}});
  for(var b=0;b<8;b++){var c=cells[k++];items[c[0]+','+c[1]]={t:'bin',down:false}}
  G={x:0,y:0,hearts:3,got:{},n:0,chaos:0,items:items,over:false};
  setMsg('Move Catalyst to start. Green tokens are essentials, red ones are hazards.','');
  renderGame();
}
function setMsg(t,cls){gMsg.className='msg '+(cls||'');gMsg.innerHTML=t}
function renderGame(){
  var h='';
  for(var y=0;y<ROWS;y++)for(var x=0;x<COLS;x++){
    var key=x+','+y,it=G.items[key],cls='cell',inner='';
    var home=(x===COLS-1&&y===ROWS-1);
    if(home){cls+=' home';inner='<span style="font-size:1.1rem" aria-label="Home">🏠</span>'}
    else if(it){
      if(it.t==='good'){cls+=' good';inner='<span class="tok" title="'+esc(GOOD[it.i][0])+'">'+initials(GOOD[it.i][0])+'</span>'}
      else if(it.t==='bad'){cls+=' bad';inner='<span class="tok" title="'+esc(BAD[it.i][0])+'">'+initials(BAD[it.i][0])+'</span>'}
      else inner='<span class="bin'+(it.down?' down':'')+'">🗑️</span>';
    }
    if(x===G.x&&y===G.y){cls+=' me-on';inner='<img class="me" src="'+FLOAT+'" alt="Catalyst">'}
    h+='<div class="'+cls+'" data-x="'+x+'" data-y="'+y+'">'+inner+'</div>';
  }
  board.innerHTML=h;
  $('#gGot').textContent=G.n;$('#gChaos').textContent=G.chaos;
  var hs='';for(var i=0;i<3;i++)hs+=i<G.hearts?'♥':'♡';$('#gHearts').textContent=hs;
  $('#gList').innerHTML=GOOD.map(function(g,i){return '<li class="'+(G.got[i]?'on':'')+'">'+esc(g[0])+'</li>'}).join('');
}
function move(dx,dy){
  if(!G||G.over)return;
  var nx=G.x+dx,ny=G.y+dy;if(nx<0||ny<0||nx>=COLS||ny>=ROWS)return;
  G.x=nx;G.y=ny;var key=nx+','+ny,it=G.items[key];
  if(it){
    if(it.t==='good'){G.got[it.i]=1;G.n++;delete G.items[key];setMsg('<b>'+esc(GOOD[it.i][0])+'</b>. '+esc(GOOD[it.i][1]),'')}
    else if(it.t==='bad'){G.hearts--;delete G.items[key];setMsg('Ouch. <b>'+esc(BAD[it.i][0])+'</b>. '+esc(BAD[it.i][1]),'')}
    else if(!it.down){it.down=true;G.chaos+=5;setMsg('Crash! You knocked over a bin. +5 chaos points.','')}
  }
  if(G.hearts<=0){G.over=true;setMsg('Out of hearts. Hazards add up quickly. Press New game to try again.','lose')}
  else if(nx===COLS-1&&ny===ROWS-1){
    if(G.n===20){G.over=true;setMsg('<b>You made it home.</b> 20 good habits collected. Sustainable growth beats shortcuts. Chaos points: '+G.chaos+'.','win')}
    else setMsg('Home is right here, but '+(20-G.n)+' essentials are still out in the city. Go collect them.','')
  }
  renderGame();
}
board.addEventListener('click',function(e){
  var c=e.target.closest('.cell');if(!c||!G)return;
  var tx=+c.dataset.x,ty=+c.dataset.y,dx=tx-G.x,dy=ty-G.y;if(!dx&&!dy)return;
  if(Math.abs(dx)>=Math.abs(dy))move(dx>0?1:-1,0);else move(0,dy>0?1:-1);
});
$$('.pad button').forEach(function(b){b.addEventListener('click',function(){var d=b.dataset.d.split(',');move(+d[0],+d[1])})});
$('#gNew').addEventListener('click',newGame);
var gameActive=false,gw=$('#gamewrap');
gw.addEventListener('pointerdown',function(){gameActive=true});
document.addEventListener('pointerdown',function(e){if(!gw.contains(e.target))gameActive=false});
window.addEventListener('keydown',function(e){
  if(!gameActive)return;var m={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0],w:[0,-1],s:[0,1],a:[-1,0],d:[1,0],W:[0,-1],S:[0,1],A:[-1,0],D:[1,0]}[e.key];
  if(m){e.preventDefault();move(m[0],m[1])}
});
newGame();

/* ---------- MeowSEO chat ---------- */
var log=$('#log'),sugg=$('#sugg');
function addMsg(t,who){
  var d=document.createElement('div');d.className='b '+who;
  d.innerHTML=(who==='bot'?'<img src="'+FLOAT+'" alt="">':'')+'<p>'+esc(t)+'</p>';
  log.appendChild(d);log.scrollTop=log.scrollHeight;
}
var KB=[
 {k:['hello','hi ','hey','meow'],a:"Meow! I’m MeowSEO, Catalyst’s corner of Divya’s portfolio. Ask me about her case studies, skills, tools or how to get in touch."},
 {k:['postfity'],a:"At Postfity, Divya grew organic traffic from 450 to 1M by combining programmatic SEO and automation. It’s the project that shows what she likes most about SEO: building a process that can scale."},
 {k:['simplified'],a:"At Simplified, Divya contributed to the team effort that grew organic clicks to 1M per day. Alongside that growth, the team increased the conversion rate by 30%."},
 {k:['creditmitra','credit mitra','audience','33'],a:"At CreditMitra, Divya contributed to growing the website audience from 4.6K active users in March 2026 to more than 155K by September 2026, about 33.8×."},
 {k:['result','number','proof','impact','traffic','clicks','stats'],a:"The headline numbers: 1M organic traffic at Postfity, 1M organic clicks per day at Simplified, and about 33.8× audience growth at CreditMitra."},
 {k:['programmatic'],a:"Programmatic SEO means templates and data that turn into thousands of ranking pages. It’s how Divya took Postfity from 450 to 1M organic traffic, with automation and human review keeping quality up."},
 {k:['automation','n8n','apps script','workflow'],a:"SEO automation here means workflows that remove repetitive tasks and scale output. Tools in Divya’s kit include Google Sheets, Google Apps Script and n8n, and she keeps human review in the loop."},
 {k:['skill','expertise','good at','strength'],a:"Six areas: programmatic SEO, SEO automation, technical SEO, content strategy, analytics and CRO, and a growth mindset (experiment, measure, repeat)."},
 {k:['tool','ahrefs','semrush','screaming','search console','analytics','stack'],a:"Her directory covers Google Search Console, GA4, Tag Manager and Looker Studio; Ahrefs, Semrush, Google Trends and Keyword Planner; Screaming Frog, PageSpeed Insights and the Rich Results Test; plus Google Sheets, Apps Script and n8n. Filter them in the Skills section."},
 {k:['technical','crawl','index'],a:"Technical SEO is about keeping important pages crawlable, indexable and fast. Screaming Frog, PageSpeed Insights and the Rich Results Test are the tools listed for it."},
 {k:['contact','email','reach','hire','résumé','resume','cv','linkedin'],a:"Email shukladivya1972@gmail.com or find Divya on LinkedIn at linkedin.com/in/divya-kumari-shukla. Her résumé is available on request by email."},
 {k:['game','play','search city','hazard','essential'],a:"Catalyst’s Search City is in the Introduction. Collect all 20 SEO essentials, dodge the 20 hazards (you have 3 hearts), knock over bins for chaos points and get home to win."},
 {k:['hobby','hobbies','mountain','book','beyond','life'],a:"Outside SEO, Divya is a mountain lover who’s happiest where the air is thin, and she has 100+ books and counting."},
 {k:['catalyst','cat','who are you','kitten'],a:"I’m Catalyst, a curious lost kitten who keeps Divya company. In the game, I’m trying to find my way home through Search City."},
 {k:['career','experience','timeline','history','work'],a:"Most recent: CreditMitra audience growth, March to September 2026. Other highlights: programmatic SEO at Postfity and organic search at Simplified. Full history is on LinkedIn."},
 {k:['conversion','cro'],a:"At Simplified, the team increased the conversion rate by 30% alongside the organic click growth. Divya’s approach is turning clicks into conversions, measured end to end."}
];
var FALL="Meow? I only know what’s in this portfolio. Try asking about Postfity, Simplified, CreditMitra, her skills and tools, or how to get in touch.";
function reply(q){
  var s=' '+q.toLowerCase()+' ';
  for(var i=0;i<KB.length;i++){for(var j=0;j<KB[i].k.length;j++){if(s.indexOf(KB[i].k[j])>-1)return KB[i].a}}
  return FALL;
}
function ask(q){q=q.trim();if(!q)return;addMsg(q,'me');setTimeout(function(){addMsg(reply(q),'bot')},380)}
addMsg("Meow! I’m MeowSEO. Ask me about Divya’s case studies, skills or how to reach her.",'bot');
["What did Divya do at Postfity?","Which tools does she use?","How do I contact her?","Tell me about the game"].forEach(function(q){
  var b=document.createElement('button');b.type='button';b.className='chip';b.textContent=q;b.onclick=function(){ask(q)};sugg.appendChild(b)});
$('#chatForm').addEventListener('submit',function(e){e.preventDefault();var i=$('#chatIn');ask(i.value);i.value=''});

/* =====================================================================
   HOMEPAGE CONTENT. Edit the lists below to update the homepage.
   ===================================================================== */
var CAPS=[
 {t:'Technical SEO',d:'Crawlability, indexing, site structure and speed.',tools:'Screaming Frog, PageSpeed Insights, Rich Results Test',go:'s04',gl:'See skills & tools'},
 {t:'Programmatic SEO',d:'Templates and data that turn into thousands of ranking pages.',tools:'Google Sheets, Apps Script, n8n',go:'s05',focus:'cs-postfity',gl:'See the Postfity case study'},
 {t:'Content strategy',d:'Topic clusters built around real search intent.',tools:'Ahrefs, Semrush, Google Trends, Google Keyword Planner',go:'s05',focus:'cs-creditmitra',gl:'See the CreditMitra case study'},
 {t:'AI search and GEO/AEO',d:'Making trustworthy information clear and easy to cite, and answering natural-language questions directly.',tools:'Schema markup, clear entities, conversational answers',go:'s02',gl:'Play Catalyst’s Search City'},
 {t:'Analytics and growth',d:'Turning clicks into conversions, measured end to end.',tools:'Google Search Console, GA4, Tag Manager, Looker Studio',go:'s03',gl:'See proof of work'},
 {t:'SEO automation',d:'Workflows that remove repetitive tasks and scale output, with human review.',tools:'n8n, Google Apps Script, Google Sheets',go:'s04',gl:'See skills & tools'}
];
var STEPS=[
 ['Investigate','Crawl the site, read Search Console and study the results page to find where the opportunity is.'],
 ['Prioritize','Rank ideas by business impact and effort, so the first work is the work that matters.'],
 ['Build','Ship templates, pages and workflows that can repeat instead of one-off fixes.'],
 ['Launch','Release in controlled batches, with human review before anything scales.'],
 ['Measure','Track clicks, sign-ups and conversions, then feed what I learn into the next round.']
];
var BUILT=[
 {t:'Programmatic page systems',tag:'Programmatic SEO',img:'icon-proof.png',sum:'Template and data systems that turn into many ranking pages.',
  pts:['Postfity: organic traffic from 450 to 1M with programmatic SEO and automation.','Otto: 170 pages launched.','Google Sheets holds keyword lists, page data and templates.'],
  links:[['s05','cs-postfity','Postfity case study'],['s05','cs-otto','Otto case study']]},
 {t:'SEO dashboards and reporting',tag:'Analytics',img:'icon-intro.png',sum:'Reporting that connects search activity to outcomes.',
  pts:['Search Console for clicks, impressions and indexing.','GA4 for audiences, events and conversions.','Tag Manager for event tracking and Looker Studio for dashboards.'],
  links:[['s04',null,'Skills & tools']]},
 {t:'Technical SEO audits',tag:'Technical SEO',img:'icon-cases.png',sum:'Checks that keep important pages crawlable, indexable and fast.',
  pts:['Crawls with Screaming Frog to audit links and metadata.','PageSpeed Insights for performance and Core Web Vitals.','Rich Results Test for rich result eligibility.'],
  links:[['s04',null,'Skills & tools']]},
 {t:'AI search experiments',tag:'GEO & AEO',img:'icon-skills.png',sum:'Testing how trustworthy information becomes easy for AI search to cite.',
  pts:['Clear entities and truthful structured data.','Natural-language questions answered directly.','No manipulation. Deceiving AI search is not a durable strategy.'],
  links:[['s02',null,'Search City game'],['s09',null,'Ask MeowSEO']]}
];
var EXPLORING=[
 ['AI search and GEO','How trustworthy information gets found and cited in AI answers.'],
 ['Programmatic SEO','Templates and data that scale pages without losing quality.'],
 ['SEO automation','Repeatable workflows with a human reviewing the output.'],
 ['Search beyond blue links','Visibility in answers, summaries and assistants, not only the ten links.']
];
var MINI_TL=[
 {when:'Mar–Sep 2026',t:'CreditMitra',d:'Audience growth from 4.6K to 155K+ active users. Daily GSC clicks from ~15 to 9,000+ (reported).',now:true},
 {when:'Highlight',t:'Otto',d:'170 pages launched. Daily sign-ups from 4 to 30 (reported).'},
 {when:'Highlight',t:'Simplified',d:'Organic search growth and a 30% higher conversion rate.'},
 {when:'Highlight',t:'Postfity',d:'Programmatic SEO and automation took organic traffic from 450 to 1M.'},
 {when:'Focus today',t:'6 years in SEO',d:'Programmatic SEO, AEO and GEO, automation and growth analytics.'}
];
var FUN=[
 ['⛰️','Mountain lover','Happiest where the air is thin and the views are endless.'],
 ['📚','100+ books and counting','I love a good novel, and I’m always happy to buy a few more.'],
 ['🎮','Search City','Catalyst is lost in a city of 40 SEO ideas. Help her get home.','Play the game','s02'],
 ['🐈','Experiment, measure, repeat','Curious like a cat. Go on, pet Catalyst.','Pet Catalyst','pet']
];

/* ---------- render homepage ---------- */
(function(){
  var dots=$('#ottoDots'),h='';for(var i=0;i<170;i++)h+='<i style="--i:'+i+'"></i>';dots.innerHTML=h;
  $('#caps').innerHTML=CAPS.map(function(c,i){return '<button class="cap" aria-expanded="false" data-i="'+i+'"><h3>'+esc(c.t)+'<span aria-hidden="true">+</span></h3><p>'+esc(c.d)+'</p><div class="more" hidden><div><b>Behind it:</b> '+esc(c.tools)+'</div><span class="go" data-go="'+c.go+'"'+(c.focus?' data-focus="'+c.focus+'"':'')+'>'+esc(c.gl)+' →</span></div></button>'}).join('');
  $$('.cap').forEach(function(b){b.addEventListener('click',function(e){
    if(e.target.closest('.go'))return;
    var open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',open?'false':'true');$('.more',b).hidden=open})});
  $('#steps').innerHTML=STEPS.map(function(s){return '<li><h3>'+esc(s[0])+'</h3><p>'+esc(s[1])+'</p></li>'}).join('');
  $('#shelf').innerHTML=BUILT.map(function(b,i){return '<button class="shelfcard" data-b="'+i+'"><div class="thumb"><img src="'+b.img+'" alt=""></div><div class="body"><h3 style="font-size:1.05rem">'+esc(b.t)+'</h3><p>'+esc(b.sum)+'</p><span>View details →</span></div></button>'}).join('');
  $('#radar').innerHTML=EXPLORING.map(function(r){return '<div class="rd"><span class="pulse" aria-hidden="true"></span><h3 style="font-size:1.1rem">'+esc(r[0])+'</h3><p>'+esc(r[1])+'</p></div>'}).join('');
  $('#miniTl').innerHTML=MINI_TL.map(function(t){return '<li class="'+(t.now?'now':'')+'"><div class="when">'+esc(t.when)+'</div><h3>'+esc(t.t)+'</h3><p>'+esc(t.d)+'</p></li>'}).join('');
  $('#fun').innerHTML=FUN.map(function(f){return '<div class="f"><span class="e" aria-hidden="true">'+f[0]+'</span><h3 style="font-size:1.05rem">'+esc(f[1])+'</h3><p>'+esc(f[2])+'</p>'+(f[3]?'<button class="btn" '+(f[4]==='pet'?'data-pet="1"':'data-go="'+f[4]+'"')+'>'+esc(f[3])+'</button>':'')+'</div>'}).join('');
  $$('[data-pet]').forEach(function(b){b.addEventListener('click',function(){catbtn.click()})});
})();

/* ---------- details modal ---------- */
var modal=$('#modal'),lastFocus=null;
function openModal(i){
  var b=BUILT[i];lastFocus=document.activeElement;
  $('#mTag').textContent=b.tag;$('#mTitle').textContent=b.t;$('#mSum').textContent=b.sum;
  $('#mList').innerHTML=b.pts.map(function(p){return '<li>'+esc(p)+'</li>'}).join('');
  $('#mLinks').innerHTML=b.links.map(function(l){return '<button class="btn" data-go="'+l[0]+'"'+(l[1]?' data-focus="'+l[1]+'"':'')+'>'+esc(l[2])+' →</button>'}).join('');
  modal.hidden=false;$('.mbox',modal).focus();
}
function closeModal(){if(modal.hidden)return;modal.hidden=true;if(lastFocus&&lastFocus.focus)lastFocus.focus()}
document.addEventListener('click',function(e){var c=e.target.closest('.shelfcard');if(c)openModal(+c.dataset.b)});
$('#mClose').addEventListener('click',closeModal);
modal.addEventListener('click',function(e){if(e.target===modal)closeModal()});
window.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal()});

/* ---------- hero: Catalyst speech bubble ---------- */
var HERO_LINES=["Index me, human.","I rank naps number one.","Did someone say sitemap?","404: treat not found.","Crawl budget? I just crawl into boxes.","Fresh content smells like tuna.","Zero clicks? Meow, zero problem.","Ten blue links and one blue yarn ball."];
var hb=$('#herobubble'),hbT=null,lastLine=-1;
function heroSay(){
  var i;do{i=Math.floor(Math.random()*HERO_LINES.length)}while(i===lastLine);lastLine=i;
  hb.textContent=HERO_LINES[i];hb.classList.add('on');clearTimeout(hbT);hbT=setTimeout(function(){hb.classList.remove('on')},2400);
}
var hw=$('#herowrap');
hw.addEventListener('mouseenter',heroSay);hw.addEventListener('click',heroSay);hw.addEventListener('focus',heroSay);

/* ---------- copy email (home CTA) ---------- */
$('#copyHomeMail').addEventListener('click',function(){
  var btn=this,txt=$('#homeMail').textContent;
  function done(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy email'},1600)}
  function fallback(){var r=document.createRange();r.selectNodeContents($('#homeMail'));var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='Selected';setTimeout(function(){btn.textContent='Copy email'},1600)}
  try{navigator.clipboard.writeText(txt).then(done,fallback)}catch(e){fallback()}
});

/* ---------- start ---------- */
showPage(location.hash.slice(1));

})();
