var FILES={home:'index.html',checkin:'CheckIn.html',checkout:'CheckOut.html',infos:'Information-Equipement.html',regles:'Regle.html',galerie:'Galerie.html',reserver:'Reservation.html',parking:'Parking.html'};
var LABEL={home:'Accueil',checkin:'Check-in',parking:'Parking',infos:'Équipements',regles:'Règles',checkout:'Check-out',galerie:'Galerie',reserver:'Réserver'};
/* Même menu sur toutes les pages, dans l'ordre du séjour */
var ORDER=['home','checkin','parking','infos','regles','checkout','galerie','reserver'];
var LOGO='<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true"><rect width="40" height="40" rx="8" fill="#8A6D47"/><circle cx="30" cy="13" r="5.5" fill="#EAD9BC"/><rect x="10" y="5" width="11" height="24" rx="1" fill="#F9F7F2"/><g fill="#8A6D47"><rect x="12.5" y="8" width="2.2" height="2.2"/><rect x="16.3" y="8" width="2.2" height="2.2"/><rect x="12.5" y="12.5" width="2.2" height="2.2"/><rect x="16.3" y="12.5" width="2.2" height="2.2"/><rect x="12.5" y="17" width="2.2" height="2.2"/><rect x="16.3" y="17" width="2.2" height="2.2"/><rect x="12.5" y="21.5" width="2.2" height="2.2"/><rect x="16.3" y="21.5" width="2.2" height="2.2"/></g><path d="M5 31.5q3.5-3 7 0t7 0 7 0 7 0" fill="none" stroke="#F9F7F2" stroke-width="1.8" stroke-linecap="round"/><path d="M5 36q3.5-3 7 0t7 0 7 0 7 0" fill="none" stroke="#F9F7F2" stroke-width="1.8" stroke-linecap="round"/></svg>';
var page=document.body.getAttribute('data-page');
document.getElementById('hd').innerHTML='<div class="bar"><a class="brand" href="index.html">'+LOGO+'<span>Le 13e<i>.</i> Carry-le-Rouet</span></a><button class="burger" id="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button><nav id="nav" aria-label="Navigation">'+ORDER.map(function(k){return '<a href="'+FILES[k]+'"'+(k===page?' class="on" aria-current="page"':'')+'>'+LABEL[k]+'</a>'}).join('')+'<a href="index.html#contact">Contact</a></nav></div>';
document.getElementById('burger').addEventListener('click',function(){var o=document.getElementById('nav').classList.toggle('open');this.setAttribute('aria-expanded',o)});

/* Icônes */
var P={
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
hourglass:'<path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"/>',
moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M14 9l2 2"/>',
door:'<path d="M6 21V3h10v18M3 21h18M13 12h.01"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M21 16l-5-5-9 9"/>',
park:'<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M10 17V8h3.5a2.5 2.5 0 0 1 0 5H10"/>',
fork:'<path d="M5 3v8M9 3v8M5 7h4M7 11v10M17 3c-2 2-2 6 0 8v10"/>',
trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/>',
bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01"/>',
snow:'<path d="M12 2v20M4 7l16 10M20 7L4 17"/>',
bed:'<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-8v5"/>',
shower:'<path d="M5 20v-8a5 5 0 0 1 10 0M15 12h4M10 17v2M13 17v2M16 17v2"/>',
tv:'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/>',
no:'<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6M17 5a3.5 3.5 0 0 1 0 7M21.5 20c0-3-1.5-5-4-5.5"/>',
spark:'<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',
alert:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
wallet:'<path d="M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4zM4 7V5a2 2 0 0 1 2-2h11M16 14h.01"/>',
mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
pin:'<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
check:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12l3 3 5-6"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
car:'<path d="M5 16l1.5-6h11L19 16M3 16h18v3H3zM7 19v2M17 19v2"/>'
};
[].forEach.call(document.querySelectorAll('[data-i]'),function(el){
  if(el.tagName==='SPAN'||el.tagName==='I'){
    el.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+(P[el.getAttribute('data-i')]||'')+'</svg>';
  }
});

/* Photos : le nom du fichier dans le dossier images/ décide de l'emplacement */
var EXT=['jpg','jpeg','png','webp','JPG','JPEG','PNG','WEBP'];
function find(base,cb){
  var i=0;
  (function t(){
    if(i>=EXT.length){cb(null);return}
    var im=new Image();
    im.onload=function(){cb(im.src)};
    im.onerror=function(){i++;t()};
    im.src='images/'+base+'.'+EXT[i];
  })();
}
[].forEach.call(document.querySelectorAll('[data-img]'),function(el){
  find(el.getAttribute('data-img'),function(src){
    if(!src){return}
    el.classList.remove('ph');el.classList.add('done');
    el.innerHTML='<img src="'+src+'" alt="'+(el.getAttribute('data-alt')||'')+'">';
  });
});

