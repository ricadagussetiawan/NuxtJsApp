(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{202:function(e,t,r){var content=r(220);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("73c2e982",content,!0,{sourceMap:!1})},219:function(e,t,r){"use strict";var o=r(202);r.n(o).a},220:function(e,t,r){(t=r(40)(!1)).push([e.i,".auth-background[data-v-a3787e7a]{background-image:url(/sign-up-background.jpg);background-position:50%;background-size:cover}",""]),e.exports=t},245:function(e,t,r){"use strict";r.r(t);r(25);var o=r(2),n={layout:"auth",data:function(){return{register:{name:"",email:"",occupation:"",password:""}}},methods:{userRegister:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post("/api/v1/users",e.register);case 3:r=t.sent,console.log(r.data.data.token),e.$auth.setUserToken(r.data.data.token).then((function(){return e.$router.push({path:"/upload"})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},l=(r(219),r(13)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-screen flex justify-center items-center"},[r("div",{staticClass:"hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg"}),e._v(" "),r("div",{staticClass:"w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center"},[r("div",{staticClass:"w-full lg:w-1/2 px-10 lg:px-0"},[r("h2",{staticClass:"font-normal mb-6 text-3xl text-white"},[e._v("Sign Up Account")]),e._v(" "),r("div",{staticClass:"mb-6"},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"font-normal text-lg text-white block mb-3"},[e._v("Full Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.name,expression:"register.name"}],staticClass:"auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",attrs:{type:"text",placeholder:"Write Your Name Here"},domProps:{value:e.register.name},on:{input:function(t){t.target.composing||e.$set(e.register,"name",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"mb-6"},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"font-normal text-lg text-white block mb-3"},[e._v("Occupation")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.occupation,expression:"register.occupation"}],staticClass:"auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",attrs:{type:"text",placeholder:"Write your occupation here"},domProps:{value:e.register.occupation},on:{input:function(t){t.target.composing||e.$set(e.register,"occupation",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"mb-6"},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"font-normal text-lg text-white block mb-3"},[e._v("Email Address")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],staticClass:"auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",attrs:{type:"email",placeholder:"Write your email address here"},domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"mb-6"},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"font-normal text-lg text-white block mb-3"},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],staticClass:"auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",attrs:{type:"password",placeholder:"Type your password here"},domProps:{value:e.register.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.userRegister(t)},input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"mb-6"},[r("div",{staticClass:"mb-4"},[r("button",{staticClass:"block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full",on:{click:e.userRegister}},[e._v("\n            Continue Sign Up\n          ")])])]),e._v(" "),r("div",{staticClass:"text-center"},[r("p",{staticClass:"text-white text-md"},[e._v("\n          Already have account?\n          "),r("nuxt-link",{staticClass:"no-underline text-orange-button",attrs:{to:"/login"}},[e._v("Sign In")]),e._v(".\n        ")],1)])])])])}),[],!1,null,"a3787e7a",null);t.default=component.exports}}]);