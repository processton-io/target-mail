import{V as n,d as l,b as m,m as d,n as u,s as o}from"./app.js";import{g as a}from"./vform.es.js";import{P as c}from"./ProTag.js";import{E as f}from"./ExtraMenu.js";import{F as p}from"./FormCleanings.js";import"./PricingTable.js";import"./FormTemplateModal.js";import"./Collapse.js";const g=function(){o.commit("open/forms/startLoading"),o.dispatch("open/workspaces/loadIfEmpty").then(()=>{o.dispatch("open/forms/loadIfEmpty",o.state["open/workspaces"].currentId)})},w={name:"ShowForm",components:{VButton:n,ProTag:c,ExtraMenu:f,FormCleanings:p},mixins:[l],beforeRouteEnter(e,t,s){g(),s()},beforeRouteLeave(e,t,s){this.workingForm=null,s()},middleware:"auth",data(){return{metaTitle:"Home",tabsList:[{name:"Submissions",route:"forms.show"},{name:"Analytics",route:"forms.show.analytics"},{name:"Share",route:"forms.show.share"}]}},computed:{...m({user:"auth/user"}),...d({formsLoading:e=>e["open/forms"].loading,workspacesLoading:e=>e["open/workspaces"].loading}),workingForm:{get(){return this.$store.state["open/working_form"].content},set(e){this.$store.commit("open/working_form/set",e)}},workspace(){return this.form?this.$store.getters["open/workspaces/getById"](this.form.workspace_id):null},form(){return this.$store.getters["open/forms/getBySlug"](this.$route.params.slug)},formEndpoint:()=>"/api/open/forms/{id}",loading(){return this.formsLoading||this.workspacesLoading},displayClosesDate(){if(this.form.closes_at){let e=new Date(this.form.closes_at);return e.getFullYear()+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+String(e.getDate()).padStart(2,"0")+" "+String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0")}return""}},watch:{form(){this.workingForm=new a(this.form)}},mounted(){this.form&&(this.workingForm=new a(this.form))},methods:{openCrisp(){window.$crisp.push(["do","chat:show"]),window.$crisp.push(["do","chat:open"])},goBack(){this.$router.push({name:"home"})},openEdit(){this.$router.push({name:"forms.edit",params:{slug:this.form.slug}})}}};var h=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bg-white"},[t.form?[s("div",{staticClass:"flex bg-gray-50"},[s("div",{staticClass:"w-full md:w-4/5 lg:w-3/5 md:mx-auto md:max-w-4xl px-4"},[s("div",{staticClass:"pt-4 pb-0"},[s("a",{staticClass:"flex text-blue mb-2 font-semibold text-sm",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.goBack.apply(null,arguments)}}},[s("svg",{staticClass:"w-3 h-3 text-blue mt-1 mr-1",attrs:{viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M5 9L1 5L5 1",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" Go back ")]),s("div",{staticClass:"flex flex-wrap"},[s("h2",{staticClass:"flex-grow text-gray-900 truncate"},[t._v(" "+t._s(t.form.title)+" ")]),s("div",{staticClass:"flex"},[s("extra-menu",{attrs:{form:t.form}}),s("v-button",{directives:[{name:"track",rawName:"v-track.view_form_click",value:{form_id:t.form.id,form_slug:t.form.slug},expression:"{form_id:form.id, form_slug:form.slug}",modifiers:{view_form_click:!0}}],staticClass:"mr-2 text-blue-600 hidden sm:block",attrs:{target:"_blank",to:{name:"forms.show_public",params:{slug:t.form.slug}},color:"white"}},[s("svg",{staticClass:"w-6 h-6 inline -mt-1",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),s("path",{attrs:{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),s("v-button",{staticClass:"text-white",on:{click:t.openEdit}},[s("svg",{staticClass:"inline mr-1 -mt-1",attrs:{width:"18",height:"17",viewBox:"0 0 18 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M8.99998 15.6662H16.5M1.5 15.6662H2.89545C3.3031 15.6662 3.50693 15.6662 3.69874 15.6202C3.8688 15.5793 4.03138 15.512 4.1805 15.4206C4.34869 15.3175 4.49282 15.1734 4.78107 14.8852L15.25 4.4162C15.9404 3.72585 15.9404 2.60656 15.25 1.9162C14.5597 1.22585 13.4404 1.22585 12.75 1.9162L2.28105 12.3852C1.9928 12.6734 1.84867 12.8175 1.7456 12.9857C1.65422 13.1348 1.58688 13.2974 1.54605 13.4675C1.5 13.6593 1.5 13.8631 1.5 14.2708V15.6662Z",stroke:"currentColor","stroke-width":"1.67","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" Edit form ")])],1)]),s("p",{staticClass:"text-gray-500 text-sm"},[s("span",{staticClass:"pr-1"},[t._v(t._s(t.form.views_count)+" view"+t._s(t.form.views_count>0?"s":""))]),s("span",{staticClass:"pr-1"},[t._v("- "+t._s(t.form.submissions_count)+" submission"+t._s(t.form.submissions_count>0?"s":"")+" ")]),s("span",[t._v("- Edited "+t._s(t.form.last_edited_human))])]),["draft","closed"].includes(t.form.visibility)||t.form.tags&&t.form.tags.length>0?s("div",{staticClass:"mt-2 flex items-center flex-wrap gap-3"},[t.form.visibility=="draft"?s("span",{staticClass:"inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-600 ring-1 ring-inset ring-gray-500/10 dark:text-white dark:bg-gray-700"},[t._v(" Draft - not publicly accessible ")]):t.form.visibility=="closed"?s("span",{staticClass:"inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-600 ring-1 ring-inset ring-gray-500/10 dark:text-white dark:bg-gray-700"},[t._v(" Closed - won't accept new submissions ")]):t._e(),t._l(t.form.tags,function(r,i){return s("span",{key:r,staticClass:"inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:text-white dark:bg-gray-700"},[t._v(" "+t._s(r)+" ")])})],2):t._e(),t.form.closes_at?s("p",{staticClass:"text-yellow-500"},[t.form.is_closed?s("span",[t._v(" This form stopped accepting submissions on the "+t._s(t.displayClosesDate)+" ")]):s("span",[t._v(" This form will stop accepting submissions on the "+t._s(t.displayClosesDate)+" ")])]):t._e(),t.form.max_submissions_count>0?s("p",{staticClass:"text-yellow-500"},[t.form.max_number_of_submissions_reached?s("span",[t._v(" The form is now closed because it reached its limit of "+t._s(t.form.max_submissions_count)+" submissions. ")]):s("span",[t._v(" This form will stop accepting submissions after "+t._s(t.form.max_submissions_count)+" submissions. ")])]):t._e(),s("form-cleanings",{staticClass:"mt-4",attrs:{form:t.form}}),s("div",{staticClass:"border-b border-gray-200 dark:border-gray-700"},[s("ul",{staticClass:"flex flex-wrap -mb-px text-sm font-medium text-center"},t._l(t.tabsList,function(r,i){return s("li",{key:i+1,staticClass:"mr-6"},[s("router-link",{staticClass:"hover:no-underline inline-block py-4 rounded-t-lg border-b-2 text-gray-500 hover:text-gray-600",attrs:{to:{name:r.route},"active-class":"text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"}},[t._v(t._s(r.name))])],1)}),0)])],1)])]),s("div",{staticClass:"flex bg-white"},[s("div",{staticClass:"w-full md:w-4/5 lg:w-3/5 md:mx-auto md:max-w-4xl px-4"},[s("div",{staticClass:"py-4"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view",{attrs:{form:t.form}})],1)],1)])])]:t.loading?s("div",{staticClass:"text-center w-full p-5"},[s("loader",{staticClass:"h-6 w-6 mx-auto"})],1):s("div",{staticClass:"text-center w-full p-5"},[t._v(" Form not found. ")])],2)},_=[],x=u(w,h,_,!1,null,null,null,null);const E=x.exports;export{E as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9qcy9wYWdlcy9mb3Jtcy9zaG93L2luZGV4LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy13aGl0ZVwiPlxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggYmctZ3JheS01MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1kOnctNC81IGxnOnctMy81IG1kOm14LWF1dG8gbWQ6bWF4LXctNHhsIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtNCBwYi0wXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwiZ29CYWNrXCIgY2xhc3M9XCJmbGV4IHRleHQtYmx1ZSBtYi0yIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwidy0zIGgtMyB0ZXh0LWJsdWUgbXQtMSBtci0xXCIgdmlld0JveD1cIjAgMCA2IDEwXCIgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUgOUwxIDVMNSAxXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICBHbyBiYWNrXG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJmbGV4LWdyb3cgdGV4dC1ncmF5LTkwMCB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgIHt7IGZvcm0udGl0bGUgfX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZXh0cmEtbWVudSA6Zm9ybT1cImZvcm1cIiAvPlxuXG4gICAgICAgICAgICAgICAgPHYtYnV0dG9uIHRhcmdldD1cIl9ibGFua1wiIDp0bz1cIntuYW1lOidmb3Jtcy5zaG93X3B1YmxpYycsIHBhcmFtczoge3NsdWc6IGZvcm0uc2x1Z319XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiIGNsYXNzPVwibXItMiB0ZXh0LWJsdWUtNjAwIGhpZGRlbiBzbTpibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYtdHJhY2sudmlld19mb3JtX2NsaWNrPVwie2Zvcm1faWQ6Zm9ybS5pZCwgZm9ybV9zbHVnOmZvcm0uc2x1Z31cIj5cbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTYgaC02IGlubGluZSAtbXQtMVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xIDEyQzEgMTIgNSA0IDEyIDRDMTkgNCAyMyAxMiAyMyAxMkMyMyAxMiAxOSAyMCAxMiAyMEM1IDIwIDEgMTIgMSAxMlpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgMTVDMTMuNjU2OSAxNSAxNSAxMy42NTY5IDE1IDEyQzE1IDEwLjM0MzEgMTMuNjU2OSA5IDEyIDlDMTAuMzQzMSA5IDkgMTAuMzQzMSA5IDEyQzkgMTMuNjU2OSAxMC4zNDMxIDE1IDEyIDE1WlwiXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvdi1idXR0b24+XG4gICAgICAgICAgICAgICAgPHYtYnV0dG9uIGNsYXNzPVwidGV4dC13aGl0ZVwiIEBjbGljaz1cIm9wZW5FZGl0XCI+XG4gICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaW5saW5lIG1yLTEgLW10LTFcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMTdcIiB2aWV3Qm94PVwiMCAwIDE4IDE3XCIgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk04Ljk5OTk4IDE1LjY2NjJIMTYuNU0xLjUgMTUuNjY2MkgyLjg5NTQ1QzMuMzAzMSAxNS42NjYyIDMuNTA2OTMgMTUuNjY2MiAzLjY5ODc0IDE1LjYyMDJDMy44Njg4IDE1LjU3OTMgNC4wMzEzOCAxNS41MTIgNC4xODA1IDE1LjQyMDZDNC4zNDg2OSAxNS4zMTc1IDQuNDkyODIgMTUuMTczNCA0Ljc4MTA3IDE0Ljg4NTJMMTUuMjUgNC40MTYyQzE1Ljk0MDQgMy43MjU4NSAxNS45NDA0IDIuNjA2NTYgMTUuMjUgMS45MTYyQzE0LjU1OTcgMS4yMjU4NSAxMy40NDA0IDEuMjI1ODUgMTIuNzUgMS45MTYyTDIuMjgxMDUgMTIuMzg1MkMxLjk5MjggMTIuNjczNCAxLjg0ODY3IDEyLjgxNzUgMS43NDU2IDEyLjk4NTdDMS42NTQyMiAxMy4xMzQ4IDEuNTg2ODggMTMuMjk3NCAxLjU0NjA1IDEzLjQ2NzVDMS41IDEzLjY1OTMgMS41IDEzLjg2MzEgMS41IDE0LjI3MDhWMTUuNjY2MlpcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjEuNjdcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIEVkaXQgZm9ybVxuICAgICAgICAgICAgICAgIDwvdi1idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHItMVwiPnt7IGZvcm0udmlld3NfY291bnQgfX0gdmlld3t7IGZvcm0udmlld3NfY291bnQgPiAwID8gJ3MnIDogJycgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHItMVwiPi0ge3sgZm9ybS5zdWJtaXNzaW9uc19jb3VudCB9fVxuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb257eyBmb3JtLnN1Ym1pc3Npb25zX2NvdW50ID4gMCA/ICdzJyA6ICcnIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+LSBFZGl0ZWQge3sgZm9ybS5sYXN0X2VkaXRlZF9odW1hbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIlsnZHJhZnQnLCdjbG9zZWQnXS5pbmNsdWRlcyhmb3JtLnZpc2liaWxpdHkpIHx8IChmb3JtLnRhZ3MgJiYgZm9ybS50YWdzLmxlbmd0aCA+IDApXCIgY2xhc3M9XCJtdC0yIGZsZXggaXRlbXMtY2VudGVyIGZsZXgtd3JhcCBnYXAtM1wiPlxuICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZm9ybS52aXNpYmlsaXR5PT0nZHJhZnQnXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYmcteWVsbG93LTEwMCBweC0yIHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXllbGxvdy02MDAgcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTUwMC8xMCBkYXJrOnRleHQtd2hpdGUgZGFyazpiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIERyYWZ0IC0gbm90IHB1YmxpY2x5IGFjY2Vzc2libGVcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJmb3JtLnZpc2liaWxpdHk9PSdjbG9zZWQnXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYmcteWVsbG93LTEwMCBweC0yIHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXllbGxvdy02MDAgcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTUwMC8xMCBkYXJrOnRleHQtd2hpdGUgZGFyazpiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIENsb3NlZCAtIHdvbid0IGFjY2VwdCBuZXcgc3VibWlzc2lvbnNcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiB2LWZvcj1cIih0YWcsaSkgaW4gZm9ybS50YWdzXCIgOmtleT1cInRhZ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JheS01MCBweC0yIHB5LTEgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwIHJpbmctMSByaW5nLWluc2V0IHJpbmctZ3JheS01MDAvMTAgZGFyazp0ZXh0LXdoaXRlIGRhcms6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgdGFnIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCB2LWlmPVwiZm9ybS5jbG9zZXNfYXRcIiBjbGFzcz1cInRleHQteWVsbG93LTUwMFwiPlxuICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZm9ybS5pc19jbG9zZWRcIj4gVGhpcyBmb3JtIHN0b3BwZWQgYWNjZXB0aW5nIHN1Ym1pc3Npb25zIG9uIHRoZSAge3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlDbG9zZXNEYXRlXG4gICAgICAgICAgICAgICAgfX0gPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+IFRoaXMgZm9ybSB3aWxsIHN0b3AgYWNjZXB0aW5nIHN1Ym1pc3Npb25zIG9uIHRoZSB7eyBkaXNwbGF5Q2xvc2VzRGF0ZSB9fSA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCB2LWlmPVwiZm9ybS5tYXhfc3VibWlzc2lvbnNfY291bnQgPiAwXCIgY2xhc3M9XCJ0ZXh0LXllbGxvdy01MDBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImZvcm0ubWF4X251bWJlcl9vZl9zdWJtaXNzaW9uc19yZWFjaGVkXCI+IFRoZSBmb3JtIGlzIG5vdyBjbG9zZWQgYmVjYXVzZSBpdCByZWFjaGVkIGl0cyBsaW1pdCBvZiB7e1xuICAgICAgICAgICAgICAgICAgZm9ybS5tYXhfc3VibWlzc2lvbnNfY291bnRcbiAgICAgICAgICAgICAgICB9fSBzdWJtaXNzaW9ucy4gPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+IFRoaXMgZm9ybSB3aWxsIHN0b3AgYWNjZXB0aW5nIHN1Ym1pc3Npb25zIGFmdGVyIHt7IGZvcm0ubWF4X3N1Ym1pc3Npb25zX2NvdW50IH19IHN1Ym1pc3Npb25zLiA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxmb3JtLWNsZWFuaW5ncyBjbGFzcz1cIm10LTRcIiA6Zm9ybT1cImZvcm1cIiAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImZsZXggZmxleC13cmFwIC1tYi1weCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXItNlwiIHYtZm9yPVwiKHRhYiwgaSkgaW4gdGFic0xpc3RcIiA6a2V5PVwiaSsxXCI+XG4gICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiB0YWIucm91dGUgfVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaG92ZXI6bm8tdW5kZXJsaW5lIGlubGluZS1ibG9jayBweS00IHJvdW5kZWQtdC1sZyBib3JkZXItYi0yIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZS1jbGFzcz1cInRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTkwMCBkYXJrOnRleHQtYmx1ZS01MDAgZGFyazpob3Zlcjp0ZXh0LWJsdWUtNTAwIGJvcmRlci1ibHVlLTYwMCBkYXJrOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgPnt7dGFiLm5hbWV9fTwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1kOnctNC81IGxnOnctMy81IG1kOm14LWF1dG8gbWQ6bWF4LXctNHhsIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHktNFwiPlxuICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIiBtb2RlPVwib3V0LWluXCI+XG4gICAgICAgICAgICAgIDxyb3V0ZXItdmlldyA6Zm9ybT1cImZvcm1cIiAvPlxuICAgICAgICAgICAgPC90cmFuc2l0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPGRpdiB2LWVsc2UtaWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciB3LWZ1bGwgcC01XCI+XG4gICAgICA8bG9hZGVyIGNsYXNzPVwiaC02IHctNiBteC1hdXRvXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidGV4dC1jZW50ZXIgdy1mdWxsIHAtNVwiPlxuICAgICAgRm9ybSBub3QgZm91bmQuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBzdG9yZSBmcm9tICd+L3N0b3JlJ1xuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5pbXBvcnQge21hcEdldHRlcnMsIG1hcFN0YXRlfSBmcm9tICd2dWV4J1xuaW1wb3J0IFByb1RhZyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9Qcm9UYWcudnVlJ1xuaW1wb3J0IFZCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbi52dWVcIjtcbmltcG9ydCBFeHRyYU1lbnUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlcy9mb3Jtcy9zaG93L0V4dHJhTWVudS52dWUnXG5pbXBvcnQgU2VvTWV0YSBmcm9tICcuLi8uLi8uLi9taXhpbnMvc2VvLW1ldGEuanMnXG5pbXBvcnQgRm9ybUNsZWFuaW5ncyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BhZ2VzL2Zvcm1zL3Nob3cvRm9ybUNsZWFuaW5ncy52dWUnXG5cbmNvbnN0IGxvYWRGb3JtcyA9IGZ1bmN0aW9uICgpIHtcbiAgc3RvcmUuY29tbWl0KCdvcGVuL2Zvcm1zL3N0YXJ0TG9hZGluZycpXG4gIHN0b3JlLmRpc3BhdGNoKCdvcGVuL3dvcmtzcGFjZXMvbG9hZElmRW1wdHknKS50aGVuKCgpID0+IHtcbiAgICBzdG9yZS5kaXNwYXRjaCgnb3Blbi9mb3Jtcy9sb2FkSWZFbXB0eScsIHN0b3JlLnN0YXRlWydvcGVuL3dvcmtzcGFjZXMnXS5jdXJyZW50SWQpXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Nob3dGb3JtJyxcbiAgY29tcG9uZW50czoge1xuICAgIFZCdXR0b24sXG4gICAgUHJvVGFnLFxuICAgIEV4dHJhTWVudSxcbiAgICBGb3JtQ2xlYW5pbmdzXG4gIH0sXG4gIG1peGluczogW1Nlb01ldGFdLFxuXG4gIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICBsb2FkRm9ybXMoKVxuICAgIG5leHQoKVxuICB9LFxuXG4gIGJlZm9yZVJvdXRlTGVhdmUodG8sIGZyb20sIG5leHQpIHtcbiAgICB0aGlzLndvcmtpbmdGb3JtID0gbnVsbFxuICAgIG5leHQoKVxuICB9LFxuICBtaWRkbGV3YXJlOiAnYXV0aCcsXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWV0YVRpdGxlOiAnSG9tZScsXG4gICAgICB0YWJzTGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1N1Ym1pc3Npb25zJyxcbiAgICAgICAgICByb3V0ZTogJ2Zvcm1zLnNob3cnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQW5hbHl0aWNzJyxcbiAgICAgICAgICByb3V0ZTogJ2Zvcm1zLnNob3cuYW5hbHl0aWNzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1NoYXJlJyxcbiAgICAgICAgICByb3V0ZTogJ2Zvcm1zLnNob3cuc2hhcmUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgIHVzZXI6ICdhdXRoL3VzZXInXG4gICAgfSksXG4gICAgLi4ubWFwU3RhdGUoe1xuICAgICAgZm9ybXNMb2FkaW5nOiBzdGF0ZSA9PiBzdGF0ZVsnb3Blbi9mb3JtcyddLmxvYWRpbmcsXG4gICAgICB3b3Jrc3BhY2VzTG9hZGluZzogc3RhdGUgPT4gc3RhdGVbJ29wZW4vd29ya3NwYWNlcyddLmxvYWRpbmdcbiAgICB9KSxcbiAgICB3b3JraW5nRm9ybToge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbJ29wZW4vd29ya2luZ19mb3JtJ10uY29udGVudFxuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ29wZW4vd29ya2luZ19mb3JtL3NldCcsIHZhbHVlKVxuICAgICAgfVxuICAgIH0sXG4gICAgd29ya3NwYWNlKCkge1xuICAgICAgaWYgKCF0aGlzLmZvcm0pIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snb3Blbi93b3Jrc3BhY2VzL2dldEJ5SWQnXSh0aGlzLmZvcm0ud29ya3NwYWNlX2lkKVxuICAgIH0sXG4gICAgZm9ybSgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydvcGVuL2Zvcm1zL2dldEJ5U2x1ZyddKHRoaXMuJHJvdXRlLnBhcmFtcy5zbHVnKVxuICAgIH0sXG4gICAgZm9ybUVuZHBvaW50OiAoKSA9PiAnL2FwaS9vcGVuL2Zvcm1zL3tpZH0nLFxuICAgIGxvYWRpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3Jtc0xvYWRpbmcgfHwgdGhpcy53b3Jrc3BhY2VzTG9hZGluZ1xuICAgIH0sXG4gICAgZGlzcGxheUNsb3Nlc0RhdGUoKSB7XG4gICAgICBpZiAodGhpcy5mb3JtLmNsb3Nlc19hdCkge1xuICAgICAgICBsZXQgZGF0ZU9iaiA9IG5ldyBEYXRlKHRoaXMuZm9ybS5jbG9zZXNfYXQpXG4gICAgICAgIHJldHVybiBkYXRlT2JqLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArXG4gICAgICAgICAgU3RyaW5nKGRhdGVPYmouZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJykgKyBcIi1cIiArXG4gICAgICAgICAgU3RyaW5nKGRhdGVPYmouZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpICsgXCIgXCIgK1xuICAgICAgICAgIFN0cmluZyhkYXRlT2JqLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsICcwJykgKyBcIjpcIiArXG4gICAgICAgICAgU3RyaW5nKGRhdGVPYmouZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgICB9XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBmb3JtKCkge1xuICAgICAgdGhpcy53b3JraW5nRm9ybSA9IG5ldyBGb3JtKHRoaXMuZm9ybSlcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICB0aGlzLndvcmtpbmdGb3JtID0gbmV3IEZvcm0odGhpcy5mb3JtKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgb3BlbkNyaXNwKCkge1xuICAgICAgd2luZG93LiRjcmlzcC5wdXNoKFsnZG8nLCAnY2hhdDpzaG93J10pXG4gICAgICB3aW5kb3cuJGNyaXNwLnB1c2goWydkbycsICdjaGF0Om9wZW4nXSlcbiAgICB9LFxuICAgIGdvQmFjaygpIHtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaG9tZSd9KVxuICAgIH0sXG4gICAgb3BlbkVkaXQoKSB7XG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2Zvcm1zLmVkaXQnLCBwYXJhbXM6IHtzbHVnOiB0aGlzLmZvcm0uc2x1Z319KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsibG9hZEZvcm1zIiwic3RvcmUiLCJfc2ZjX21haW4iLCJWQnV0dG9uIiwiUHJvVGFnIiwiRXh0cmFNZW51IiwiRm9ybUNsZWFuaW5ncyIsIlNlb01ldGEiLCJ0byIsImZyb20iLCJuZXh0IiwibWFwR2V0dGVycyIsIm1hcFN0YXRlIiwic3RhdGUiLCJ2YWx1ZSIsImRhdGVPYmoiLCJGb3JtIl0sIm1hcHBpbmdzIjoiMlJBZ0lBLE1BQUFBLEVBQUEsVUFBQSxDQUNBQyxFQUFBLE9BQUEseUJBQUEsRUFDQUEsRUFBQSxTQUFBLDZCQUFBLEVBQUEsS0FBQSxJQUFBLENBQ0FBLEVBQUEsU0FBQSx5QkFBQUEsRUFBQSxNQUFBLGlCQUFBLEVBQUEsU0FBQSxDQUNBLENBQUEsQ0FDQSxFQUVBQyxFQUFBLENBQ0EsS0FBQSxXQUNBLFdBQUEsQ0FDQSxRQUFBQyxFQUNBLE9BQUFDLEVBQ0EsVUFBQUMsRUFDQSxjQUFBQyxDQUNBLEVBQ0EsT0FBQSxDQUFBQyxDQUFBLEVBRUEsaUJBQUFDLEVBQUFDLEVBQUFDLEVBQUEsQ0FDQVYsRUFBQSxFQUNBVSxFQUFBLENBQ0EsRUFFQSxpQkFBQUYsRUFBQUMsRUFBQUMsRUFBQSxDQUNBLEtBQUEsWUFBQSxLQUNBQSxFQUFBLENBQ0EsRUFDQSxXQUFBLE9BRUEsTUFBQSxDQUNBLE1BQUEsQ0FDQSxVQUFBLE9BQ0EsU0FBQSxDQUNBLENBQ0EsS0FBQSxjQUNBLE1BQUEsWUFDQSxFQUNBLENBQ0EsS0FBQSxZQUNBLE1BQUEsc0JBQ0EsRUFDQSxDQUNBLEtBQUEsUUFDQSxNQUFBLGtCQUNBLENBQ0EsQ0FDQSxDQUNBLEVBRUEsU0FBQSxDQUNBLEdBQUFDLEVBQUEsQ0FDQSxLQUFBLFdBQ0EsQ0FBQSxFQUNBLEdBQUFDLEVBQUEsQ0FDQSxhQUFBQyxHQUFBQSxFQUFBLFlBQUEsRUFBQSxRQUNBLGtCQUFBQSxHQUFBQSxFQUFBLGlCQUFBLEVBQUEsT0FDQSxDQUFBLEVBQ0EsWUFBQSxDQUNBLEtBQUEsQ0FDQSxPQUFBLEtBQUEsT0FBQSxNQUFBLG1CQUFBLEVBQUEsT0FDQSxFQUNBLElBQUFDLEVBQUEsQ0FDQSxLQUFBLE9BQUEsT0FBQSx3QkFBQUEsQ0FBQSxDQUNBLENBQ0EsRUFDQSxXQUFBLENBQ0EsT0FBQSxLQUFBLEtBQ0EsS0FBQSxPQUFBLFFBQUEseUJBQUEsRUFBQSxLQUFBLEtBQUEsWUFBQSxFQURBLElBRUEsRUFDQSxNQUFBLENBQ0EsT0FBQSxLQUFBLE9BQUEsUUFBQSxzQkFBQSxFQUFBLEtBQUEsT0FBQSxPQUFBLElBQUEsQ0FDQSxFQUNBLGFBQUEsSUFBQSx1QkFDQSxTQUFBLENBQ0EsT0FBQSxLQUFBLGNBQUEsS0FBQSxpQkFDQSxFQUNBLG1CQUFBLENBQ0EsR0FBQSxLQUFBLEtBQUEsVUFBQSxDQUNBLElBQUFDLEVBQUEsSUFBQSxLQUFBLEtBQUEsS0FBQSxTQUFBLEVBQ0EsT0FBQUEsRUFBQSxZQUFBLEVBQUEsSUFDQSxPQUFBQSxFQUFBLFdBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFDQSxPQUFBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFDQSxPQUFBQSxFQUFBLFNBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLEVBQUEsSUFDQSxPQUFBQSxFQUFBLFdBQUEsQ0FBQSxFQUFBLFNBQUEsRUFBQSxHQUFBLENBQ0EsQ0FDQSxNQUFBLEVBQ0EsQ0FDQSxFQUVBLE1BQUEsQ0FDQSxNQUFBLENBQ0EsS0FBQSxZQUFBLElBQUFDLEVBQUEsS0FBQSxJQUFBLENBQ0EsQ0FDQSxFQUVBLFNBQUEsQ0FDQSxLQUFBLE9BQ0EsS0FBQSxZQUFBLElBQUFBLEVBQUEsS0FBQSxJQUFBLEVBRUEsRUFFQSxRQUFBLENBQ0EsV0FBQSxDQUNBLE9BQUEsT0FBQSxLQUFBLENBQUEsS0FBQSxXQUFBLENBQUEsRUFDQSxPQUFBLE9BQUEsS0FBQSxDQUFBLEtBQUEsV0FBQSxDQUFBLENBQ0EsRUFDQSxRQUFBLENBQ0EsS0FBQSxRQUFBLEtBQUEsQ0FBQSxLQUFBLE1BQUEsQ0FBQSxDQUNBLEVBQ0EsVUFBQSxDQUNBLEtBQUEsUUFBQSxLQUFBLENBQUEsS0FBQSxhQUFBLE9BQUEsQ0FBQSxLQUFBLEtBQUEsS0FBQSxJQUFBLENBQUEsQ0FBQSxDQUNBLENBQ0EsQ0FDQSJ9
