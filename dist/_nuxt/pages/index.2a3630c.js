(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{195:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("c058c2a4",content,!0,{sourceMap:!1})},196:function(t,e,n){"use strict";n.r(e);var r=n(13),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-purple-progress py-20 text-white text-lg"},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"sm:flex mb-4"},[n("div",{staticClass:"sm:w-1/2 sm:mt-0 mt-8 h-auto"},[n("img",{staticClass:"mb-3",attrs:{src:"/logo-footer.svg",alt:""}}),t._v(" "),n("p",{staticClass:"font-light"},[t._v("\n          Membantu Dan Menjalankan "),n("br"),t._v("Program - Program terbaik anak bangsa\n        ")])]),t._v(" "),n("div",{staticClass:"sm:w-1/1 h-auto"},[n("div",{staticClass:"mb-8 font-bold"},[t._v("Explore")]),t._v(" "),n("ul",{staticClass:"font-light"},[n("li",{staticClass:"mb-3"},[n("a",{attrs:{href:"#projects"}},[t._v("Project")])]),t._v(" "),n("li",{staticClass:"mb-3"},[n("a",{attrs:{href:"#features"}},[t._v("Features")])]),t._v(" "),n("li",{staticClass:"mb-3"},[n("a",{attrs:{href:"https://www.startupranking.com/top/indonesia"}},[t._v("Top Startups Indonesia")])])])]),t._v(" "),n("div",{staticClass:"sm:w-1/5 h-auto"},[n("div",{staticClass:"mb-8 font-bold"},[t._v("Investor")]),t._v(" "),n("ul",{staticClass:"font-light"},[n("li",{staticClass:"mb-3"},[n("a",{attrs:{href:"/login"}},[t._v("Login")])]),t._v(" "),n("li",{staticClass:"mb-3"},[n("a",{attrs:{href:"/register"}},[t._v("Register")])]),t._v(" "),n("li",{staticClass:"mb-3"},[t._v("How-to Tutorials")])])]),t._v(" "),n("div",{staticClass:"sm:w-1/4 h-auto"},[n("div",{staticClass:"mb-8 font-bold"},[t._v("Office")]),t._v(" "),n("ul",{staticClass:"font-light"},[n("li",{staticClass:"mb-3"},[t._v("+62812 9293 1896")]),t._v(" "),n("li",{staticClass:"mb-3"},[t._v("\n            SCBD, Treasury Tower, 10th Floor, Unit A District 8, Jl. Jenderal Sudirman, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190\n          ")]),t._v(" "),n("li",{staticClass:"mb-3"},[t._v("No.12 (Backer)")]),t._v(" "),n("li",{staticClass:"mb-3"},[t._v("support@backer.id")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(196).default})},197:function(t,e,n){"use strict";var r=n(195);n.n(r).a},198:function(t,e,n){(e=n(40)(!1)).push([t.i,".dropdown:hover .dropdown-menu[data-v-185b2924]{display:block}",""]),t.exports=e},199:function(t,e,n){"use strict";n.r(e);n(25);var r=n(2),l={methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}}},o=(n(197),n(13)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex items-center"},[t._m(0),t._v(" "),n("ul",{staticClass:"flex items-center"},[n("li",[n("nuxt-link",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{to:"/"}},[t._v("\n        Home\n      ")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),this.$store.state.auth.loggedIn?n("div",{staticClass:"flex ml-auto"},[n("div",{staticClass:"dropdown inline-block relative z-10"},[n("button",{staticClass:"bg-white text-gray-700 font-semibold py-4 px-6 rounded inline-flex items-center"},[t.$store.state.auth.user.image_url?n("img",{staticClass:"h-8 rounded-full mr-2",attrs:{src:t.$axios.defaults.baseURL+"/"+t.$store.state.auth.user.image_url,alt:""}}):t._e(),t._v(" "),n("span",{staticClass:"mr-1"},[t._v("\n          "+t._s(this.$store.state.auth.user.name)+"\n        ")]),t._v(" "),n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),t._v(" "),n("ul",{staticClass:"dropdown-menu absolute hidden text-gray-700 pt-1 shadow w-full -mt-2"},[n("li",{},[n("nuxt-link",{staticClass:"bg-white hover:bg-gray-100 hover:text-orange-500 py-2 px-4 block whitespace-no-wrap",attrs:{to:"/dashboard"}},[t._v("My Dashboard")])],1),t._v(" "),n("li",{},[n("nuxt-link",{staticClass:"bg-white hover:bg-gray-100 border-t hover:text-orange-500 py-2 px-4 block whitespace-no-wrap",attrs:{to:"/dashboard"}},[t._v("Account Settings")])],1),t._v(" "),n("li",{},[n("a",{staticClass:"cursor-pointer rounded-b bg-white hover:bg-gray-100 border-t hover:text-orange-500 py-2 px-4 block whitespace-no-wrap",on:{click:function(e){return t.logout()}}},[t._v("Logout")])])])])]):n("ul",{staticClass:"flex ml-auto items-center mt-2"},[n("li",[n("nuxt-link",{staticClass:"inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4",attrs:{to:"/register"}},[t._v("\n        Sign Up\n      ")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full",attrs:{to:"/login"}},[t._v("\n        Login\n      ")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pr-5",staticStyle:{height:"54px"}},[e("img",{staticClass:"h-full",attrs:{src:"/logo.svg",alt:"logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{href:"#projects"}},[this._v("Project")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{href:"#features"}},[this._v("Features")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"text-white hover:text-teal-500 text-lg px-4 py-3",attrs:{href:"#testimonials"}},[this._v("Testimonials")])])}],!1,null,"185b2924",null);e.default=component.exports},213:function(t,e,n){var content=n(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("28f1127f",content,!0,{sourceMap:!1})},214:function(t,e,n){"use strict";n.r(e);var r=n(13),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"call-to-action bg-purple-progress pt-64 pb-10"},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"w-full text-center"},[t._m(0),t._v(" "),n("button",{staticClass:"inline-block bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 mt-8 text-lg rounded-full",on:{click:function(e){return t.$router.push({path:"/register"})}}},[t._v("\n        Getting Started\n      ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"text-5xl text-white font-semibold"},[this._v("\n        Cara mudah untuk pendanaan\n        "),e("br"),this._v("\n        dengan ide dan inovasi terbaik\n      ")])}],!1,null,null,null);e.default=component.exports},241:function(t,e,n){"use strict";var r=n(213);n.n(r).a},242:function(t,e,n){(e=n(40)(!1)).push([t.i,".header__bg{position:absolute;top:100;height:660px;background-image:url(/auth-background.svg);background-color:#3b41e3;transform:skewY(-6deg);transform-origin:top left}.cta-clip,.header__bg{bottom:0;right:0;left:0;width:100%;background-position:100% 0;background-repeat:no-repeat}.cta-clip{position:relative;top:200px;height:300px;background-size:300px;background-color:#fff;transform:skewY(4deg);transform-origin:bottom right}.call-to-action{background-image:url(/auth-background.svg);background-position:100% 0;background-repeat:no-repeat;background-size:500px}.card-project{transition:all .3s ease 0s,opacity .5s cubic-bezier(.5,0,0,1) 1ms;max-height:485px;overflow:hidden}.card-project .button-cta{opacity:0;transition:all .3s ease}.card-project:hover{box-shadow:0 4px 25px 0 rgba(0,0,0,.15)}.card-project:hover .button-cta{opacity:1;transition:all .3s ease}.card-project:hover .progress-bar,.card-project:hover .progress-info{opacity:0;height:0;margin:0;padding:0;transition:all .3s ease}footer{z-index:inherit}.hero-underline{-webkit-text-decoration-color:#1abc9c;text-decoration-color:#1abc9c}.testimonial-user{opacity:.4}.testimonial-user.active{opacity:1;border:5px solid #fff;box-shadow:0 0 0 1px #3b41e3}",""]),t.exports=e},256:function(t,e,n){"use strict";n.r(e);n(25);var r=n(2),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("/api/v1/campaigns");case 3:return r=e.sent,e.abrupt("return",{campaigns:r});case 5:case"end":return e.stop()}}),e)})))()}},o=(n(241),n(13)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"landing-page"},[n("section",{staticClass:"landing-hero pt-5"},[n("div",{staticClass:"header__bg"}),t._v(" "),n("div",{staticClass:"container mx-auto relative"},[n("Navbar"),t._v(" "),t._m(0)],1)]),t._v(" "),t._m(1),t._v(" "),n("section",{staticClass:"container mx-auto pt-24",attrs:{id:"projects"}},[t._m(2),t._v(" "),n("div",{staticClass:"grid grid-cols-3 gap-4 mt-3"},t._l(t.campaigns.data,(function(e){return n("div",{key:e.id,staticClass:"card-project w-full p-5 border border-gray-500 rounded-20"},[n("div",{staticClass:"item"},[n("figure",{staticClass:"item-image"},[n("img",{staticClass:"rounded-20 w-full",attrs:{src:t.$axios.defaults.baseURL+"/"+e.image_url,alt:""}})]),t._v(" "),n("div",{staticClass:"item-meta"},[n("h4",{staticClass:"text-3xl font-medium text-gray-900 mt-5"},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),n("p",{staticClass:"text-md font-light text-gray-900 h-12"},[t._v("\n              "+t._s(e.short_description)+"\n            ")]),t._v(" "),n("div",{staticClass:"relative pt-4 progress-bar"},[n("div",{staticClass:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"},[n("div",{staticClass:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped",style:"width: "+e.current_amount/e.goal_amount*100+"%"})])]),t._v(" "),n("div",{staticClass:"flex progress-info"},[n("div",[t._v("\n                "+t._s(e.current_amount/e.goal_amount*100)+"%\n              ")]),t._v(" "),n("div",{staticClass:"ml-auto font-semibold"},[t._v("\n                Rp "+t._s((new Intl.NumberFormat).format(e.goal_amount))+"\n              ")])])]),t._v(" "),n("button",{staticClass:"mt-100 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-1 text-lg rounded-full",on:{click:function(n){return t.$router.push({name:"projects-id",params:{id:e.id}})}}},[t._v("\n            Fund Now\n          ")])])])})),0)]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"cta-clip -mt-20"}),t._v(" "),n("CallToAction"),t._v(" "),n("Footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center pt-10 px-5 md:px-0"},[n("div",{staticClass:"w-1/2"},[n("h1",{staticClass:"text-4xl text-white mb-5"},[t._v("\n            Kami membantu "),n("u",{staticClass:"hero-underline"},[t._v("startup")]),t._v(" ke "),n("br"),t._v("\n            mulai & "),n("u",{staticClass:"hero-underline"},[t._v("pendanaan")]),t._v(" "),n("br"),t._v("\n            kebutuhan mereka yang sebenarnya\n          ")]),t._v(" "),n("p",{staticClass:"text-white text-xl font-light mb-8"},[t._v("\n            Mendanai ide terbaik untuk menjadi "),n("br"),t._v("\n            produk nyata dan jadilah kontributor\n          ")]),t._v(" "),n("a",{staticClass:"bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 text-xl rounded-full",attrs:{href:"#projects"}},[t._v("\n            Temukan Proyek\n          ")])]),t._v(" "),n("div",{staticClass:"w-1/2 flex justify-center"},[n("img",{attrs:{src:"/hero-image@2x.png",alt:"crowdfunding project"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto pt-24",attrs:{id:"features"}},[n("div",{staticClass:"flex justify-between items-center mb-10"},[n("div",{staticClass:"w-auto"},[n("h2",{staticClass:"text-3xl text-gray-900 mb-8"},[t._v("\n          Hanya 3 langkah untuk dieksekusi "),n("br"),t._v("\n          ide-ide cemerlang Anda\n        ")])])]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"w-full px-56 mb-5"},[n("img",{staticClass:"w-full",attrs:{src:"/line-step.svg",alt:""}})])]),t._v(" "),n("div",{staticClass:"flex justify-between items-center text-center"},[n("div",{staticClass:"w-1/3"},[n("figure",{staticClass:"flex justify-center items-center"},[n("img",{staticClass:"h-30 mb-8",attrs:{src:"/step-1-illustration.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"step-content"},[n("h3",{staticClass:"font-medium"},[t._v("Sign Up")]),t._v(" "),n("p",{staticClass:"font-light"},[t._v("\n            Sign Up akun dan mulai "),n("br"),t._v("proyek pendanaan\n          ")])])]),t._v(" "),n("div",{staticClass:"w-1/3"},[n("figure",{staticClass:"flex justify-center items-center -mt-24"},[n("img",{staticClass:"h-30 mb-8",attrs:{src:"/step-2-illustration.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"step-content"},[n("h3",{staticClass:"font-medium"},[t._v("Open Project")]),t._v(" "),n("p",{staticClass:"font-light"},[t._v("\n            Pilih beberapa ide proyek, "),n("br"),t._v("\n            dan mulai pendanaan\n          ")])])]),t._v(" "),n("div",{staticClass:"w-1/3"},[n("figure",{staticClass:"flex justify-center items-center -mt-48"},[n("img",{staticClass:"h-30 mb-8",attrs:{src:"/step-3-illustration.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"step-content"},[n("h3",{staticClass:"font-medium"},[t._v("Execute")]),t._v(" "),n("p",{staticClass:"font-light"},[t._v("\n            Saatnya wujudkan mimpi "),n("br"),t._v("\n            menjadi kenyataan\n          ")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"w-auto"},[e("h2",{staticClass:"text-3xl text-gray-900 mb-8"},[this._v("\n          Proyek baru Anda bisa diurus "),e("br")])]),this._v(" "),e("div",{staticClass:"w-auto mt-5"},[e("a",{staticClass:"text-gray-900 hover:underline text-md font-medium",attrs:{href:""}},[this._v("Lihat semua")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container mx-auto pt-24",attrs:{id:"testimonials"}},[n("div",{staticClass:"flex justify-between items-center"},[n("div",{staticClass:"w-auto"},[n("h2",{staticClass:"text-3xl text-gray-900 mb-8"},[t._v("\n          See What Our "),n("br"),t._v("\n          Happy Clients Say\n        ")])])]),t._v(" "),n("div",{staticClass:"flex mb-10"},[n("div",{staticClass:"w-2/12 flex justify-center items-start"},[n("img",{attrs:{src:"/testimonial-line.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"w-8/12 mt-16"},[n("h2",{staticClass:"text-3xl text-gray-900 font-light"},[t._v("\n          “Pendanaan di Bucker sangat mudah dan nyaman. "),n("br"),t._v("\n          Hanya perlu mencari ide, klik dan sudah mendanai.”\n        ")]),t._v(" "),n("div",{staticClass:"testimonial-info mt-8"},[n("div",{staticClass:"name text-xl font-semibold"},[t._v("Shopie Nicole")]),t._v(" "),n("div",{staticClass:"title text-xl font-light text-gray-400"},[t._v("\n            Project Manager\n          ")])]),t._v(" "),n("div",{staticClass:"testimonial-icon mt-10"},[n("img",{staticClass:"w-20 mr-5 inline-block testimonial-user rounded-full",attrs:{src:"/testimonial-1-icon.png",alt:""}}),t._v(" "),n("img",{staticClass:"w-20 mr-5 inline-block testimonial-user rounded-full",attrs:{src:"/testimonial-2-icon.png",alt:""}}),t._v(" "),n("img",{staticClass:"w-20 mr-5 inline-block testimonial-user active rounded-full",attrs:{src:"/testimonial-3-icon.png",alt:""}})])]),t._v(" "),n("div",{staticClass:"w-2/12"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(199).default,CallToAction:n(214).default,Footer:n(196).default})}}]);