var d=Object.defineProperty;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var o=(s,t,e)=>t in s?d(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,i=(s,t)=>{for(var e in t||(t={}))m.call(t,e)&&o(s,e,t[e]);if(r)for(var e of r(t))p.call(t,e)&&o(s,e,t[e]);return s};import{n as l,V as f,T as g,e as n,b as c}from"./app.js";import{g as h}from"./vform.es.js";const v={components:{},props:{value:{type:Boolean,default:!1}},data:()=>({}),computed:{},methods:{set(s){this.$emit("input",s)}}};var x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"border border-gray-300 rounded-xl flex p-1 relative"},[e("button",{staticClass:"font-semibold block flex-grow cursor-pointer"},[e("div",{staticClass:"p-2 px-3 rounded-lg transition-colors",class:{"bg-blue-500 text-white":!t.value},on:{click:function(a){return t.set(!1)}}},[t._v(" Monthly ")])]),e("button",{staticClass:"font-semibold block flex-grow cursor-pointer",on:{click:function(a){return t.set(!0)}}},[e("div",{staticClass:"p-2 px-4 rounded-lg transition-colors",class:{"bg-blue-500 text-white":t.value}},[t._v(" Yearly ")])]),e("div",{staticClass:"absolute hidden sm:block text-gray-500 text-xs mt-12"},[t._v(" Save 20% with annual plans ")])])},_=[],C=l(v,x,_,!1,null,null,null,null);const y=C.exports,w={components:{VButton:f,TextInput:g},props:{show:{type:Boolean,default:!1},plan:{type:String,default:"pro"},yearly:{type:Boolean,default:!0}},data:()=>({form:new h({name:"",email:""}),loading:!1}),watch:{user(){this.updateUser()},show(){setTimeout(()=>{this.$refs.companyName&&this.$refs.companyName.$el.querySelector("input").focus()},300),this.loading=!1}},mounted(){this.updateUser()},methods:{updateUser(){this.user&&(this.form.name=this.user.name,this.form.email=this.user.email)},saveDetails(){this.form.busy||this.form.put("api/subscription/update-customer-details").then(()=>{this.loading=!0,n.get("/api/subscription/new/"+this.plan+"/"+(this.yearly?"yearly":"monthly")+"/checkout/with-trial").then(s=>{window.location=s.data.checkout_url}).catch(s=>{this.alertError(s.response.data.message)}).finally(()=>{this.loading=!1,this.close()})})},close(){this.$emit("close")}},computed:i({},c({user:"auth/user"}))};var b=function(){var t=this,e=t._self._c;return e("modal",{attrs:{show:t.show,"max-width":"lg"},on:{close:t.close}},[e("text-input",{ref:"companyName",attrs:{label:"Company Name",name:"name",required:!0,form:t.form,help:"Name that will appear on invoices"}}),e("text-input",{attrs:{label:"Email",name:"email","native-type":"email",required:!0,form:t.form,help:"Where invoices will be sent"}}),e("v-button",{staticClass:"mt-6 block mx-auto",attrs:{loading:t.form.busy||t.loading,disabled:t.form.busy||t.loading,arrow:!0},on:{click:t.saveDetails}},[t._v(" Go to checkout ")])],1)},k=[],$=l(w,b,k,!1,null,null,null,null);const L=$.exports,P={name:"CustomPlan",components:{},props:{},data:()=>({}),computed:{},methods:{customPlanClick(){window.$crisp.push(["do","chat:show"]),window.$crisp.push(["do","chat:open"]),window.$crisp.push(["do","message:send",["text","Hi, I would like to discuss about a custom plan"]])}}};var M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"border relative max-w-5xl mx-auto mt-4 lg:mt-10"},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"rounded-lg bg-gray-50 dark:bg-gray-800 px-6 py-8 sm:p-10 lg:flex lg:items-center"},[t._m(0),e("div",{staticClass:"mt-6 rounded-md lg:mt-0 lg:ml-10 lg:flex-shrink-0"},[e("v-button",{staticClass:"w-full mt-4",attrs:{color:"white"},on:{click:function(a){return a.preventDefault(),t.customPlanClick.apply(null,arguments)}}},[t._v(" Contact us ")])],1)])])])},D=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"flex-1"},[t("h3",{staticClass:"inline-flex px-4 py-1 rounded-full text-md font-bold tracking-wide uppercase bg-white text-gray-800"},[s._v("Custom plan")]),t("div",{staticClass:"mt-4 text-md text-gray-600 dark:text-gray-400"},[s._v("Get a custom file upload limit, enterprise-level support, custom contract, payment via invoice/PO etc.")])])}],B=l(P,M,D,!1,null,null,null,null);const Y=B.exports,S={components:{MonthlyYearlySelector:y,CheckoutDetailsModal:L,CustomPlan:Y},props:{homePage:{type:Boolean,default:!1}},data:()=>({isYearly:!0,selectedPlan:"pro",showDetailsModal:!1,pricingInfo:["Form confirmation emails","Slack notifications","Discord notifications","Editable submissions","Custom domain (soon)","Custom code","Larger file uploads (50mb)","Remove  branding","Priority support"]}),methods:{openCustomerCheckout(s){this.selectedPlan=s,this.showDetailsModal=!0},openBilling(){this.billingLoading=!0,n.get("/api/subscription/billing-portal").then(s=>{this.billingLoading=!1;const t=s.data.portal_url;window.location=t})}},computed:i({},c({authenticated:"auth/check",user:"auth/user"}))};var j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("section",{staticClass:"relative"},[t.homePage?t._e():e("div",{staticClass:"absolute inset-0 grid",attrs:{"aria-hidden":"true"}},[e("div",{staticClass:"bg-gray-100"}),e("div",{staticClass:"bg-white"})]),e("div",{staticClass:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"},[e("div",{staticClass:"max-w-5xl mx-auto bg-white shadow-xl rounded-3xl ring-1 ring-gray-200 lg:flex isolate"},[e("div",{staticClass:"p-8 sm:p-8 lg:flex-auto"},[t.homePage?e("h3",{staticClass:"text-3xl font-semibold tracking-tight text-gray-950"},[t._v(" Check out our "),e("span",{staticClass:"ml-2 text-nt-blue"},[e("svg",{staticClass:"inline w-10 h-10",attrs:{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{opacity:"0.12"}},[e("path",{attrs:{d:"M15.9998 27.3333L10.6665 12H21.3332L15.9998 27.3333Z",fill:"currentColor"}}),e("path",{attrs:{d:"M13.3332 4H9.33317L2.6665 12L10.6665 12L13.3332 4Z",fill:"currentColor"}}),e("path",{attrs:{d:"M18.6665 4H22.6665L29.3332 12L21.3332 12L18.6665 4Z",fill:"currentColor"}})]),e("path",{attrs:{d:"M3.33345 12H28.6668M13.3334 4L10.6668 12L16.0001 27.3333L21.3334 12L18.6668 4M16.8195 27.0167L28.7644 12.6829C28.9668 12.4399 29.0681 12.3185 29.1067 12.1829C29.1408 12.0633 29.1408 11.9367 29.1067 11.8171C29.0681 11.6815 28.9668 11.5601 28.7644 11.3171L22.9866 4.3838C22.8691 4.24273 22.8103 4.17219 22.7382 4.12148C22.6744 4.07654 22.6031 4.04318 22.5277 4.02289C22.4426 4 22.3508 4 22.1672 4H9.83305C9.64941 4 9.55758 4 9.4725 4.02289C9.39711 4.04318 9.32586 4.07654 9.26202 4.12148C9.18996 4.17219 9.13118 4.24273 9.01361 4.3838L3.23583 11.3171C3.0334 11.5601 2.93218 11.6815 2.8935 11.8171C2.85939 11.9366 2.85939 12.0633 2.8935 12.1829C2.93218 12.3185 3.0334 12.4399 3.23583 12.6829L15.1807 27.0167C15.4621 27.3544 15.6028 27.5232 15.7713 27.5848C15.919 27.6388 16.0812 27.6388 16.229 27.5848C16.3974 27.5232 16.5381 27.3544 16.8195 27.0167Z",stroke:"currentColor","stroke-width":"2.66667","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" Pro Features ")])]):e("h3",{staticClass:"text-3xl font-semibold tracking-tight text-gray-950"},[t._v(" Pro Plan ")]),e("p",{staticClass:"mt-2 text-base font-medium leading-7 text-gray-600"},[t._v(" Pro offers empowering features tailored to the advanced needs of teams and creators. Enjoy our free 3-day trial! ")]),t._m(0),e("ul",{staticClass:"grid grid-cols-1 gap-4 mt-4 text-sm font-medium leading-6 text-gray-900 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2",attrs:{role:"list"}},[t._l(t.pricingInfo,function(a,u){return e("li",{key:u,staticClass:"flex gap-x-3"},[e("svg",{staticClass:"w-5 h-5 shrink-0 stroke-blue-600",attrs:{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M20 6L9 17L4 12","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "+t._s(a)+" ")])}),t._t("pricing-table")],2)]),e("div",{staticClass:"p-2 -mt-2 flex-col lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0"},[e("div",{staticClass:"grow h-full py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12"},[e("div",{staticClass:"max-w-xs px-8 mx-auto space-y-6"},[e("div",{staticClass:"flex items-center justify-center mb-10"},[e("monthly-yearly-selector",{model:{value:t.isYearly,callback:function(a){t.isYearly=a},expression:"isYearly"}})],1),e("p",{staticClass:"flex flex-col items-center"},[e("span",{staticClass:"text-6xl font-semibold tracking-tight text-gray-950"},[t.isYearly?[t._v("$16")]:[t._v("$19")]],2),e("span",{staticClass:"text-sm font-medium leading-6 text-gray-600"},[t._v(" per month ")])]),e("div",{staticClass:"flex justify-center"},[t.authenticated?t.authenticated&&t.user.is_subscribed?e("v-button",{staticClass:"mr-1",attrs:{arrow:!0},on:{click:function(a){return a.preventDefault(),t.openBilling.apply(null,arguments)}}},[t._v(" View Billing ")]):e("v-button",{staticClass:"mr-1",attrs:{arrow:!0},on:{click:function(a){return a.preventDefault(),t.openCustomerCheckout("default")}}},[t._v(" Start free trial ")]):e("v-button",{staticClass:"mr-1",attrs:{to:{name:"register"},arrow:!0}},[t._v(" Start free trial ")])],1),t.homePage?t._e():e("p",{staticClass:"text-xs font-medium leading-5 text-gray-600"},[t._v(" Invoices and receipts available for easy company reimbursement. ")])])])])])])]),t.homePage?t._e():e("custom-plan"),e("checkout-details-modal",{attrs:{show:t.showDetailsModal,yearly:t.isYearly,plan:t.selectedPlan},on:{close:function(a){t.showDetailsModal=!1}}})],1)},F=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"flex items-center mt-6 gap-x-4"},[t("h4",{staticClass:"flex-none text-sm font-semibold leading-6 tracking-widest text-gray-400 uppercase"},[s._v(" What's included ")]),t("div",{staticClass:"flex-auto h-px bg-gray-200"})])}],H=l(S,j,F,!1,null,null,null,null);const E=H.exports;export{E as P};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpY2luZ1RhYmxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9wcmljaW5nL01vbnRobHlZZWFybHlTZWxlY3Rvci52dWUiLCIuLi8uLi8uLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9wcmljaW5nL0NoZWNrb3V0RGV0YWlsc01vZGFsLnZ1ZSIsIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2VzL3ByaWNpbmcvQ3VzdG9tUGxhbi52dWUiLCIuLi8uLi8uLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlcy9wcmljaW5nL1ByaWNpbmdUYWJsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIGZsZXggcC0xIHJlbGF0aXZlXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImZvbnQtc2VtaWJvbGQgYmxvY2sgZmxleC1ncm93IGN1cnNvci1wb2ludGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicC0yIHB4LTMgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9yc1wiIDpjbGFzcz1cInsnYmctYmx1ZS01MDAgdGV4dC13aGl0ZSc6IXZhbHVlfVwiXG4gICAgICAgICAgIEBjbGljaz1cInNldChmYWxzZSlcIlxuICAgICAgPlxuICAgICAgICBNb250aGx5XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBibG9jayBmbGV4LWdyb3cgY3Vyc29yLXBvaW50ZXJcIiBAY2xpY2s9XCJzZXQodHJ1ZSlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwLTIgcHgtNCByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzXCIgOmNsYXNzPVwieydiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlJzp2YWx1ZX1cIj5cbiAgICAgICAgWWVhcmx5XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaGlkZGVuIHNtOmJsb2NrIHRleHQtZ3JheS01MDAgdGV4dC14cyBtdC0xMlwiPlxuICAgICAgU2F2ZSAyMCUgd2l0aCBhbm51YWwgcGxhbnNcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNvbXBvbmVudHM6IHt9LFxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGRhdGE6ICgpID0+ICh7fSksXG5cbiAgY29tcHV0ZWQ6IHt9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBzZXQgKHZhbHVlKSB7XG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxtb2RhbCA6c2hvdz1cInNob3dcIiBtYXgtd2lkdGg9XCJsZ1wiIEBjbG9zZT1cImNsb3NlXCI+XG4gICAgPHRleHQtaW5wdXQgcmVmPVwiY29tcGFueU5hbWVcIiBsYWJlbD1cIkNvbXBhbnkgTmFtZVwiIG5hbWU9XCJuYW1lXCIgOnJlcXVpcmVkPVwidHJ1ZVwiIDpmb3JtPVwiZm9ybVwiIGhlbHA9XCJOYW1lIHRoYXQgd2lsbCBhcHBlYXIgb24gaW52b2ljZXNcIiAvPlxuICAgIDx0ZXh0LWlucHV0IGxhYmVsPVwiRW1haWxcIiBuYW1lPVwiZW1haWxcIiBuYXRpdmUtdHlwZT1cImVtYWlsXCIgOnJlcXVpcmVkPVwidHJ1ZVwiIDpmb3JtPVwiZm9ybVwiIGhlbHA9XCJXaGVyZSBpbnZvaWNlcyB3aWxsIGJlIHNlbnRcIiAvPlxuICAgIDx2LWJ1dHRvbiA6bG9hZGluZz1cImZvcm0uYnVzeSB8fCBsb2FkaW5nXCIgOmRpc2FibGVkPVwiZm9ybS5idXN5IHx8IGxvYWRpbmdcIiBjbGFzcz1cIm10LTYgYmxvY2sgbXgtYXV0b1wiXG4gICAgICAgICAgICAgIEBjbGljaz1cInNhdmVEZXRhaWxzXCIgOmFycm93PVwidHJ1ZVwiXG4gICAgPlxuICAgICAgR28gdG8gY2hlY2tvdXRcbiAgICA8L3YtYnV0dG9uPlxuICA8L21vZGFsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi8uLi9mb3Jtcy9UZXh0SW5wdXQudnVlJ1xuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5pbXBvcnQgVkJ1dHRvbiBmcm9tICcuLi8uLi9jb21tb24vQnV0dG9uLnZ1ZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIGNvbXBvbmVudHM6IHsgVkJ1dHRvbiwgVGV4dElucHV0IH0sXG4gIHByb3BzOiB7XG4gICAgc2hvdzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBwbGFuOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJvJ1xuICAgIH0sXG4gICAgeWVhcmx5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJ1xuICAgIH0pLFxuICAgIGxvYWRpbmc6IGZhbHNlXG4gIH0pLFxuXG4gIHdhdGNoOiB7XG4gICAgdXNlciAoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVVzZXIoKVxuICAgIH0sXG4gICAgc2hvdyAoKSB7XG4gICAgICAvLyBXYWl0IGZvciBtb2RhbCB0byBvcGVuIGFuZCBmb2N1cyBvbiBmaXJzdCBmaWVsZFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmNvbXBhbnlOYW1lKSB7XG4gICAgICAgICAgdGhpcy4kcmVmcy5jb21wYW55TmFtZS4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0sIDMwMClcblxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy51cGRhdGVVc2VyKClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlVXNlcigpIHtcbiAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgdGhpcy5mb3JtLm5hbWUgPSB0aGlzLnVzZXIubmFtZVxuICAgICAgICB0aGlzLmZvcm0uZW1haWwgPSB0aGlzLnVzZXIuZW1haWxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhdmVEZXRhaWxzICgpIHtcbiAgICAgIGlmICh0aGlzLmZvcm0uYnVzeSkgcmV0dXJuXG4gICAgICB0aGlzLmZvcm0ucHV0KCdhcGkvc3Vic2NyaXB0aW9uL3VwZGF0ZS1jdXN0b21lci1kZXRhaWxzJykudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3N1YnNjcmlwdGlvbi9uZXcvJyArIHRoaXMucGxhbiArICcvJyArICghdGhpcy55ZWFybHkgPyAnbW9udGhseScgOiAneWVhcmx5JykgKyAnL2NoZWNrb3V0L3dpdGgtdHJpYWwnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHJlc3BvbnNlLmRhdGEuY2hlY2tvdXRfdXJsXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuYWxlcnRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG4gICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xvc2UgKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgdXNlcjogJ2F1dGgvdXNlcidcbiAgICB9KVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJvcmRlciByZWxhdGl2ZSBtYXgtdy01eGwgbXgtYXV0byBtdC00IGxnOm10LTEwXCI+XG4gICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdW5kZWQtbGcgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHB4LTYgcHktOCBzbTpwLTEwIGxnOmZsZXggbGc6aXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJpbmxpbmUtZmxleCBweC00IHB5LTEgcm91bmRlZC1mdWxsIHRleHQtbWQgZm9udC1ib2xkIHRyYWNraW5nLXdpZGUgdXBwZXJjYXNlIGJnLXdoaXRlIHRleHQtZ3JheS04MDBcIj5DdXN0b20gcGxhbjwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTQgdGV4dC1tZCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPkdldCBhIGN1c3RvbSBmaWxlIHVwbG9hZCBsaW1pdCwgZW50ZXJwcmlzZS1sZXZlbCBzdXBwb3J0LCBjdXN0b20gY29udHJhY3QsIHBheW1lbnQgdmlhIGludm9pY2UvUE8gZXRjLjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTYgcm91bmRlZC1tZCBsZzptdC0wIGxnOm1sLTEwIGxnOmZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICA8di1idXR0b24gY29sb3I9XCJ3aGl0ZVwiIGNsYXNzPVwidy1mdWxsIG10LTRcIiBAY2xpY2sucHJldmVudD1cImN1c3RvbVBsYW5DbGlja1wiPlxuICAgICAgICAgICAgQ29udGFjdCB1c1xuICAgICAgICAgIDwvdi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0N1c3RvbVBsYW4nLFxuICBjb21wb25lbnRzOiB7fSxcbiAgcHJvcHM6IHt9LFxuXG4gIGRhdGE6ICgpID0+ICh7fSksXG5cbiAgY29tcHV0ZWQ6IHt9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjdXN0b21QbGFuQ2xpY2sgKCkge1xuICAgICAgd2luZG93LiRjcmlzcC5wdXNoKFsnZG8nLCAnY2hhdDpzaG93J10pXG4gICAgICB3aW5kb3cuJGNyaXNwLnB1c2goWydkbycsICdjaGF0Om9wZW4nXSlcbiAgICAgIHdpbmRvdy4kY3Jpc3AucHVzaChbJ2RvJywgJ21lc3NhZ2U6c2VuZCcsIFsndGV4dCcsICdIaSwgSSB3b3VsZCBsaWtlIHRvIGRpc2N1c3MgYWJvdXQgYSBjdXN0b20gcGxhbiddXSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgPGRpdiB2LWlmPVwiIWhvbWVQYWdlXCIgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIGdyaWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJnLWdyYXktMTAwXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZy13aGl0ZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJweC00IG14LWF1dG8gbWF4LXctN3hsIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXctNXhsIG14LWF1dG8gYmctd2hpdGUgc2hhZG93LXhsIHJvdW5kZWQtM3hsIHJpbmctMSByaW5nLWdyYXktMjAwIGxnOmZsZXggaXNvbGF0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTggc206cC04IGxnOmZsZXgtYXV0b1wiPlxuICAgICAgICAgICAgPGgzIHYtaWY9XCJob21lUGFnZVwiIGNsYXNzPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTUwXCI+XG4gICAgICAgICAgICAgIENoZWNrIG91dCBvdXJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtbC0yIHRleHQtbnQtYmx1ZVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpbmxpbmUgdy0xMCBoLTEwXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS45OTk4IDI3LjMzMzNMMTAuNjY2NSAxMkgyMS4zMzMyTDE1Ljk5OTggMjcuMzMzM1pcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjMzMzIgNEg5LjMzMzE3TDIuNjY2NSAxMkwxMC42NjY1IDEyTDEzLjMzMzIgNFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4LjY2NjUgNEgyMi42NjY1TDI5LjMzMzIgMTJMMjEuMzMzMiAxMkwxOC42NjY1IDRaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMy4zMzM0NSAxMkgyOC42NjY4TTEzLjMzMzQgNEwxMC42NjY4IDEyTDE2LjAwMDEgMjcuMzMzM0wyMS4zMzM0IDEyTDE4LjY2NjggNE0xNi44MTk1IDI3LjAxNjdMMjguNzY0NCAxMi42ODI5QzI4Ljk2NjggMTIuNDM5OSAyOS4wNjgxIDEyLjMxODUgMjkuMTA2NyAxMi4xODI5QzI5LjE0MDggMTIuMDYzMyAyOS4xNDA4IDExLjkzNjcgMjkuMTA2NyAxMS44MTcxQzI5LjA2ODEgMTEuNjgxNSAyOC45NjY4IDExLjU2MDEgMjguNzY0NCAxMS4zMTcxTDIyLjk4NjYgNC4zODM4QzIyLjg2OTEgNC4yNDI3MyAyMi44MTAzIDQuMTcyMTkgMjIuNzM4MiA0LjEyMTQ4QzIyLjY3NDQgNC4wNzY1NCAyMi42MDMxIDQuMDQzMTggMjIuNTI3NyA0LjAyMjg5QzIyLjQ0MjYgNCAyMi4zNTA4IDQgMjIuMTY3MiA0SDkuODMzMDVDOS42NDk0MSA0IDkuNTU3NTggNCA5LjQ3MjUgNC4wMjI4OUM5LjM5NzExIDQuMDQzMTggOS4zMjU4NiA0LjA3NjU0IDkuMjYyMDIgNC4xMjE0OEM5LjE4OTk2IDQuMTcyMTkgOS4xMzExOCA0LjI0MjczIDkuMDEzNjEgNC4zODM4TDMuMjM1ODMgMTEuMzE3MUMzLjAzMzQgMTEuNTYwMSAyLjkzMjE4IDExLjY4MTUgMi44OTM1IDExLjgxNzFDMi44NTkzOSAxMS45MzY2IDIuODU5MzkgMTIuMDYzMyAyLjg5MzUgMTIuMTgyOUMyLjkzMjE4IDEyLjMxODUgMy4wMzM0IDEyLjQzOTkgMy4yMzU4MyAxMi42ODI5TDE1LjE4MDcgMjcuMDE2N0MxNS40NjIxIDI3LjM1NDQgMTUuNjAyOCAyNy41MjMyIDE1Ljc3MTMgMjcuNTg0OEMxNS45MTkgMjcuNjM4OCAxNi4wODEyIDI3LjYzODggMTYuMjI5IDI3LjU4NDhDMTYuMzk3NCAyNy41MjMyIDE2LjUzODEgMjcuMzU0NCAxNi44MTk1IDI3LjAxNjdaXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMi42NjY2N1wiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICBQcm8gRmVhdHVyZXNcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxoMyB2LWVsc2UgY2xhc3M9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05NTBcIj5cbiAgICAgICAgICAgICAgUHJvIFBsYW5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm10LTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxlYWRpbmctNyB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICBQcm8gb2ZmZXJzIGVtcG93ZXJpbmcgZmVhdHVyZXMgdGFpbG9yZWQgdG8gdGhlIGFkdmFuY2VkIG5lZWRzIG9mIHRlYW1zIGFuZCBjcmVhdG9ycy4gRW5qb3kgb3VyXG4gICAgICAgICAgICAgIGZyZWUgMy1kYXkgdHJpYWwhXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC02IGdhcC14LTRcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZmxleC1ub25lIHRleHQtc20gZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdHJhY2tpbmctd2lkZXN0IHRleHQtZ3JheS00MDAgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAgV2hhdCdzIGluY2x1ZGVkXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWF1dG8gaC1weCBiZy1ncmF5LTIwMFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJncmlkIGdyaWQtY29scy0xIGdhcC00IG10LTQgdGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMCBzbTpncmlkLWNvbHMtMiBzbTpnYXAteC02IHNtOmdhcC15LTJcIj5cbiAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKHRpdGxlLCBpKSBpbiBwcmljaW5nSW5mb1wiIDprZXk9XCJpXCIgY2xhc3M9XCJmbGV4IGdhcC14LTNcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwidy01IGgtNSBzaHJpbmstMCBzdHJva2UtYmx1ZS02MDBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMCA2TDkgMTdMNCAxMlwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cInByaWNpbmctdGFibGVcIj48L3Nsb3Q+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInAtMiAtbXQtMiBmbGV4LWNvbCBsZzptdC0wIGxnOnctZnVsbCBsZzptYXgtdy1tZCBsZzpmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiZ3JvdyBoLWZ1bGwgcHktMTAgdGV4dC1jZW50ZXIgcm91bmRlZC0yeGwgYmctZ3JheS01MCByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktOTAwLzUgbGc6ZmxleCBsZzpmbGV4LWNvbCBsZzpqdXN0aWZ5LWNlbnRlciBsZzpweS0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXcteHMgcHgtOCBteC1hdXRvIHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgPG1vbnRobHkteWVhcmx5LXNlbGVjdG9yIHYtbW9kZWw9XCJpc1llYXJseVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj48IS0tIGxnKyAtLT5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC02eGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTUwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNZZWFybHlcIj4kMTY8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPiQxOTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgcGVyIG1vbnRoXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDx2LWJ1dHRvbiB2LWlmPVwiIWF1dGhlbnRpY2F0ZWRcIiBjbGFzcz1cIm1yLTFcIiA6dG89XCJ7IG5hbWU6ICdyZWdpc3RlcicgfVwiIDphcnJvdz1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgU3RhcnQgZnJlZSB0cmlhbFxuICAgICAgICAgICAgICAgICAgPC92LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDx2LWJ1dHRvbiB2LWVsc2UtaWY9XCJhdXRoZW50aWNhdGVkICYmIHVzZXIuaXNfc3Vic2NyaWJlZFwiIGNsYXNzPVwibXItMVwiIEBjbGljay5wcmV2ZW50PVwib3BlbkJpbGxpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphcnJvdz1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBCaWxsaW5nXG4gICAgICAgICAgICAgICAgICA8L3YtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPHYtYnV0dG9uIHYtZWxzZSBjbGFzcz1cIm1yLTFcIiBAY2xpY2sucHJldmVudD1cIm9wZW5DdXN0b21lckNoZWNrb3V0KCdkZWZhdWx0JylcIiA6YXJyb3c9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIFN0YXJ0IGZyZWUgdHJpYWxcbiAgICAgICAgICAgICAgICAgIDwvdi1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgdi1pZj1cIiFob21lUGFnZVwiIGNsYXNzPVwidGV4dC14cyBmb250LW1lZGl1bSBsZWFkaW5nLTUgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgSW52b2ljZXMgYW5kIHJlY2VpcHRzIGF2YWlsYWJsZSBmb3IgZWFzeSBjb21wYW55IHJlaW1idXJzZW1lbnQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxjdXN0b20tcGxhbiB2LWlmPVwiIWhvbWVQYWdlXCIgLz5cblxuICAgIDxjaGVja291dC1kZXRhaWxzLW1vZGFsIDpzaG93PVwic2hvd0RldGFpbHNNb2RhbFwiIDp5ZWFybHk9XCJpc1llYXJseVwiIDpwbGFuPVwic2VsZWN0ZWRQbGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xvc2U9XCJzaG93RGV0YWlsc01vZGFsPWZhbHNlXCJcbiAgICAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge21hcEdldHRlcnN9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTW9udGhseVllYXJseVNlbGVjdG9yIGZyb20gJy4vTW9udGhseVllYXJseVNlbGVjdG9yLnZ1ZSdcbmltcG9ydCBDaGVja291dERldGFpbHNNb2RhbCBmcm9tICcuL0NoZWNrb3V0RGV0YWlsc01vZGFsLnZ1ZSdcbmltcG9ydCBDdXN0b21QbGFuIGZyb20gJy4vQ3VzdG9tUGxhbi52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIE1vbnRobHlZZWFybHlTZWxlY3RvcixcbiAgICBDaGVja291dERldGFpbHNNb2RhbCxcbiAgICBDdXN0b21QbGFuXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgaG9tZVBhZ2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBpc1llYXJseTogdHJ1ZSxcbiAgICBzZWxlY3RlZFBsYW46ICdwcm8nLFxuICAgIHNob3dEZXRhaWxzTW9kYWw6IGZhbHNlLFxuXG4gICAgcHJpY2luZ0luZm86IFtcbiAgICAgICdGb3JtIGNvbmZpcm1hdGlvbiBlbWFpbHMnLFxuICAgICAgJ1NsYWNrIG5vdGlmaWNhdGlvbnMnLFxuICAgICAgJ0Rpc2NvcmQgbm90aWZpY2F0aW9ucycsXG4gICAgICAnRWRpdGFibGUgc3VibWlzc2lvbnMnLFxuICAgICAgJ0N1c3RvbSBkb21haW4gKHNvb24pJyxcbiAgICAgICdDdXN0b20gY29kZScsXG4gICAgICAnTGFyZ2VyIGZpbGUgdXBsb2FkcyAoNTBtYiknLFxuICAgICAgJ1JlbW92ZSAgYnJhbmRpbmcnLFxuICAgICAgJ1ByaW9yaXR5IHN1cHBvcnQnXG4gICAgXVxuICB9KSxcblxuICBtZXRob2RzOiB7XG4gICAgb3BlbkN1c3RvbWVyQ2hlY2tvdXQocGxhbikge1xuICAgICAgdGhpcy5zZWxlY3RlZFBsYW4gPSBwbGFuXG4gICAgICB0aGlzLnNob3dEZXRhaWxzTW9kYWwgPSB0cnVlXG4gICAgfSxcbiAgICBvcGVuQmlsbGluZygpIHtcbiAgICAgIHRoaXMuYmlsbGluZ0xvYWRpbmcgPSB0cnVlXG4gICAgICBheGlvcy5nZXQoJy9hcGkvc3Vic2NyaXB0aW9uL2JpbGxpbmctcG9ydGFsJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5iaWxsaW5nTG9hZGluZyA9IGZhbHNlXG4gICAgICAgIGNvbnN0IHVybCA9IHJlc3BvbnNlLmRhdGEucG9ydGFsX3VybFxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaycsXG4gICAgICB1c2VyOiAnYXV0aC91c2VyJ1xuICAgIH0pXG4gIH1cbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9zZmNfbWFpbiIsInZhbHVlIiwiVkJ1dHRvbiIsIlRleHRJbnB1dCIsIkZvcm0iLCJheGlvcyIsInJlc3BvbnNlIiwiZXJyb3IiLCJfX3NwcmVhZFZhbHVlcyIsIm1hcEdldHRlcnMiLCJNb250aGx5WWVhcmx5U2VsZWN0b3IiLCJDaGVja291dERldGFpbHNNb2RhbCIsIkN1c3RvbVBsYW4iLCJwbGFuIiwidXJsIl0sIm1hcHBpbmdzIjoib2JBcUJBLE1BQUFBLEVBQUEsQ0FFQSxXQUFBLENBQUEsRUFDQSxNQUFBLENBQ0EsTUFBQSxDQUNBLEtBQUEsUUFDQSxRQUFBLEVBQ0EsQ0FDQSxFQUNBLEtBQUEsS0FBQSxDQUFBLEdBRUEsU0FBQSxDQUFBLEVBRUEsUUFBQSxDQUNBLElBQUFDLEVBQUEsQ0FDQSxLQUFBLE1BQUEsUUFBQUEsQ0FBQSxDQUNBLENBQ0EsQ0FDQSxneEJDcEJBRCxFQUFBLENBRUEsV0FBQSxDQUFBLFFBQUFFLEVBQUEsVUFBQUMsQ0FBQSxFQUNBLE1BQUEsQ0FDQSxLQUFBLENBQ0EsS0FBQSxRQUNBLFFBQUEsRUFDQSxFQUNBLEtBQUEsQ0FDQSxLQUFBLE9BQ0EsUUFBQSxLQUNBLEVBQ0EsT0FBQSxDQUNBLEtBQUEsUUFDQSxRQUFBLEVBQ0EsQ0FDQSxFQUNBLEtBQUEsS0FBQSxDQUNBLEtBQUEsSUFBQUMsRUFBQSxDQUNBLEtBQUEsR0FDQSxNQUFBLEVBQ0EsQ0FBQSxFQUNBLFFBQUEsRUFDQSxHQUVBLE1BQUEsQ0FDQSxNQUFBLENBQ0EsS0FBQSxXQUFBLENBQ0EsRUFDQSxNQUFBLENBRUEsV0FBQSxJQUFBLENBQ0EsS0FBQSxNQUFBLGFBQ0EsS0FBQSxNQUFBLFlBQUEsSUFBQSxjQUFBLE9BQUEsRUFBQSxNQUFBLENBRUEsRUFBQSxHQUFBLEVBRUEsS0FBQSxRQUFBLEVBQ0EsQ0FDQSxFQUVBLFNBQUEsQ0FDQSxLQUFBLFdBQUEsQ0FDQSxFQUVBLFFBQUEsQ0FDQSxZQUFBLENBQ0EsS0FBQSxPQUNBLEtBQUEsS0FBQSxLQUFBLEtBQUEsS0FBQSxLQUNBLEtBQUEsS0FBQSxNQUFBLEtBQUEsS0FBQSxNQUVBLEVBQ0EsYUFBQSxDQUNBLEtBQUEsS0FBQSxNQUNBLEtBQUEsS0FBQSxJQUFBLDBDQUFBLEVBQUEsS0FBQSxJQUFBLENBQ0EsS0FBQSxRQUFBLEdBQ0FDLEVBQUEsSUFBQSx5QkFBQSxLQUFBLEtBQUEsS0FBQSxLQUFBLE9BQUEsU0FBQSxXQUFBLHNCQUFBLEVBQUEsS0FBQUMsR0FBQSxDQUNBLE9BQUEsU0FBQUEsRUFBQSxLQUFBLFlBQ0EsQ0FBQSxFQUFBLE1BQUFDLEdBQUEsQ0FDQSxLQUFBLFdBQUFBLEVBQUEsU0FBQSxLQUFBLE9BQUEsQ0FDQSxDQUFBLEVBQUEsUUFBQSxJQUFBLENBQ0EsS0FBQSxRQUFBLEdBQ0EsS0FBQSxNQUFBLENBQ0EsQ0FBQSxDQUNBLENBQUEsQ0FDQSxFQUNBLE9BQUEsQ0FDQSxLQUFBLE1BQUEsT0FBQSxDQUNBLENBQ0EsRUFFQSxTQUFBQyxFQUFBLEdBQ0FDLEVBQUEsQ0FDQSxLQUFBLFdBQ0EsQ0FBQSxFQUVBLDhuQkM1RUFULEVBQUEsQ0FDQSxLQUFBLGFBQ0EsV0FBQSxDQUFBLEVBQ0EsTUFBQSxDQUFBLEVBRUEsS0FBQSxLQUFBLENBQUEsR0FFQSxTQUFBLENBQUEsRUFFQSxRQUFBLENBQ0EsaUJBQUEsQ0FDQSxPQUFBLE9BQUEsS0FBQSxDQUFBLEtBQUEsV0FBQSxDQUFBLEVBQ0EsT0FBQSxPQUFBLEtBQUEsQ0FBQSxLQUFBLFdBQUEsQ0FBQSxFQUNBLE9BQUEsT0FBQSxLQUFBLENBQUEsS0FBQSxlQUFBLENBQUEsT0FBQSxpREFBQSxDQUFBLENBQUEsQ0FDQSxDQUNBLENBQ0EsbStCQzJFQUEsRUFBQSxDQUNBLFdBQUEsQ0FDQSxzQkFBQVUsRUFDQSxxQkFBQUMsRUFDQSxXQUFBQyxDQUNBLEVBQ0EsTUFBQSxDQUNBLFNBQUEsQ0FDQSxLQUFBLFFBQ0EsUUFBQSxFQUNBLENBQ0EsRUFDQSxLQUFBLEtBQUEsQ0FDQSxTQUFBLEdBQ0EsYUFBQSxNQUNBLGlCQUFBLEdBRUEsWUFBQSxDQUNBLDJCQUNBLHNCQUNBLHdCQUNBLHVCQUNBLHVCQUNBLGNBQ0EsNkJBQ0EsbUJBQ0Esa0JBQ0EsQ0FDQSxHQUVBLFFBQUEsQ0FDQSxxQkFBQUMsRUFBQSxDQUNBLEtBQUEsYUFBQUEsRUFDQSxLQUFBLGlCQUFBLEVBQ0EsRUFDQSxhQUFBLENBQ0EsS0FBQSxlQUFBLEdBQ0FSLEVBQUEsSUFBQSxrQ0FBQSxFQUFBLEtBQUFDLEdBQUEsQ0FDQSxLQUFBLGVBQUEsR0FDQSxNQUFBUSxFQUFBUixFQUFBLEtBQUEsV0FDQSxPQUFBLFNBQUFRLENBQ0EsQ0FBQSxDQUNBLENBQ0EsRUFFQSxTQUFBTixFQUFBLEdBQ0FDLEVBQUEsQ0FDQSxjQUFBLGFBQ0EsS0FBQSxXQUNBLENBQUEsRUFFQSJ9