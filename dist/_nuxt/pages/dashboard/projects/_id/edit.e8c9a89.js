(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{195:function(t,e,r){var content=r(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("c058c2a4",content,!0,{sourceMap:!1})},196:function(t,e,r){"use strict";r.r(e);var o=r(13),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"bg-purple-progress py-20 text-white text-lg"},[r("div",{staticClass:"container mx-auto"},[r("div",{staticClass:"sm:flex mb-4"},[r("div",{staticClass:"sm:w-1/2 sm:mt-0 mt-8 h-auto"},[r("img",{staticClass:"mb-3",attrs:{src:"/logo-footer.svg",alt:""}}),t._v(" "),r("p",{staticClass:"font-light"},[t._v("\n          Membantu Dan Menjalankan "),r("br"),t._v("Program - Program terbaik anak bangsa\n        ")])]),t._v(" "),r("div",{staticClass:"sm:w-1/1 h-auto"},[r("div",{staticClass:"mb-8 font-bold"},[t._v("Explore")]),t._v(" "),r("ul",{staticClass:"font-light"},[r("li",{staticClass:"mb-3"},[r("a",{attrs:{href:"#projects"}},[t._v("Project")])]),t._v(" "),r("li",{staticClass:"mb-3"},[r("a",{attrs:{href:"#features"}},[t._v("Features")])]),t._v(" "),r("li",{staticClass:"mb-3"},[r("a",{attrs:{href:"https://www.startupranking.com/top/indonesia"}},[t._v("Top Startups Indonesia")])])])]),t._v(" "),r("div",{staticClass:"sm:w-1/5 h-auto"},[r("div",{staticClass:"mb-8 font-bold"},[t._v("Investor")]),t._v(" "),r("ul",{staticClass:"font-light"},[r("li",{staticClass:"mb-3"},[r("a",{attrs:{href:"/login"}},[t._v("Login")])]),t._v(" "),r("li",{staticClass:"mb-3"},[r("a",{attrs:{href:"/register"}},[t._v("Register")])]),t._v(" "),r("li",{staticClass:"mb-3"},[t._v("How-to Tutorials")])])]),t._v(" "),r("div",{staticClass:"sm:w-1/4 h-auto"},[r("div",{staticClass:"mb-8 font-bold"},[t._v("Office")]),t._v(" "),r("ul",{staticClass:"font-light"},[r("li",{staticClass:"mb-3"},[t._v("+62812 9293 1896")]),t._v(" "),r("li",{staticClass:"mb-3"},[t._v("\n            SCBD, Treasury Tower, 10th Floor, Unit A District 8, Jl. Jenderal Sudirman, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190\n          ")]),t._v(" "),r("li",{staticClass:"mb-3"},[t._v("No.12 (Backer)")]),t._v(" "),r("li",{staticClass:"mb-3"},[t._v("support@backer.id")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(196).default})},197:function(t,e,r){"use strict";var o=r(195);r.n(o).a},198:function(t,e,r){(e=r(40)(!1)).push([t.i,".dropdown:hover .dropdown-menu[data-v-185b2924]{display:block}",""]),t.exports=e},199:function(t,e,r){"use strict";r.r(e);r(25);var o=r(2),n={methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}}},l=(r(197),r(13)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"flex items-center"},[t._m(0),t._v(" "),r("ul",{staticClass:"flex items-center"},[r("li",[r("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"/"}},[t._v("\n        Home\n      ")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),this.$store.state.auth.loggedIn?r("div",{staticClass:"flex ml-auto"},[r("div",{staticClass:"dropdown inline-block relative z-10"},[r("button",{staticClass:"bg-white text-gray-700 font-semibold py-4 px-6 rounded inline-flex items-center"},[t.$store.state.auth.user.image_url?r("img",{staticClass:"h-8 rounded-full mr-2",attrs:{src:t.$axios.defaults.baseURL+"/"+t.$store.state.auth.user.image_url,alt:""}}):t._e(),t._v(" "),r("span",{staticClass:"mr-1"},[t._v("\n          "+t._s(this.$store.state.auth.user.name)+"\n        ")]),t._v(" "),r("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[r("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),t._v(" "),r("ul",{staticClass:"dropdown-menu absolute hidden text-gray-700 pt-1 shadow w-full -mt-2"},[r("li",{},[r("nuxt-link",{staticClass:"bg-white hover:bg-gray-100 hover:text-orange-500 py-2 px-4 block whitespace-no-wrap",attrs:{to:"/dashboard"}},[t._v("My Dashboard")])],1),t._v(" "),r("li",{},[r("nuxt-link",{staticClass:"bg-white hover:bg-gray-100 border-t hover:text-orange-500 py-2 px-4 block whitespace-no-wrap",attrs:{to:"/dashboard"}},[t._v("Account Settings")])],1),t._v(" "),r("li",{},[r("a",{staticClass:"cursor-pointer rounded-b bg-white hover:bg-gray-100 border-t hover:text-orange-500 py-2 px-4 block whitespace-no-wrap",on:{click:function(e){return t.logout()}}},[t._v("Logout")])])])])]):r("ul",{staticClass:"flex ml-auto items-center mt-2"},[r("li",[r("nuxt-link",{staticClass:"inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4",attrs:{to:"/register"}},[t._v("\n        Sign Up\n      ")])],1),t._v(" "),r("li",[r("nuxt-link",{staticClass:"inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full",attrs:{to:"/login"}},[t._v("\n        Login\n      ")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pr-5",staticStyle:{height:"54px"}},[e("img",{staticClass:"h-full",attrs:{src:"/logo.svg",alt:"logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{href:"#projects"}},[this._v("Project")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{href:"#features"}},[this._v("Features")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{href:"#testimonials"}},[this._v("Testimonials")])])}],!1,null,"185b2924",null);e.default=component.exports},211:function(t,e,r){var content=r(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("ca3963f4",content,!0,{sourceMap:!1})},237:function(t,e,r){"use strict";var o=r(211);r.n(o).a},238:function(t,e,r){(e=r(40)(!1)).push([t.i,".dashboard-header{background-image:url(/auth-background.svg);background-color:#3b41e3;background-size:250px;height:100px}.cta-clip,.dashboard-header{background-position:100% 0;background-repeat:no-repeat}.cta-clip{position:relative;top:200px;bottom:0;right:0;left:0;width:100%;height:300px;background-size:300px;background-color:#fff;transform:skewY(4deg);transform-origin:bottom right}.call-to-action{background-image:url(/auth-background.svg);background-position:100% 0;background-repeat:no-repeat;background-size:450px}.card-project{transition:all .3s ease 0s,opacity .5s cubic-bezier(.5,0,0,1) 1ms;max-height:485px;overflow:hidden}.card-project .button-cta{opacity:0;transition:all .3s ease}.card-project:hover{box-shadow:0 4px 25px 0 rgba(0,0,0,.15)}.card-project:hover .button-cta{opacity:1;transition:all .3s ease}.card-project:hover .progress-bar,.card-project:hover .progress-info{opacity:0;height:0;margin:0;padding:0;transition:all .3s ease}footer{z-index:inherit}.hero-underline{-webkit-text-decoration-color:#1abc9c;text-decoration-color:#1abc9c}.testimonial-user{opacity:.4}.testimonial-user.active{opacity:1;border:5px solid #fff;box-shadow:0 0 0 1px #3b41e3}.list-check li{background:url(/icon-checklist.svg) no-repeat left 8px;padding:6px 0 3px 28px}.item-thumbnail:hover{background-color:#ff872e;border-radius:20px}.item-thumbnail:hover:after{position:absolute;top:38%;left:41%;content:url(/icon-thumbnail-hover.svg)}.item-thumbnail:hover img{opacity:.3}",""]),t.exports=e},254:function(t,e,r){"use strict";r.r(e);r(16),r(25);var o=r(2),n={middleware:"auth",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.params,e.next=3,r.$get("/api/v1/campaigns/"+o.id);case 3:return n=e.sent,e.abrupt("return",{campaign:n});case 5:case"end":return e.stop()}}),e)})))()},methods:{save:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$put("/api/v1/campaigns/"+t.$route.params.id,{name:t.campaign.data.name,short_description:t.campaign.data.short_description,description:t.campaign.data.description,goal_amount:t.campaign.data.goal_amount,perks:t.campaign.data.perks.join()});case 3:r=e.sent,console.log(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},changeImage:function(t){this.default_image=t}}},l=(r(237),r(13)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-page"},[r("section",{staticClass:"dashboard-header pt-5"},[r("div",{staticClass:"container mx-auto relative"},[r("Navbar")],1)]),t._v(" "),r("section",{staticClass:"container mx-auto pt-8"},[t._m(0),t._v(" "),r("div",{staticClass:"flex justify-between items-center"},[r("div",{staticClass:"w-3/4 mr-6"},[r("h3",{staticClass:"text-2xl text-gray-900 mb-4"},[t._v('\n          Edit Campaign "'+t._s(t.campaign.data.name)+'"\n        ')])]),t._v(" "),r("div",{staticClass:"w-1/4 text-right"},[r("button",{staticClass:"bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center",on:{click:t.save}},[t._v("\n          Save\n        ")])])]),t._v(" "),r("div",{staticClass:"block mb-2"},[r("div",{staticClass:"w-full lg:max-w-full lg:flex mb-4"},[r("div",{staticClass:"w-full border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"},[r("form",{staticClass:"w-full"},[r("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[r("div",{staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},[t._v("\n                  Campaign Name\n                ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.campaign.data.name,expression:"campaign.data.name"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{type:"text",placeholder:"Contoh: Demi Gunpla Demi Istri"},domProps:{value:t.campaign.data.name},on:{input:function(e){e.target.composing||t.$set(t.campaign.data,"name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"w-full md:w-1/2 px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},[t._v("\n                  Price\n                ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.campaign.data.goal_amount,expression:"campaign.data.goal_amount",modifiers:{number:!0}}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{type:"number",placeholder:"Contoh: 200000"},domProps:{value:t.campaign.data.goal_amount},on:{input:function(e){e.target.composing||t.$set(t.campaign.data,"goal_amount",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),r("div",{staticClass:"w-full px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"},[t._v("\n                  Short Description\n                ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.campaign.data.short_description,expression:"campaign.data.short_description"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{type:"text",placeholder:"Deskripsi singkat mengenai projectmu"},domProps:{value:t.campaign.data.short_description},on:{input:function(e){e.target.composing||t.$set(t.campaign.data,"short_description",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"w-full px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},[t._v("\n                  What will backers get\n                ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.campaign.data.perks,expression:"campaign.data.perks"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{type:"text",placeholder:"Contoh: Ayam, Nasi Goreng, Piring"},domProps:{value:t.campaign.data.perks},on:{input:function(e){e.target.composing||t.$set(t.campaign.data,"perks",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"w-full px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},[t._v("\n                  Description\n                ")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.campaign.data.description,expression:"campaign.data.description"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{type:"text",placeholder:"Isi deskripsi panjang untuk projectmu"},domProps:{value:t.campaign.data.description},on:{input:function(e){e.target.composing||t.$set(t.campaign.data,"description",e.target.value)}}})])])])])])])]),t._v(" "),r("div",{staticClass:"cta-clip -mt-20"}),t._v(" "),r("section",{staticClass:"call-to-action bg-purple-progress pt-64 pb-10"}),t._v(" "),r("Footer")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"w-full mr-6"},[e("h2",{staticClass:"text-4xl text-gray-900 mb-2 font-medium"},[this._v("Dashboard")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(199).default,Footer:r(196).default})}}]);