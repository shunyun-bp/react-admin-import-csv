(this["webpackJsonptest-ra"]=this["webpackJsonptest-ra"]||[]).push([[0],{606:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10),a=r(686);t.ImportButton=a.ImportButton,t.default=n.connect()(a.ImportButton)},677:function(e,t,r){e.exports=r(985)},686:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function l(e){try{u(n.next(e))}catch(t){o(t)}}function i(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(i){o=[6,i],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var u=l(r(0)),c=r(312),s=l(r(254)),d=r(312),f=r(956),p=l(r(499)),m=l(r(981)),v=i(r(982)),h=l(r(500)),b=r(49);t.ImportButton=function(e){var t={es:n(n({},m.default),v.es),en:n(n({},p.default),v.en)},r=h.default((function(e){return t[e]?t[e]:t.en}),c.resolveBrowserLocale()),l=e.resource,i=e.parseConfig,y=e.logging,g=e.preCommitCallback;if(y&&console.log({props:e}),!l)throw new Error(r.translate("csv.error.emptyResource"));var E=e.variant,w=e.label,_=e.resourceName;w||(w=r.translate("csv.main.import")),E||(E="text"),_||(_=l);var C=u.default.useState(!1),I=C[0],O=C[1],P=u.default.useState(!1),x=P[0],k=P[1],j=u.default.useState(null),B=j[0],S=j[1],D=u.default.useState(null),F=D[0],M=D[1],N=u.default.useState(null),R=N[0],T=N[1],q=function(){O(!1),k(!1),S(null),M(null)},z=function(e){void 0===e&&(e=!1),q(),e||A(r.translate("csv.alert.imported")+" "+B),e&&A(r.translate("csv.error.importing")+" "+B+", "+e,"error")},A=d.useNotify(),L=d.useDataProvider();return u.default.createElement(u.default.Fragment,null,u.default.createElement(c.Button,{color:"primary",component:"span",variant:E,label:w,onClick:function(){O(!0)}},u.default.createElement(s.default,{style:{transform:"rotate(180deg)",fontSize:"20"}})),u.default.createElement(b.Dialog,{open:I,onClose:q,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},u.default.createElement(b.DialogTitle,{id:"alert-dialog-title"},r.translate("csv.dialog.importTo"),' "',_,'"'),u.default.createElement(b.DialogContent,null,u.default.createElement("div",{id:"alert-dialog-description",style:{fontFamily:"sans-serif"}},u.default.createElement("p",{style:{margin:"0px"}},r.translate("csv.dialog.dataFileReq")),u.default.createElement("ol",null,u.default.createElement("li",null,r.translate("csv.dialog.extension")),u.default.createElement("li",null,r.translate("csv.dialog.idColumnCreate")),u.default.createElement("li",null,r.translate("csv.dialog.idColumnUpdate"))),u.default.createElement(b.Button,{variant:"contained",component:"label"},u.default.createElement("span",null,r.translate("csv.dialog.chooseFile")),u.default.createElement(s.default,{style:{transform:"rotate(180deg)",fontSize:"20"}}),u.default.createElement("input",{type:"file",style:{display:"none"},onChange:function(e){return a(void 0,void 0,void 0,(function(){var t,r,n;return o(this,(function(a){switch(a.label){case 0:t=e.target.files&&e.target.files[0],S(t.name),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,f.processCsvFile(t,i)];case 2:return r=a.sent(),y&&console.log({values:r}),M(r),T(null),[3,4];case 3:return n=a.sent(),console.error(n),M(null),T(n.toString()),[3,4];case 4:return[2]}}))}))},accept:".csv,.tsv,.txt"})),!!B&&u.default.createElement("p",{style:{marginBottom:"0px"}},r.translate("csv.dialog.processed"),": ",u.default.createElement("strong",null,B)),!!F&&u.default.createElement("p",{style:{margin:"0px"}},r.translate("csv.dialog.rowCount"),": ",u.default.createElement("strong",null,F.length)),!!R&&u.default.createElement("p",{style:{margin:"0px",color:"red"}},R))),u.default.createElement(b.DialogActions,null,u.default.createElement(b.Button,{onClick:q},u.default.createElement("span",null,r.translate("csv.dialog.cancel"))),u.default.createElement(b.Button,{disabled:!F||x,onClick:function(){return a(void 0,void 0,void 0,(function(){return o(this,(function(e){k(!0);try{if(F.some((function(e){return e.id})))throw new Error(r.translate("csv.error.hasId"));g&&M(g("create",F)),Promise.all(F.map((function(e){return L.create(l,{data:e})}))).then((function(){z()}))}catch(t){z(t)}return[2]}))}))},color:"secondary",variant:"contained"},x&&u.default.createElement(b.CircularProgress,{size:18,thickness:2}),u.default.createElement("span",null,r.translate("csv.dialog.importNew"))),u.default.createElement(b.Button,{disabled:!F||x,onClick:function(){return a(void 0,void 0,void 0,(function(){return o(this,(function(e){k(!0);try{if(F.some((function(e){return!e.id})))throw new Error(r.translate("csv.error.noId"));g&&M(g("overwrite",F)),Promise.all(F.map((function(e){return L.update(l,{id:e.id,data:e})}))).then((function(){z()}))}catch(t){z(t)}return[2]}))}))},color:"primary",variant:"contained"},x&&u.default.createElement(b.CircularProgress,{size:18,thickness:2}),u.default.createElement("span",null,r.translate("csv.dialog.importOverride"))))))}},956:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function l(e){try{u(n.next(e))}catch(t){o(t)}}function i(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(i){o=[6,i],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(957),u=l(r(958)),c=l(r(980));function s(e,t){return void 0===t&&(t={}),a(this,void 0,void 0,(function(){var r;return o(this,(function(a){return r={},!!t&&"object"===typeof t&&(r=t),[2,new Promise((function(t,a){return i.parse(e,n(n({delimiter:",",skipEmptyLines:!0},r),{complete:function(e){return t(e.data)},error:function(e){return a(e)}}))}))]}))}))}function d(e){var t=e[0];return e.slice(1).map((function(e){var r={};return t.forEach((function(t,n){r=function(e,t,r){var n=u.default(t.split("."));return c.default(n,(function(){return r}),e||{})}(r,t,e[n])})),r}))}t.processCsvFile=function(e,t){return void 0===t&&(t={}),a(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return e?[4,s(e,t)]:[2];case 1:return[2,d(r.sent())]}}))}))},t.getCsvData=s,t.processCsvData=d},982:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(983));t.en=a.default;var o=n(r(984));t.es=o.default},983:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={csv:{main:{import:"Import"},error:{noId:"Overwrite requires field 'id'",hasId:"Create should not include field 'id'",importing:"Error importing",emptyResource:"The 'resource' property was empty, did you pass in the {...props} to the ImportButton?"},alert:{imported:"Imported"},dialog:{importTo:"Import to",dataFileReq:"Data file requirements",extension:"Must be a '.csv' or '.tsv' file",idColumnCreate:"Must not contain an 'id' column for new",idColumnUpdate:"Must contain an 'id' column for overwrite",chooseFile:"Choose File",processed:"Processed",rowCount:"Row Count",cancel:"Cancel",importNew:"Import as New",importOverride:"Import as Overwrite "}}}},984:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={csv:{main:{import:"Importar"},error:{noId:"Sobrescribir requiere el campo 'id'",hasId:"Crear no debe incluir el campo 'id'",importing:"Error al importar",emptyResource:"La propiedad 'resource' esta vacia. \xbfFue pasada {...props} al componente `ImportButton`?"},alert:{imported:"Importado "},dialog:{importTo:"Importar para",dataFileReq:"Requisitos del archivo",extension:"Debe ser un archivo '.csv' o '.tsv'",idColumCreate:"No debe contener una columna 'id' para nuevo",idColumnUpdate:"Debe contener una columna 'id' para sobrescribir",chooseFile:"Elija Archivo",processed:"Procesado",rowCount:"Cuenta de filas",cancel:"Cancelar",importNew:"Importar nuevo",importOverride:"Importar y sobrescribir "}}}},985:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(18),l=r.n(o),i=r(592),u=r(573),c=r(655),s=r(88),d=r(207),f=r(203),p=r(94),m=r(495),v=r(492),h=r(491),b=r(159),y=r(357),g=r(306),E=r(355),w=r(93),_=r(158),C=r(606),I=r(490),O=function(e){var t=e.className,r=e.basePath;return n.createElement(s.a,{className:t},n.createElement(I.a,{basePath:r}),n.createElement(C.ImportButton,Object.assign({},e,{logging:"true"})))},P=function(e){return n.createElement(d.b,Object.assign({},e,{actions:n.createElement(O,null)}),n.createElement(f.a,null,n.createElement(p.a,{source:"id"}),n.createElement(p.a,{source:"title"}),n.createElement(m.a,{label:""}),n.createElement(v.a,{label:""}),n.createElement(h.a,{label:"",redirect:!1})))},x=function(e){return n.createElement(b.b,e,n.createElement(y.a,null,n.createElement(p.a,{source:"id"}),n.createElement(p.a,{source:"title"})))},k=function(e){return n.createElement(g.b,e,n.createElement(E.a,null,n.createElement(w.a,{source:"id"}),n.createElement(w.a,{source:"title"})))},j=function(e){return n.createElement(_.b,e,n.createElement(E.a,null,n.createElement(w.a,{disabled:!0,source:"id"}),n.createElement(w.a,{source:"title"})))},B=Object(c.a)({posts:[{id:0,title:"Hello, world!"},{id:1,title:"FooBar"},{id:2,title:"Another"},{id:3,title:"Thing"}]}),S=function(){return a.a.createElement(i.a,{dataProvider:B},a.a.createElement(u.a,{name:"posts",list:P,show:x,edit:j,create:k}))};l.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[677,1,2]]]);
//# sourceMappingURL=main.0ad13322.chunk.js.map