/* Galerie : salon-1.jpg, salon-2.jpg ... jusqu'à 8 photos par pièce */
var ROOMS=[['Salon','salon'],['Chambre','chambre'],['Cuisine','cuisine'],['Salle de bain','salle-de-bain'],['Balcon','balcon'],['Vue','vue'],['Carry-le-Rouet','carry-le-rouet']];
var gal=document.getElementById('gal');
if(gal){
  ROOMS.forEach(function(r){
    var sec=document.createElement('div');
    sec.className='card';
    sec.innerHTML='<h2>'+r[0]+'</h2><div class="grid"></div>';
    gal.appendChild(sec);
    var grid=sec.lastChild,found=[],n=8,count=0;
    function finish(){
      var h='';
      for(var i=1;i<=n;i++){if(found[i]){h+='<div class="done"><img src="'+found[i]+'" alt="'+r[0]+'"></div>'}}
      grid.innerHTML=h||'<div class="ph">Ajoutez images/'+r[1]+'-1.jpg</div>';
    }
    for(var k=1;k<=n;k++){
      (function(i){find(r[1]+'-'+i,function(src){found[i]=src;count++;if(count===n){finish()}})})(k);
    }
  });
}

/* Image de fond du bandeau : images/accueil-bandeau.jpg (sinon accueil-1, sinon accueil-principale) */
[].forEach.call(document.querySelectorAll('[data-bg]'),function(el){
  var l=el.getAttribute('data-bg').split(',');
  (function t(i){
    if(i>=l.length){return}
    find(l[i],function(src){
      if(!src){t(i+1);return}
      el.style.backgroundImage='url("'+src+'")';
      el.classList.add('has-img');
    });
  })(0);
});

/* Barre du haut : disparaît quand on descend, réapparaît quand on remonte */
var lastY=window.scrollY,hdEl=document.getElementById('hd');
window.addEventListener('scroll',function(){
  var y=window.scrollY;
  if(y>lastY&&y>80){hdEl.classList.add('hide')}
  else if(y<lastY){hdEl.classList.remove('hide')}
  lastY=y;
},{passive:true});


/* Formulaire « Nous écrire » : ouvre la messagerie avec le message prérempli */
var CONTACT_EMAIL='Le13e.CarryLeRouet@gmail.com';
var dlg=document.getElementById('formDlg'),openBtn=document.getElementById('openForm');
if(dlg&&openBtn&&dlg.showModal){
  openBtn.addEventListener('click',function(e){e.preventDefault();dlg.showModal()});
  document.getElementById('closeForm').addEventListener('click',function(){dlg.close()});
  document.getElementById('cancelForm').addEventListener('click',function(){dlg.close()});
  dlg.addEventListener('click',function(e){if(e.target===dlg){dlg.close()}});
  document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();
    var f=e.target,v=function(n){return f.elements[n].value.trim()};
    var body='Nom : '+v('nom')+'\r\nE-mail : '+v('email')+'\r\nTéléphone : '+(v('tel')||'—')+'\r\n\r\n'+v('message');
    window.location.href='mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent('Le 13e – '+v('sujet'))+'&body='+encodeURIComponent(body);
    dlg.close();f.reset();
  });
}


/* Calendrier de disponibilités
   Pour bloquer des dates : ['arrivée','départ'] au format AAAA-MM-JJ.
   Les nuits comptées vont de l'arrivée jusqu'à la veille du départ.
   Ces dates sont synchronisées avec les agendas Google (Réservations Le 13e + Airbnb importé). */
