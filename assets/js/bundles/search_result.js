var Travelsoft=Travelsoft||{};(function(a){"use strict";a.SITE_ADDRESS="https://vetliva.ru",a.VIDEO_URL="https://www.youtube.com/embed/",a.REQUEST_URL=a.SITE_ADDRESS+"/travelsoft.pm",a.JS_URL=a.REQUEST_URL+"/assets/js",a.CSS_URL=a.REQUEST_URL+"/assets/css"})(Travelsoft);(function(a){"use strict";a.utils={callbacks:{},makeid:function(){for(var b="",c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=0;5>d;d++)b+=c.charAt(Math.floor(Math.random()*c.length));return b},sendRequest:function(b,c,d){function f(){g||(delete a.utils.callbacks[h],console.warn("Query error "+j))}var g=!1,h="cb"+(Math.random()+"").slice(-6),j=a.REQUEST_URL+"/?",k=c,l;k.push("callback=Travelsoft.utils.callbacks."+h),k.push("method="+b),j+=k.join("&"),a.utils.callbacks[h]=function(m){g=!0,delete a.utils.callbacks[h],d(m)},l=document.createElement("script"),l.type="text/javascript",l.onload=f,l.onerror=f,l.src=j,document.body.appendChild(l)},screen:function(b){var c="";return"string"==typeof b&&(c=b.replace(/&/g,"&amp;"),c=b.replace(/</g,"&lt;"),c=b.replace(/"/g,"&quot;"),c=b.replace(/>/g,"&gt;"),c=b.replace(/'/g,"&#039;"),c=b.replace(/script/g,""),c=b.replace(/onclick/g,""),c=b.replace(/onchange/g,""),c=b.replace(/onkeydown/g,""),c=b.replace(/onkeypress/g,""),c=b.replace(/onmouseout/g,""),c=b.replace(/onmouseover/g,"")),c},HWatcher:{__prev:null,__id:null,__parent:null,watch:function(b){var c=this;c.unwatch(b),c.__id=setInterval(function(){c.__prev!==b.scrollHeight&&(c.__parent&&(c.__parent.style.height=b.scrollHeight+10+"px"),c.__prev=b.scrollHeight)},100)},unwatch:function(b){this.__id&&(clearInterval(this.__id),this.__id=null,this.__prev=null,b.style.height=0)}}}})(Travelsoft);(function(a,b,c,d){"use strict";function f(z,A,B){B=B||0,b(parent.document).find("html").animate({scrollTop:z.offset().top+A.offset().top-B},500)}function g(z){var A=z.find(".slide-room-lg"),B=z.find(".slide-room-sm");A.owlCarousel({singleItem:!0,autoPlay:!1,navigation:!0,navigationText:["<span class='prev-next-room prev-room'></span>","<span class='prev-next-room next-room'></span>"],pagination:!1}),B.owlCarousel({mouseDrag:!1,navigation:!0,navigationText:["<span class='prev-next-room prev-room'></span>","<span class='prev-next-room next-room'></span>"],itemsCustom:[[320,3],[480,5],[768,6],[992,7],[1200,8]],pagination:!1}),b(".slide-room-sm").on("click",".owl-item",function(C){if(C.preventDefault(),b(this).hasClass("synced"))return!1;b(".synced").removeClass("synced"),b(this).addClass("synced");var D=b(this).data("owlItem");A.data("owlCarousel").goTo(D)})}function h(z){var A=z.data("coords-data"),B=null,C=[];if(b.isArray(A))if(1===A.length)B=new d.Map(z.attr("id"),{center:[+A[0].lat,+A[0].lng],zoom:9,controls:["zoomControl","fullscreenControl"]}),B.geoObjects.add(new d.Placemark(B.getCenter(),{balloonContent:A[0].content}));else{B=new d.Map(z.attr("id"),{center:[0,0],zoom:8,controls:["zoomControl","fullscreenControl"]});for(var D=0;D<A.length;D++)C.push([A[D].lat,A[D].lng]);d.route(C,{mapStateAutoApply:!0}).then(function(E){var G,F=E.getWayPoints();B.geoObjects.add(E),F.options.set("preset","islands#blueStretchyIcon");for(var H=0;H<A.length;H++)G=F.get(H),G.properties.set("iconContent",A[H].title),G.options.set("hasBalloon",!1)})}}function j(z){z.css({opacity:0.4})}function k(z){z.css({opacity:1})}function l(z,A,B,C){var D=a.utils.makeid();return`<div class="panel panel-default">
                        <div class="panel-heading">
                          <h4 class="panel-title">
                                  <a class="panel-collapser" data-toggle="collapse" data-parent="#${B}" href="#collapse-${D}">
                                    ${z}
                                  </a>
                            </h4>
                        </div>
                        <div id="collapse-${D}" class="panel-collapse collapse ${C}">
                          <div class="panel-body">
                              ${A}
                          </div>
                        </div>
                    </div>`}function m(z,A){document.body.innerHTML=z,a.utils.HWatcher.__parent=window.parent.document.getElementById("search-result_"+A),a.utils.HWatcher.watch(document.getElementById("container"))}function n(z){var A=a.utils.screen;y[z.pager.page]=`<div class="container" id="container">
                                                        ${function(B){return B.length?B.map(function(C){return`<div class="row thumbnail mrtb-10">
                                                                                    <div class="row-flex row-flex-wrap">
                                                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                                                        ${function(D){return D?`<img class="main-img" src="${A(a.SITE_ADDRESS+C.imgSrc)}">`:``}(C.imgSrc)}
                                                                                        </div>
                                                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 flex-col">
                                                                                            <div class="name">${A(C.name)}</div>
                                                                                            <div class="stars-block">
                                                                                                ${function(D){for(var E=``,F=1;F<=D;F++)E+=`<span class="glyphicon glyphicon-star" aria-hidden="true"></span>`;return E}(C.stars)}
                                                                                            </div>
                                                                                            <ul>
                                                                                         ${function(D){var E="";return D.address&&(E+=`<li><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> ${A(D.address)}</li>`),D.route&&(E+=`<li><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> ${A(D.route)}</li>`),D.days&&(E+=`<li><span class="glyphicon glyphicon-time" aria-hidden="true"></span> Количество дней: ${A(D.days)}</li>`),D.duration_time&&(E+=`<li><span class="glyphicon glyphicon-time" aria-hidden="true"></span> Количество часов: ${A(D.duration_time)}</li>`),C.text.distance.minsk&&(E+=`<li><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Расстояние до Минска: ${A(C.text.distance.minsk)} км</li>`),C.text.distance.center&&(E+=`<li><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Расстояние до цента: ${A(C.text.distance.center)} км</li>`),C.text.distance.airport&&(E+=`<li><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Расстояние до аэропорта: ${A(C.text.distance.airport)} км</li>`),E}(C.text)}
                                                                                                
                                                                                            </ul>
                                                                                            <div class="show-offers-block flex-grow">
                                                                                                <div class="details-links">
                                                                                                    <a data-request='${JSON.stringify(C.request)}' class="detail-link __desc" href="#">Описание</a>
                                                                                                    <a data-request='${JSON.stringify(C.request)}' class="detail-link __on-map" href="#">На карте</a>
                                                                                                    <a data-request='${JSON.stringify(C.request)}' class="detail-link __video" href="#">Видео</a>
                                                                                                </div>
                                                                                                <button data-offers-request='${JSON.stringify(C.request)}' class="btn btn-primary show-offers" type="button"><span class="price-from">${C.text.price}</span> <span class="chevron glyphicon glyphicon-chevron-down" aria-hidden="true"></button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>`}).join(""):`<div class="row">
                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">По Вашему запросу ничего не найдено.</div>
                                                                                </div>`}(z.items||[])}
                                                        <div class="row text-right">${function(B){return new c(function(C){for(var D=[],E=0;E<C;E++)D.push(E);return D}(B.records),B.numberPerPage).page(B.page).getHtml()}(z.pager)}
                                        </div>
                                                </div>`,m(y[z.pager.page],z.main_container)}function o(z){"string"==typeof y[z.page]?m(y[z.page],z.insertion_id):a.utils.sendRequest("GetSearchResultRenderData",[function(){var A=window.parent.location.search.replace("?","").split("&").filter(function(B){return 0<B.length&&0===B.indexOf("tpm_params")});return A.push("tpm_params[type]="+z.type),A.push("tpm_params[page]="+z.page),A.push("tpm_params[citizen_price]="+z.citizen_price),A.push("tpm_params[number_per_page]="+z.numberPerPage),A.push("tpm_params[agent]="+z.agent),A.push("tpm_params[hash]="+z.hash),A.join("&")}()],function(A){return function(B){var C=B;C.isError&&(console.warn(B.errorMessage),n({items:[],pager:{page:1,numberPerPage:0},main_container:A.insertion_id})),C.data.pager.numberPerPage=A.numberPerPage,C.data.main_container=A.insertion_id,n(C.data)}}(z))}function p(z,A,B){var C=b(".pagination li.active a").data("page"),D=a.utils.screen;A.find(".info-block").remove(),A.append(`
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 collapsing-block offers hidden">
                <div style="width: 100%">
                    ${function(E){for(var F="",G=0;G<E.length;G++)F+=`<div class="row offer-row mrtb-10">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                    ${E[G].date?`<b>${D(E[G].date)}</b>`:E[G].img_src?`<img class="main-img" src="${a.SITE_ADDRESS+"/"+D(E[G].img_src)}">`:``}</b>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                    ${E[G].service?`<div class="name">${D(E[G].service)}</div><h5>${D(E[G].rate)}</h5>`:`<div class="name">${D(E[G].service)}</div>`}
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 text-right">
                                    <b>${D(E[G].price)}</b>${E[G].citizenprice?`<br><small>${E[G].citizenprice}</small>`:``}
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 text-right">
                                    <button data-add2cart="${D(E[G].add2cart)}" class="btn btn-primary booking" type="button">Бронировать</button>
                                    <div class="about-rate"><a role="button" href="javascript:void(0)">О тарифе</a></div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 rate-desc hidden">
                                        <div class="rate-desc-text">${D(E[G].rate_desc)}</div>
                                </div>
                            </div>`;return F}(z)}
                </div>
            </div>
        `),A.find(".offers").removeClass("hidden"),"function"==typeof B&&B()}function q(z,A,B){A.find(".info-block").remove(),A.append(`
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 collapsing-block info-block hidden">
                <div style="width: 100%">${z.message}</div>
        </div>`),A.find(".info-block").removeClass("hidden"),"function"==typeof B&&B()}function r(z){z.find("span.chevron").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up")}function s(){b(".show-offers").each(function(){t(b(this))})}function t(z){z.find("span.chevron").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down")}function u(z,A,B){var C=null===z?null:z.hasClass("hidden");b(".collapsing-block").addClass("hidden"),null===C?"function"==typeof A&&A():C?(z&&z.removeClass("hidden"),"function"==typeof A&&A()):(z&&z.addClass("hidden"),"function"==typeof B&&B())}function v(z,A,B){var C=b(".pagination li.active a").data("page"),D=a.utils.makeid(),E="accordion-"+a.utils.makeid(),F="in";A.find(".info-block").remove(),A.append(`
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 collapsing-block detail-desc-block hidden">
                
                    ${function(G){var H=``;return b.isArray(G.pictures.big)&&(H+=`<section id="${D}" class="detail-slider">
                                    <div class="slider-room-lg">
                                    <div class="slide-room-lg">
                                        ${function(I){H="";for(var J=0;J<I.length;J++)H+=`<img src="${a.SITE_ADDRESS+I[J]}">`;return H}(G.pictures.big)}
                                    </div>
                                </div>
                                <div class="slider-room-sm">
                                    <div class="row">
                                        <div class="col-md-8 col-md-offset-2">
                                            <div class="slide-room-sm">
                                                ${function(I){H="";for(var J=0;J<I.length;J++)H+=`<img src="${a.SITE_ADDRESS+I[J]}">`;return H}(G.pictures.small)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>`),H+=`<div class="panel-group" id="${E}">`,G.desc&&(H+=l("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",G.desc,E,F),F=""),G.program&&(H+=l("\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0442\u0443\u0440\u0430",G.program,E,F),F=""),G.profiles&&(H+=l("\u041F\u0440\u043E\u0444\u0438\u043B\u044C",function(I){var J=`<div class="featured-service">`;for(var K in I.TYPE_GROUP)J+=`<div class="list-service-section">${I.TYPE_SECTIONS?`${I.TYPE_SECTIONS[K].PICTURE.SRC?`<div class="icon-service" style="float:left; top:2px"><img src="${a.SITE_ADDRESS+I.TYPE_SECTIONS[K].PICTURE.SRC}"></div>`:``}
                                                                            <h4>${I.TYPE_SECTIONS[K].TITLE}</h4>`:``}
                                                                            
                                                                        </div>
                                                                        <ul class="service-accmd">
                                                                            ${function(L){var M="";for(var N in L)M+=`<li><div><img src="${a.SITE_ADDRESS}/local/templates/travelsoft/images/icon-check.png" alt=""></div>${L[N].TITLE} ${L[N].PAID?`<a data-content="За дополнительную плату">(<i class="fa fa-dollar"></i>)</a>`:``}</li>`;return M}(I.TYPE_GROUP[K])}
                                                                        </ul>`;return J+="</div>",J}(G.profiles),E,F),F=""),G.services&&(H+=l("\u0423\u0441\u043B\u0443\u0433\u0438",function(I){var J=`<div class="featured-service">`;for(var K in I.SERVICES_GROUP)J+=`<div class="list-service-section">
                                                                            ${I.SERVICES_SECTIONS[K].PICTURE.SRC?`<div class="icon-service" style="float:left; top:2px"><img src="${a.SITE_ADDRESS+I.SERVICES_SECTIONS[K].PICTURE.SRC}"></div>`:``}
                                                                            <h4>${I.SERVICES_SECTIONS[K].TITLE}</h4>
                                                                        </div>
                                                                        <ul class="service-accmd">
                                                                            ${function(L){var M="";for(var N in L)M+=`<li><div><img src="${a.SITE_ADDRESS}/local/templates/travelsoft/images/icon-check.png" alt=""></div>${L[N].TITLE}</li>`;return M}(I.SERVICES_GROUP[K])}
                                                                        </ul>`;return J+="</div>",J}(G.services),E,F),F=""),G.medecine_services&&(H+=l("\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438",function(I){var J=`<div class="featured-service">`;for(var K in I.MED_SERVICES_GROUP)J+=`<div class="list-service-section">
                                                                            <h4>${I.MED_SERVICES_SECTIONS[K].TITLE}</h4>
                                                                        </div>
                                                                        <ul class="service-accmd">
                                                                            ${function(L){var M="";for(var N in L)M+=`<li><div><img src="${a.SITE_ADDRESS}/local/templates/travelsoft/images/icon-check.png" alt=""></div>${L[N].TITLE} ${L[N].PAID?`<a data-content="За дополнительную плату">(<i class="fa fa-dollar"></i>)</a>`:``}</li>`;return M}(I.MED_SERVICES_GROUP[K])}
                                                                        </ul>`;return J+="</div>",J}(G.medecine_services),E,F),F=""),G.children_services&&(H+=l("\u0423\u0441\u043B\u0443\u0433\u0438 \u0434\u043B\u044F \u0434\u0435\u0442\u0435\u0439",G.children_services,E,F),F=""),G.food&&(H+=l("\u041F\u0438\u0442\u0430\u043D\u0438\u0435",G.food,E,F),F=""),G.rooms_base&&(H+=l("\u041D\u043E\u043C\u0435\u0440\u043D\u0430\u044F \u0431\u0430\u0437\u0430",G.rooms_base,E,F),F=""),G.addinfo&&(H+=l("\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",G.addinfo,E,F),F=""),H+=`</div>`,H}(z)}
                
            </div>
        `),A.find(".detail-desc-block").removeClass("hidden"),"function"==typeof B&&B(),g(b("#"+D))}function w(z,A,B){var C=b(".pagination li.active a").data("page"),D="map-"+a.utils.makeid();A.find(".info-block").remove(),A.append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 collapsing-block show-on-map-block hidden">
                                        <div style="width: 100%">
                                            <div data-coords-data='${JSON.stringify(z)}' id="${D}"></div>
                                        </div>
                                    </div>`),A.find(".show-on-map-block").removeClass("hidden"),"function"==typeof B&&B(),h(b(`#${D}`))}function x(z,A,B){b(".pagination li.active a").data("page");A.find(".info-block").remove(),A.append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 collapsing-block video-block hidden">
                                        <div style="width: 100%">
                                            <iframe class="video-frame" height="100%" width="100%" style="border: none;" src="${a.VIDEO_URL+z.code}" allowfullscreen=""></iframe>
                                        </div>
                                    </div>`),A.find(".video-block").removeClass("hidden"),"function"==typeof B&&B()}var y={};a.searchResult={init:function(z){var A=z;o(A),b(document).on("click",".show-offers",function(B){var C=b(this),D=C.closest(".thumbnail"),E=D.find(".offers");E.length?u(E,function(){r(C)},function(){t(C)}):(u(null,function(){s()}),r(C),j(C),q({message:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435..."},D),a.utils.sendRequest("GetOffersRenderData",[C.data("offers-request").join("&")],function(F){return function(G){return G.isError?(console.warn(G.errorMessage),void q({message:"\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442."},F,function(){k(C)})):void p(G.data,F,function(){k(C)})}}(D))),B.preventDefault()}),b(document).on("click",".about-rate",function(B){b(this).closest(".offer-row").find(".rate-desc").toggleClass("hidden"),B.preventDefault()}),b(document).on("click",".detail-link.__desc",function(B){var C=b(this),D=C.closest(".thumbnail"),E=D.find(".detail-desc-block");E.length?u(E,function(){s()},function(){s()}):(u(null,function(){s()},function(){s()}),j(C),q({message:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435..."},D),a.utils.sendRequest("GetDetailDescriptionRenderData",[C.data("request").join("&")],function(F){return function(G){return G.isError?(console.warn(G.errorMessage),void q({message:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442."},F,function(){k(C)})):void v(G.data,F,function(){k(C)})}}(D))),B.preventDefault()}),b(document).on("click",".detail-link.__on-map",function(B){var C=b(this),D=C.closest(".thumbnail"),E=D.find(".show-on-map-block");E.length?u(E,function(){s()},function(){s()}):(u(null,function(){s()},function(){s()}),j(C),q({message:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u0430\u0440\u0442\u044B. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435..."},D),a.utils.sendRequest("GetDetailMapRenderData",[C.data("request").join("&")],function(F){return function(G){return G.isError?(console.warn(G.errorMessage),void q({message:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442."},F,function(){k(C)})):void w(G.data,F,function(){k(C)})}}(D))),B.preventDefault()}),b(document).on("click",".detail-link.__video",function(B){var C=b(this),D=C.closest(".thumbnail"),E=D.find(".video-block");E.length?u(E,function(){s()},function(){s()}):(u(null,function(){s()},function(){s()}),j(C),q({message:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u0438\u0434\u0435\u043E. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435..."},D),a.utils.sendRequest("GetDetailVideoRenderData",[C.data("request").join("&")],function(F){return function(G){return G.isError?(console.warn(G.errorMessage),void q({message:"\u0412\u0438\u0434\u0435\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442."},F,function(){k(C)})):G.data.code?void x(G.data,F,function(){k(C)}):void q({message:"\u0412\u0438\u0434\u0435\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442."},F,function(){k(C)})}}(D))),B.preventDefault()}),b(document).on("click",".pagination a",function(B){B.preventDefault(),b(this).parent().hasClass("active")||(A.page=b(this).data("page"),o(A))}),b(document).on("click",".booking",function(B){var C=b(this).data("add2cart");B.preventDefault(),C?window.parent.open(a.REQUEST_URL+"/?method=Booking&tpm_params[add2cart]="+C):alert("Some error. Please, try later.")}),b(document).on("click",".panel-collapser",function(){f(b(this),b(parent.document).find("#"+z.insertion_id),100)})}}})(Travelsoft,jQuery,PageNavigator,ymaps);