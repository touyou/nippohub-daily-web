(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{128:function(t,n,e){var content=e(132);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("6add6edb",content,!0,{sourceMap:!1})},129:function(t,n,e){"use strict";var r=e(135),l=e.n(r),c={apiKey:"AIzaSyDgw7znG2kgpYAH6UPXF1k72zjpnYV7zRg",authDomain:"nippohub-daily-prod.firebaseapp.com",databaseURL:"https://nippohub-daily-prod.firebaseio.com",projectId:"nippohub-daily-prod",storageBucket:"",messagingSenderId:"729594218139"};0===l.a.apps.length&&l.a.initializeApp(c),n.a=l.a},131:function(t,n,e){"use strict";var r=e(128);e.n(r).a},132:function(t,n,e){(t.exports=e(35)(!1)).push([t.i,".p-header{padding:6px 0;box-shadow:0 -2px 20px 3px #000}.p-header__container{display:flex;justify-content:space-between;align-items:center;width:640px;margin:0 auto}.p-page-title{margin:0;font-size:24px}.p-auth-links{list-style-type:none;padding:0;margin:0}.p-auth-links__item{display:inline-block}.p-auth-links__item:nth-of-type(n+2){margin-left:10px}",""])},133:function(t,n,e){"use strict";var r=e(129),l={props:["currentUserId"],methods:{signOut:function(){r.a.auth().signOut()}}},c=(e(131),e(15)),component=Object(c.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"p-header"},[e("div",{staticClass:"p-header__container"},[e("h1",{staticClass:"p-page-title"},[t._v("NippoHub")]),t._v(" "),e("nav",[e("ul",{staticClass:"p-auth-links"},[null!==t.currentUserId?e("li",{staticClass:"p-auth-links__item",on:{click:t.signOut}},[t._v("Sign out")]):[e("li",{staticClass:"p-auth-links__item"},[e("nuxt-link",{attrs:{to:"/sign_in"}},[t._v("Sign in")])],1),t._v(" "),e("li",{staticClass:"p-auth-links__item"},[e("nuxt-link",{attrs:{to:"/sign_up"}},[t._v("Sign up")])],1)]],2)])])])},[],!1,null,null,null);n.a=component.exports},198:function(t,n,e){"use strict";e.r(n);var r=e(129),l=e(133),c={props:["dailyReportAccessId"],data:function(){return{title:"",content:"",didFind:!1}},mounted:function(){var t=this;r.a.database().ref("/daily_reports").orderByChild("accessId").equalTo(this.dailyReportAccessId).once("value",function(n){var e=n.val();for(var r in e){var l=e[r];t.title="".concat(l.date," ").concat(l.title),t.content=l.content,t.didFind=!0;break}})}},o=e(15),d=Object(o.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.didFind?[e("article",[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("p",[t._v(t._s(t.content))])])]:e("div",[t._v("\n    日報が見つかりませんでした\n  ")])],2)},[],!1,null,null,null).exports,h={components:{MainHeader:l.a,DailyReportPublicDetail:d},data:function(){return{currentUserId:null}},mounted:function(){var t=this;r.a.auth().onAuthStateChanged(function(n){t.currentUserId=null!=n?n.uid:null})}},_=Object(o.a)(h,function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("main-header",{attrs:{currentUserId:this.currentUserId}}),this._v(" "),n("div",{staticClass:"l-container"},[n("DailyReportPublicDetail",{attrs:{"daily-report-access-id":this.$route.params.access_id}})],1)],1)},[],!1,null,null,null);n.default=_.exports}}]);