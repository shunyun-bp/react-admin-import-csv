(this["webpackJsonptest-ra"]=this["webpackJsonptest-ra"]||[]).push([[0],{594:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImportButton=void 0;var n=r(10),a=r(676);Object.defineProperty(t,"ImportButton",{enumerable:!0,get:function(){return a.ImportButton}}),t.default=n.connect()(a.ImportButton)},667:function(e,t,r){e.exports=r(972)},676:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},i=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function l(e){try{u(n.next(e))}catch(t){o(t)}}function i(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}u((n=n.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var r,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(i){o=[6,i],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ImportButton=void 0;var s=c(r(0)),d=r(304),f=c(r(246)),p=r(304),m=r(943),v=c(r(492)),h=c(r(968)),b=l(r(969)),y=c(r(493)),g=r(46);t.ImportButton=function(e){var t={es:n(n({},h.default),b.es),en:n(n({},v.default),b.en)},r=y.default((function(e){return t[e]?t[e]:t.en}),d.resolveBrowserLocale()),a=e.resource,o=e.parseConfig,l=e.logging,c=e.preCommitCallback;if(l&&console.log({props:e}),!a)throw new Error(r.translate("csv.error.emptyResource"));var E=e.variant,w=e.label,_=e.resourceName;w||(w=r.translate("csv.main.import")),E||(E="text"),_||(_=a);var C=s.default.useState(!1),O=C[0],I=C[1],P=s.default.useState(!1),j=P[0],x=P[1],B=s.default.useState(null),k=B[0],D=B[1],F=s.default.useState(null),M=F[0],S=F[1],N=s.default.useState(null),R=N[0],T=N[1],q=d.useRefresh(),A=function(){I(!1),x(!1),D(null),S(null)},z=function(e){void 0===e&&(e=!1),A(),e||(L(r.translate("csv.alert.imported")+" "+k),q()),e&&L(r.translate("csv.error.importing")+" "+k+", "+e,"error")},L=p.useNotify(),U=p.useDataProvider();return s.default.createElement(s.default.Fragment,null,s.default.createElement(d.Button,{color:"primary",component:"span",variant:E,label:w,onClick:function(){I(!0)}},s.default.createElement(f.default,{style:{transform:"rotate(180deg)",fontSize:"20"}})),s.default.createElement(g.Dialog,{open:O,onClose:A,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},s.default.createElement(g.DialogTitle,{id:"alert-dialog-title"},r.translate("csv.dialog.importTo"),' "',_,'"'),s.default.createElement(g.DialogContent,null,s.default.createElement("div",{id:"alert-dialog-description",style:{fontFamily:"sans-serif"}},s.default.createElement("p",{style:{margin:"0px"}},r.translate("csv.dialog.dataFileReq")),s.default.createElement("ol",null,s.default.createElement("li",null,r.translate("csv.dialog.extension")),s.default.createElement("li",null,r.translate("csv.dialog.idColumnCreate")),s.default.createElement("li",null,r.translate("csv.dialog.idColumnUpdate"))),s.default.createElement(g.Button,{variant:"contained",component:"label"},s.default.createElement("span",null,r.translate("csv.dialog.chooseFile")),s.default.createElement(f.default,{style:{transform:"rotate(180deg)",fontSize:"20"}}),s.default.createElement("input",{type:"file",style:{display:"none"},onChange:function(e){return i(void 0,void 0,void 0,(function(){var t,r,n;return u(this,(function(a){switch(a.label){case 0:t=e.target.files&&e.target.files[0],D(t.name),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,m.processCsvFile(t,o)];case 2:return r=a.sent(),l&&console.log({values:r}),S(r),T(null),[3,4];case 3:return n=a.sent(),console.error(n),S(null),T(n.toString()),[3,4];case 4:return[2]}}))}))},accept:".csv,.tsv,.txt"})),!!k&&s.default.createElement("p",{style:{marginBottom:"0px"}},r.translate("csv.dialog.processed"),": ",s.default.createElement("strong",null,k)),!!M&&s.default.createElement("p",{style:{margin:"0px"}},r.translate("csv.dialog.rowCount"),": ",s.default.createElement("strong",null,M.length)),!!R&&s.default.createElement("p",{style:{margin:"0px",color:"red"}},R))),s.default.createElement(g.DialogActions,null,s.default.createElement(g.Button,{onClick:A},s.default.createElement("span",null,r.translate("csv.dialog.cancel"))),s.default.createElement(g.Button,{disabled:!M||j,onClick:function(){return i(void 0,void 0,void 0,(function(){var e;return u(this,(function(t){switch(t.label){case 0:x(!0),t.label=1;case 1:if(t.trys.push([1,3,,4]),M.some((function(e){return e.id})))throw new Error(r.translate("csv.error.hasId"));return c&&S(c("create",M)),[4,Promise.all(M.map((function(e){return U.create(a,{data:e})})))];case 2:return t.sent(),z(),[3,4];case 3:return e=t.sent(),z(e),[3,4];case 4:return[2]}}))}))},color:"secondary",variant:"contained"},j&&s.default.createElement(g.CircularProgress,{size:18,thickness:2}),s.default.createElement("span",null,r.translate("csv.dialog.importNew"))),s.default.createElement(g.Button,{disabled:!M||j,onClick:function(){return i(void 0,void 0,void 0,(function(){return u(this,(function(e){x(!0);try{if(M.some((function(e){return!e.id})))throw new Error(r.translate("csv.error.noId"));c&&S(c("overwrite",M)),Promise.all(M.map((function(e){return U.update(a,{id:e.id,data:e})}))).then((function(){z()}))}catch(t){z(t)}return[2]}))}))},color:"primary",variant:"contained"},j&&s.default.createElement(g.CircularProgress,{size:18,thickness:2}),s.default.createElement("span",null,r.translate("csv.dialog.importOverride"))))))}},943:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function l(e){try{u(n.next(e))}catch(t){o(t)}}function i(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(i){o=[6,i],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.processCsvData=t.getCsvData=t.processCsvFile=void 0;var i=r(944),u=l(r(945)),c=l(r(967)),s=function(e,t,r){var n=u.default(t.split("."));return c.default(n,(function(){return r}),e||{})};function d(e,t){return void 0===t&&(t={}),a(this,void 0,void 0,(function(){var r;return o(this,(function(a){return r={},!!t&&"object"===typeof t&&(r=t),[2,new Promise((function(t,a){return i.parse(e,n(n({delimiter:",",skipEmptyLines:!0},r),{complete:function(e){return t(e.data)},error:function(e){return a(e)}}))}))]}))}))}function f(e){if(Array.isArray(e[0])){var t=e[0];return e.slice(1).map((function(e){var r={};return t.forEach((function(t,n){r=s(r,t,e[n])})),r}))}var r=[];return e.forEach((function(e){var t={};for(var n in e)t=s(t,n,e[n]);r.push(t)})),r}t.processCsvFile=function(e,t){return void 0===t&&(t={}),a(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return e?[4,d(e,t)]:[2];case 1:return[2,f(r.sent())]}}))}))},t.getCsvData=d,t.processCsvData=f},969:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.es=t.en=void 0;var a=n(r(970));t.en=a.default;var o=n(r(971));t.es=o.default},970:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={csv:{main:{import:"Import"},error:{noId:"Overwrite requires field 'id'",hasId:"Create should not include field 'id'",importing:"Error importing",emptyResource:"The 'resource' property was empty, did you pass in the {...props} to the ImportButton?"},alert:{imported:"Imported"},dialog:{importTo:"Import to",dataFileReq:"Data file requirements",extension:"Must be a '.csv' or '.tsv' file",idColumnCreate:"Must not contain an 'id' column for new",idColumnUpdate:"Must contain an 'id' column for overwrite",chooseFile:"Choose File",processed:"Processed",rowCount:"Row Count",cancel:"Cancel",importNew:"Import as New",importOverride:"Import as Overwrite "}}}},971:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={csv:{main:{import:"Importar"},error:{noId:"Sobrescribir requiere el campo 'id'",hasId:"Crear no debe incluir el campo 'id'",importing:"Error al importar",emptyResource:"La propiedad 'resource' esta vacia. \xbfFue pasada {...props} al componente `ImportButton`?"},alert:{imported:"Importado "},dialog:{importTo:"Importar para",dataFileReq:"Requisitos del archivo",extension:"Debe ser un archivo '.csv' o '.tsv'",idColumnCreate:"No debe contener una columna 'id' para nuevo",idColumnUpdate:"Debe contener una columna 'id' para sobrescribir",chooseFile:"Elija Archivo",processed:"Procesado",rowCount:"Cuenta de filas",cancel:"Cancelar",importNew:"Importar nuevo",importOverride:"Importar y sobrescribir "}}}},972:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(19),l=r.n(o),i=r(585),u=r(567),c=r(643),s=r(89),d=r(198),f=r(194),p=r(95),m=r(488),v=r(485),h=r(484),b=r(157),y=r(350),g=r(299),E=r(348),w=r(94),_=r(156),C=r(594),O=r(483),I=function(e){var t=e.className,r=e.basePath;return n.createElement(s.a,{className:t},n.createElement(O.a,{basePath:r}),n.createElement(C.ImportButton,Object.assign({},e,{logging:"true"})))},P=function(e){return n.createElement(d.b,Object.assign({},e,{actions:n.createElement(I,null)}),n.createElement(f.a,null,n.createElement(p.a,{source:"id"}),n.createElement(p.a,{source:"title"}),n.createElement(m.a,{label:""}),n.createElement(v.a,{label:""}),n.createElement(h.a,{label:"",redirect:!1})))},j=function(e){return n.createElement(b.b,e,n.createElement(y.a,null,n.createElement(p.a,{source:"id"}),n.createElement(p.a,{source:"title"})))},x=function(e){return n.createElement(g.b,e,n.createElement(E.a,null,n.createElement(w.a,{source:"id"}),n.createElement(w.a,{source:"title"})))},B=function(e){return n.createElement(_.b,e,n.createElement(E.a,null,n.createElement(w.a,{disabled:!0,source:"id"}),n.createElement(w.a,{source:"title"})))},k=Object(c.a)({posts:[{id:0,title:"Hello, world!"},{id:1,title:"FooBar"},{id:2,title:"Another"},{id:3,title:"Thing"}]}),D=function(){return a.a.createElement(i.a,{dataProvider:k},a.a.createElement(u.a,{name:"posts",list:P,show:j,edit:B,create:x}))};l.a.render(a.a.createElement(D,null),document.getElementById("root"))}},[[667,1,2]]]);
//# sourceMappingURL=main.c1412feb.chunk.js.map