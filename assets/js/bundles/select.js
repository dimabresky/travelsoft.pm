var Travelsoft=Travelsoft||{};(function(a){"use strict";a.SITE_ADDRESS="https://vetliva.ru",a.REQUEST_URL=a.SITE_ADDRESS+"/travelsoft.pm",a.JS_URL=a.REQUEST_URL+"/assets/js",a.CSS_URL=a.REQUEST_URL+"/assets/css"})(Travelsoft);(function(a){"use strict";a.utils={callbacks:{},sendRequest:function(b,c,d){function f(){g||(delete a.utils.callbacks[h],console.warn("Query error "+j))}var g=!1,h="cb"+(Math.random()+"").slice(-6),j=a.REQUEST_URL+"/?",k=c,l;k.push("callback=Travelsoft.utils.callbacks."+h),k.push("method="+b),j+=k.join("&"),a.utils.callbacks[h]=function(m){g=!0,delete a.utils.callbacks[h],d(m)},l=document.createElement("script"),l.type="text/javascript",l.onload=f,l.onerror=f,l.src=j,document.body.appendChild(l)},screen:function(b){var c="";return"string"==typeof b&&(c=b.replace(/&/g,"&amp;"),c=b.replace(/</g,"&lt;"),c=b.replace(/"/g,"&quot;"),c=b.replace(/>/g,"&gt;"),c=b.replace(/'/g,"&#039;"),c=b.replace(/script/g,""),c=b.replace(/onclick/g,""),c=b.replace(/onchange/g,""),c=b.replace(/onkeydown/g,""),c=b.replace(/onkeypress/g,""),c=b.replace(/onmouseout/g,""),c=b.replace(/onmouseover/g,"")),c},HWatcher:{__prev:null,__id:null,__parent:null,watch:function(b){var c=this;c.unwatch(b),c.__id=setInterval(function(){c.__prev!==b.scrollHeight&&(c.__parent&&(c.__parent.style.height=b.scrollHeight+10+"px"),c.__prev=b.scrollHeight)},100)},unwatch:function(b){this.__id&&(clearInterval(this.__id),this.__id=null,this.__prev=null,b.style.height=0)}}}})(Travelsoft);(function(a){"use strict";function b(c,d,f){var g=document.createElement("input");g.type="text",g.placeholder="...",g.id="iframe-value",g.name="iframe-value",g.className="form-control",g.onkeydown=function(){var h=this;setTimeout(function(){var j=h.value;f.innerHTML=j?function(){var k=new RegExp(j,"i"),l=c.filter(function(m){return k.test(m.text)});return l.length?l.map(function(m){return`<li data-span-text="${m.span_text}" data-value="${m.value}">${m.text}</li>`}).join(""):`<li id="no-match">no matches</li>`}():function(){return c.map(function(k){return`<li data-span-text="${k.span_text}" data-value="${k.value}">${k.text}</li>`}).join("")}()},100)},d.appendChild(g)}a.select={init:function(c){var d=c.data,f=parent.document.getElementById(c.iframe_id),g=document.createElement("div"),h=document.createElement("div"),j=document.createElement("div"),k=document.createElement("div"),l=document.createElement("ul");g.id="container",g.className="container",h.className="row",j.className="col-md-12",k.className="form-group",l.id="iframe-values-list",l.innerHTML=function(m){for(var n=``,o=0;o<m.length;o++)n+=`<li data-span-text="${m[o].span_text}" data-value="${m[o].value}">${m[o].text}</li>`;return n}(d),l.onclick=function(m){"LI"===m.target.nodeName&&(f.style.display="none",f.dataset.value=m.target.dataset.value,f.dataset.text=m.target.dataset.spanText&&m.target.dataset.spanText.length?m.target.dataset.spanText:m.target.innerText)},c.without||b(d,k,l),k.appendChild(l),j.appendChild(k),h.appendChild(j),g.appendChild(h),document.body.innerHTML="",document.body.appendChild(g)}}})(Travelsoft);