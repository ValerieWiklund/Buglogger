(function(e){function t(t){for(var a,o,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var u=r[o];0!==s[u]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},s={app:0},n=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7ef17c27"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=s[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=a);var n,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var c=new Error;n=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=s[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,r[1](c)}s[e]=void 0}};var l=setTimeout((function(){n({type:"timeout",target:u})}),12e4);u.onerror=u.onload=n,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),s=r.n(a);s.a},"272f":function(e,t,r){"use strict";var a=r("f907"),s=r.n(a);s.a},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},n=[],o=(r("034f"),r("2877")),i={},u=Object(o["a"])(i,s,n,!1,null,null,null),c=u.exports,l=r("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:String}},f=b,v=(r("272f"),Object(o["a"])(f,p,g,!1,null,"df2aa6b2",null)),y=v.exports,w={name:"home",components:{HelloWorld:y}},_=w,m=Object(o["a"])(_,h,d,!1,null,null,null),j=m.exports;a["a"].use(l["a"]);const E=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],T=new l["a"]({routes:E});var x=T,C=r("2f62");a["a"].use(C["a"]);var k=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),B=r("ea4c");B["a"];const O="//localhost:3000/api/bugs";let I={closed:!1,_id:"5df14dd688e2c213a07e0b20",title:"Can't Eat Tacos",description:"Can't eat tacos because I don't have any.",reportedBy:"D$",createdAt:"2019-12-11T20:13:10.079Z",updatedAt:"2019-12-11T20:13:10.079Z",__v:0};class $ extends B["a"]{constructor(){super("BugsController",O),this.newBug={title:"Can't Eat Tacos",description:"Can't eat tacos because I don't have any.",reportedBy:"D$"},this.setCleanup(async()=>{await this.get("//localhost:3000/cleanup")}),this.addTests(new B["b"]({name:"Can Get all Bugs",path:O,description:"GET request. This should get a list of bug objects.",expected:"[]"},async()=>{let e;try{return e=await this.get(),this.pass("Able to get bugs",e)}catch(t){return this.handleError(t)}}),new B["b"]({name:"Can Create Bugs",path:O,description:"POST request. This should create a new bug in your database.",expected:"bug object",payload:"bug object"},async()=>{let e;try{e=await this.create(this.newBug)}catch(t){return this.handleError(t)}return this.pass("Successfully created bug",e)},async()=>{await this._cleanup()}),new B["b"]({name:"Can Get bug by bug Id",path:O+"/:id",description:"GET request. This should get one bug by its id.",expected:"bug object"},async()=>{let e,t;try{e=await this.create(this.newBug),t=await this.getById(e._id)}catch(r){return this.handleError(r)}return P(t)?this.pass("We successfully got a bug by its Id!",t):this.unexpected(I,t)},async()=>{await this._cleanup()}),new B["b"]({name:"Can Edit bug by bug Id",path:O+"/:id",description:"PUT request. This should update one bug by its Id.",expected:"bug object",payload:"bug object { title: string, description: string }"},async()=>{let e,t;try{e=await this.create(this.newBug),e.id=e._id,e.description="This one has been edited.",await this.update(e),t=await this.getById(e._id)}catch(r){return this.handleError(r)}return this.pass("Successfully edited a bug!",e)},async()=>{await this._cleanup()}),new B["b"]({name:"Cannot Edit closed bug",path:O+"/:id",description:"PUT request. This should not allow a closed bug to be updated.",expected:"bug object",payload:"bug object { title: string, description: string }"},async()=>{let e,t={};try{e=await this.create(this.newBug),await this.delete(e._id),t.id=e._id,t.description="This one has been edited.",await this.update(t),t=await this.getById(e._id)}catch(r){return this.handleError(r)}return t.description==e.description?this.unexpected(e,t):this.pass("Successfully edited a bug!",e)},async()=>{await this._cleanup()}),new B["b"]({name:"Can close bug by bug Id",path:O+"/:id",description:"DELETE request. This should close one bug by its Id.",expected:"string"},async()=>{let e,t,r;try{if(e=await this.create(this.newBug),r=await this.delete(e._id),t=await this.getById(e._id),!t.closed)return this.fail("Oops, looks like this bug is still open.");if(!P(t))return this.fail("Oops, that doesn't seem to be a bug.")}catch(a){return this.handleError(a)}return this.pass("We successfully closed a bug by its Id!",r)},async()=>{await this._cleanup()}))}handleError(e){return 404==e.response.status?this.fail(`${e.response.data} 404: ${e.response.config.method.toUpperCase()} request to ${e.response.config.url}`):this.unexpected(this.newBug,e.response.data.error.message)}}function P(e){return Object.keys(I).every(t=>e.hasOwnProperty(t))}const S="//localhost:3000/api/notes";let q={_id:"5df177587b30f817404c5094",content:"This is a note.",reportedBy:"D$",bug:"5df177547b30f817404c5093",createdAt:"2019-12-11T23:10:16.919Z",updatedAt:"2019-12-11T23:10:16.919Z",__v:0};class N extends B["a"]{constructor(){super("NotesController",S),this.newBug={title:"Can't Eat Tacos",description:"Can't eat tacos because I don't have any.",reportedBy:"D$"},this.newNote={title:"Note",content:"This is a note.",reportedBy:"D$"},this.setCleanup(async()=>{await this.get("//localhost:3000/cleanup")}),this.addTests(new B["b"]({name:"Can Get all Notes for a Bug",path:"//localhost:3000/api/bugs/:bugId/notes",description:"GET request. This should get a list of note objects belonging to a single Bug.",expected:"[]"},async()=>{let e;try{let t=await this.create(this.newBug,"//localhost:3000/api/bugs");e=await this.get(`//localhost:3000/api/bugs/${t._id}/notes`)}catch(t){return this.handleError(t)}return this.pass("Able to get notes",e)},async()=>{await this._cleanup()}),new B["b"]({name:"Can Create Notes",path:S,description:"POST request. This should create a new note in your database.",expected:"note object",payload:"note object"},async()=>{let e,t;try{e=await this.create(this.newBug,"//localhost:3000/api/bugs"),this.newNote.bug=e._id,t=await this.create(this.newNote)}catch(r){return this.handleError(r)}return A(t)?this.pass("Successfully created note ",t):this.unexpected(q,t)},async()=>{await this._cleanup()}),new B["b"]({name:"Can delete note by note Id",path:S+"/:id",description:"DELETE request. This should delete one note by its Id.",expected:"string"},async()=>{let e,t,r,a;try{e=await this.create(this.newBug,"//localhost:3000/api/bugs"),this.newNote.bug=e._id,t=await this.create(this.newNote),r=await this.delete(t._id)}catch(s){return this.handleError(s)}try{return a=await this.getById(t._id),this.fail("Oops, looks like this note still exists.")}catch(s){return this.pass("We successfully closed a bug by its Id!",r)}},async()=>{await this._cleanup()}))}handleError(e){return 404==e.response.status?this.fail(`${e.response.data} 404: ${e.response.config.method.toUpperCase()} request to ${e.response.config.url}`):this.unexpected(this.newBug,e.response.data.error.message)}}function A(e){return Object.keys(q).every(t=>e.hasOwnProperty(t))}new $,new N;B["c"].install(a["a"],{router:x}),a["a"].config.productionTip=!1,new a["a"]({router:x,store:k,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},f907:function(e,t,r){}});
//# sourceMappingURL=app.9f651216.js.map