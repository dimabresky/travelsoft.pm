var Travelsoft=Travelsoft||{};(function(a){"use strict";a.SITE_ADDRESS="https://vetliva.ru",a.REQUEST_URL=a.SITE_ADDRESS+"/travelsoft.pm",a.JS_URL=a.REQUEST_URL+"/assets/js",a.CSS_URL=a.REQUEST_URL+"/assets/css"})(Travelsoft);(function(a){"use strict";a.utils={callbacks:{},sendRequest:function(b,c,d){function e(){f||(delete a.utils.callbacks[g],console.warn("Query error "+h))}var f=!1,g="cb"+(Math.random()+"").slice(-6),h=a.REQUEST_URL+"/?",j=c,k;j.push("callback=Travelsoft.utils.callbacks."+g),j.push("method="+b),h+=j.join("&"),a.utils.callbacks[g]=function(l){f=!0,delete a.utils.callbacks[g],d(l)},k=document.createElement("script"),k.type="text/javascript",k.onload=e,k.onerror=e,k.src=h,document.body.appendChild(k)},screen:function(b){var c="";return"string"==typeof b&&(c=b.replace(/&/g,"&amp;"),c=b.replace(/</g,"&lt;"),c=b.replace(/"/g,"&quot;"),c=b.replace(/>/g,"&gt;"),c=b.replace(/'/g,"&#039;"),c=b.replace(/script/g,""),c=b.replace(/onclick/g,""),c=b.replace(/onchange/g,""),c=b.replace(/onkeydown/g,""),c=b.replace(/onkeypress/g,""),c=b.replace(/onmouseout/g,""),c=b.replace(/onmouseover/g,"")),c},HWatcher:{__prev:null,__id:null,__parent:null,watch:function(b){var c=this;c.unwatch(b),c.__id=setInterval(function(){c.__prev!==b.scrollHeight&&(c.__parent&&(c.__parent.style.height=b.scrollHeight+10+"px"),c.__prev=b.scrollHeight)},100)},unwatch:function(b){this.__id&&(clearInterval(this.__id),this.__id=null,this.__prev=null,b.style.height=0)}}}})(Travelsoft);(function(a){"use strict";function b(){var l=document.createElement("div");return l.id="container",l.className="container",l}function c(l){var m=document.createElement("div");return m.className="form-group",l&&(m.id=l),m}function d(l){var m=document.createElement("select");m.className="form-control";for(var n=``,o=0;o<l.length;o++)n+=`<option ${l[o].selected?"selected=\"\"":""}  value="${l[o].value}">${l[o].text}</option>`;return m.innerHTML=n,m}function e(l){var m=document.createElement("label");return m.innerText=l,m}function f(){var l=document.createElement("div");return l.className="row",l}function g(){var l=document.createElement("div");return l.className="col-md-12",l}function h(l,m,n){var o=c("children-age"),p,q;o.style["margin-top"]="10px",l.appendChild(o);for(var r=1;r<=m;r++)p=e(`Возраст ребенка ${r}`),p.style["margin-top"]="10px",q=d(function(){for(var s=[],t=0;17>t;t++)s.push({selected:t===k,value:t,text:t});return s}()),q.className+=" select-age",q.onchange=function(){for(var s=[],t=document.querySelectorAll(".select-age"),u=0;u<t.length;u++)s.push(t[u].value);n.dataset.age=s.join(";")},o.appendChild(p),o.appendChild(q)}function j(){var l=document.getElementById("children-age");l&&l.remove()}var k=8;a.children={init:function(l){var m=l.data,n=parent.document.getElementById(l.iframe_id),o=b(),p=f(),q=g(),r=c(),s=e("\u0421\u043A\u043E\u043B\u044C\u043A\u043E ?"),t=d(m);r.style["margin-top"]="20px",r.appendChild(s),r.appendChild(t),t.onchange=function(){j(),n.dataset.children=this.value,n.dataset.age="",0<this.value&&(h(this.parentNode,this.value,n),n.dataset.age=function(u){for(var v=[],w=0;w<u;w++)v.push(k);return v.join(";")}(this.value))},q.appendChild(r),p.appendChild(q),o.appendChild(p),document.body.innerHTML="",document.body.appendChild(o),a.utils.HWatcher.__parent=window.parent.document.getElementById(l.iframe_id),a.utils.HWatcher.watch(document.body)}}})(Travelsoft);