var BOOKED=[['2026-10-29','2026-11-09'],['2026-11-10','2027-02-15'],['2027-07-28','2027-11-01']];
/* Adresse du script Google (voir explications) : collez ici l'URL qui finit par /exec. Laissez vide pour utiliser la liste BOOKED ci-dessus. */
var AGENDA_URL='';
var calEl=document.getElementById('cal');
if(calEl){
  var pad=function(n){return(n<10?'0':'')+n},iso=function(y,m,d){return y+'-'+pad(m+1)+'-'+pad(d)};
  var busy={};
  function setBusy(list){busy={};list.forEach(function(r){var d=new Date(r[0]+'T12:00:00'),e=new Date(r[1]+'T12:00:00');for(;d<e;d.setDate(d.getDate()+1)){busy[iso(d.getFullYear(),d.getMonth(),d.getDate())]=1}})}
  setBusy(BOOKED);
  var now=new Date(),today=iso(now.getFullYear(),now.getMonth(),now.getDate());
  var cy=now.getFullYear(),cm=now.getMonth(),A=null,B=null;
  var MN=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  var fr=function(k){var p=k.split('-');return p[2]+'/'+p[1]+'/'+p[0]};
  var between=function(a,b){var d=new Date(a+'T12:00:00'),e=new Date(b+'T12:00:00');for(;d<e;d.setDate(d.getDate()+1)){if(busy[iso(d.getFullYear(),d.getMonth(),d.getDate())])return true}return false};
  var inA=document.getElementById('arr'),inD=document.getElementById('dep'),sum=document.getElementById('calsum');
  function month(y,m){
    var first=(new Date(y,m,1).getDay()+6)%7,n=new Date(y,m+1,0).getDate();
    var h='<div class="cm"><h4>'+MN[m]+' '+y+'</h4><div class="cg">'+['L','M','M','J','V','S','D'].map(function(x){return'<span class="dw">'+x+'</span>'}).join('');
    for(var i=0;i<first;i++){h+='<span></span>'}
    for(var d=1;d<=n;d++){
      var k=iso(y,m,d),c='day',dis=(k<today||busy[k]);
      if(busy[k])c+=' busy';else if(k<today)c+=' past';
      if(A&&k===A)c+=' sel';
      if(A&&B&&k>A&&k<B)c+=' mid';
      if(B&&k===B)c+=' sel';
      h+='<button type="button" class="'+c+'" data-k="'+k+'"'+(k<today?' disabled':'')+'>'+d+'</button>';
    }
    return h+'</div></div>';
  }
  function draw(){
    var y2=cy,m2=cm+1;if(m2>11){m2=0;y2++}
    calEl.innerHTML='<div class="cnav"><button type="button" id="cp" aria-label="Mois précédent">‹</button><button type="button" id="cn" aria-label="Mois suivant">›</button></div><div class="cms">'+month(cy,cm)+month(y2,m2)+'</div>';
    document.getElementById('cp').onclick=function(){cm--;if(cm<0){cm=11;cy--}draw()};
    document.getElementById('cn').onclick=function(){cm++;if(cm>11){cm=0;cy++}draw()};
    [].forEach.call(calEl.querySelectorAll('.day'),function(b){b.onclick=function(){pick(b.getAttribute('data-k'))}});
  }
  function pick(k){
    if(!A||B){ if(busy[k])return; A=k;B=null }
    else if(k>A){ if(between(A,k)){sum.textContent='Cette période contient des dates déjà occupées.';return} B=k }
    else { if(busy[k])return; A=k }
    inA.value=A||'';inD.value=B||'';
    if(A&&B){var n=Math.round((new Date(B+'T12:00:00')-new Date(A+'T12:00:00'))/864e5);sum.textContent='Du '+fr(A)+' au '+fr(B)+' : '+n+' nuit'+(n>1?'s':'')+'.'}
    else{sum.textContent='Arrivée le '+fr(A)+'. Choisissez maintenant la date de départ.'}
    draw();
  }
  draw();
  if(AGENDA_URL){fetch(AGENDA_URL).then(function(r){return r.json()}).then(function(l){if(Array.isArray(l)){BOOKED=l;setBusy(l);draw()}}).catch(function(){})}
  function fromInputs(){
    if(inA.value&&inD.value&&inD.value>inA.value&&!between(inA.value,inD.value)){A=inA.value;B=inD.value;sum.textContent='Du '+fr(A)+' au '+fr(B)+'.';draw()}
  }
  inA.addEventListener('change',fromInputs);inD.addEventListener('change',fromInputs);
}

/* Formulaire de réservation directe */
var bf=document.getElementById('bookForm');
if(bf){
  bf.addEventListener('submit',function(e){
    e.preventDefault();
    var f=bf,v=function(n){return f.elements[n].value.trim()};
    if(v('dep')<=v('arr')){alert('La date de départ doit être après la date d’arrivée.');return}
    if(BOOKED.some(function(r){return v('arr')<r[1]&&v('dep')>r[0]})){alert('Ces dates ne sont pas disponibles.');return}
    var body='Demande de réservation\r\nNom : '+v('nom')+'\r\nE-mail : '+v('email')+'\r\nTéléphone : '+(v('tel')||'—')+'\r\nArrivée : '+v('arr')+'\r\nDépart : '+v('dep')+'\r\nVoyageurs : '+v('voy')+'\r\n\r\n'+v('message');
    window.location.href='mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent('Le 13e – Réservation')+'&body='+encodeURIComponent(body);
  });
}
