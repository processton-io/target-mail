import{V as a,C as l}from"./Collapse.js";import{n as o,V as i}from"./app.js";const c={name:"FormCleanings",components:{VTransition:a,VButton:i,Collapse:l},props:{form:{type:Object,required:!0},specifyFormOwner:{type:Boolean,default:!1},hideable:{type:Boolean,default:!1}},data(){return{collapseOpened:!1,hideWarning:!1}},computed:{hasCleanings(){return this.form.cleanings&&Object.keys(this.form.cleanings).length>0},cleanings(){return this.form.cleanings},cleaningContent(){let r="";return Object.keys(this.cleanings).forEach(e=>{let t=e.charAt(0).toUpperCase()+e.slice(1);t!=="Form"&&(t='"'+t+'" field');let s='<span class="font-semibold">'+t+"</span><br/><ul class='list-disc list-inside'>";this.cleanings[e].forEach(n=>{s=s+"<li>"+n+"</li>"}),s&&(r=r+s+"<ul/><br/>")}),r}},watch:{},mounted(){},methods:{openCrisp(){this.$crisp.push(["do","chat:show"]),this.$crisp.push(["do","chat:open"])}}};var p=function(){var e=this,t=e._self._c;return t("v-transition",[e.hasCleanings&&!e.hideWarning?t("div",{staticClass:"border border-gray-300 dark:border-gray-600 rounded-md bg-white p-2",class:{"hover:bg-yellow-50 dark:hover:bg-yellow-900":!e.collapseOpened}},[t("collapse",{scopedSlots:e._u([{key:"title",fn:function(){return[t("p",{staticClass:"text-yellow-500 dark:text-yellow-400 font-semibold text-sm p-1 pr-4"},[t("svg",{staticClass:"w-6 h-6 inline",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}})]),e._v(" Some features that are included in our "+e._s(e.form.is_pro?"Enterprise":"Pro")+" plan are disabled when publicly sharing this form"),e.specifyFormOwner?t("span",[e._v(" (only owners of this form can see this)")]):e._e(),e._v(". ")])]},proxy:!0}],null,!1,2085333108),model:{value:e.collapseOpened,callback:function(s){e.collapseOpened=s},expression:"collapseOpened"}},[t("div",{staticClass:"border-t mt-1 p-4 pb-2 -mx-2"},[t("p",{staticClass:"text-gray-500 text-sm",domProps:{innerHTML:e._s(e.cleaningContent)}}),t("p",{staticClass:"text-gray-500 text-sm mb-4 font-semibold"},[t("router-link",{attrs:{to:{name:"pricing"}}},[e._v(" "+e._s(e.form.is_pro?"Upgrade your s plan today":"Start your free s trial")+" ")]),e._v(" to unlock all of our features and build powerful forms. ")],1),t("div",{staticClass:"flex flex-wrap items-end w-full"},[t("div",{staticClass:"flex-grow flex pr-2"},[t("v-button",{directives:[{name:"track",rawName:"v-track.upgrade_from_form_cleanings_click",modifiers:{upgrade_from_form_cleanings_click:!0}}],staticClass:"inline-block",attrs:{size:"small",to:{name:"pricing"}}},[e._v(" "+e._s(e.form.is_pro?"Upgrade plan":"Start free trial")+" "),t("svg",{staticClass:"w-4 h-4 inline -mt-[2px]",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}})])]),t("v-button",{staticClass:"ml-2",attrs:{color:"white",size:"small"},on:{click:function(s){return s.preventDefault(),e.openCrisp.apply(null,arguments)}}},[e._v(" Contact us ")])],1),e.hideable?t("v-button",{staticClass:"mt-2",attrs:{color:"white",size:"small"},on:{click:function(s){s.preventDefault(),e.hideWarning=!0}}},[e._v(" Hide warning ")]):e._e()],1)])])],1):e._e()])},d=[],m=o(c,p,d,!1,null,null,null,null);const h=m.exports;export{h as F};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUNsZWFuaW5ncy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvcGFnZXMvZm9ybXMvc2hvdy9Gb3JtQ2xlYW5pbmdzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LXRyYW5zaXRpb24+XG4gICAgPGRpdiB2LWlmPVwiaGFzQ2xlYW5pbmdzICYmICFoaWRlV2FybmluZ1wiIGNsYXNzPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCByb3VuZGVkLW1kIGJnLXdoaXRlIHAtMlwiXG4gICAgICAgICA6Y2xhc3M9XCJ7J2hvdmVyOmJnLXllbGxvdy01MCBkYXJrOmhvdmVyOmJnLXllbGxvdy05MDAnOiFjb2xsYXBzZU9wZW5lZH1cIlxuICAgID5cbiAgICAgIDxjb2xsYXBzZSB2LW1vZGVsPVwiY29sbGFwc2VPcGVuZWRcIj5cbiAgICAgICAgPHRlbXBsYXRlICN0aXRsZT5cbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQteWVsbG93LTUwMCBkYXJrOnRleHQteWVsbG93LTQwMCBmb250LXNlbWlib2xkIHRleHQtc20gcC0xIHByLTRcIj5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy02IGgtNiBpbmxpbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDl2My43NW0tOS4zMDMgMy4zNzZjLS44NjYgMS41LjIxNyAzLjM3NCAxLjk0OCAzLjM3NGgxNC43MWMxLjczIDAgMi44MTMtMS44NzQgMS45NDgtMy4zNzRMMTMuOTQ5IDMuMzc4Yy0uODY2LTEuNS0zLjAzMi0xLjUtMy44OTggMEwyLjY5NyAxNi4xMjZ6TTEyIDE1Ljc1aC4wMDd2LjAwOEgxMnYtLjAwOHpcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICBTb21lIGZlYXR1cmVzIHRoYXQgYXJlIGluY2x1ZGVkIGluIG91ciB7eyBmb3JtLmlzX3BybyA/ICdFbnRlcnByaXNlJyA6ICdQcm8nIH19IHBsYW4gYXJlIGRpc2FibGVkIHdoZW5cbiAgICAgICAgICAgIHB1YmxpY2x5IHNoYXJpbmcgdGhpcyBmb3JtPHNwYW4gdi1pZj1cInNwZWNpZnlGb3JtT3duZXJcIj4gKG9ubHkgb3duZXJzIG9mIHRoaXMgZm9ybSBjYW4gc2VlIHRoaXMpPC9zcGFuPi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlci10IG10LTEgcC00IHBiLTIgLW14LTJcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS01MDAgdGV4dC1zbVwiIHYtaHRtbD1cImNsZWFuaW5nQ29udGVudFwiIC8+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc20gbWItNCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwie25hbWU6J3ByaWNpbmcnfVwiPlxuICAgICAgICAgICAgICB7eyBmb3JtLmlzX3BybyA/ICdVcGdyYWRlIHlvdXIgcyBwbGFuIHRvZGF5JyA6ICdTdGFydCB5b3VyIGZyZWUgcyB0cmlhbCcgfX1cbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICB0byB1bmxvY2sgYWxsIG9mIG91ciBmZWF0dXJlcyBhbmQgYnVpbGQgcG93ZXJmdWwgZm9ybXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1lbmQgdy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93IGZsZXggcHItMlwiPlxuICAgICAgICAgICAgICA8di1idXR0b24gdi10cmFjay51cGdyYWRlX2Zyb21fZm9ybV9jbGVhbmluZ3NfY2xpY2sgc2l6ZT1cInNtYWxsXCIgY2xhc3M9XCJpbmxpbmUtYmxvY2tcIiA6dG89XCJ7bmFtZToncHJpY2luZyd9XCI+XG4gICAgICAgICAgICAgICAge3sgZm9ybS5pc19wcm8gPyAnVXBncmFkZSBwbGFuJyA6ICdTdGFydCBmcmVlIHRyaWFsJyB9fVxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cInctNCBoLTQgaW5saW5lIC1tdC1bMnB4XVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMy41IDQuNUwyMSAxMm0wIDBsLTcuNSA3LjVNMjEgMTJIM1wiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvdi1idXR0b24+XG4gICAgICAgICAgICAgIDx2LWJ1dHRvbiBjb2xvcj1cIndoaXRlXCIgc2l6ZT1cInNtYWxsXCIgY2xhc3M9XCJtbC0yXCIgQGNsaWNrLnByZXZlbnQ9XCJvcGVuQ3Jpc3BcIj5cbiAgICAgICAgICAgICAgICBDb250YWN0IHVzXG4gICAgICAgICAgICAgIDwvdi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx2LWJ1dHRvbiB2LWlmPVwiaGlkZWFibGVcIiBjb2xvcj1cIndoaXRlXCIgc2l6ZT1cInNtYWxsXCIgY2xhc3M9XCJtdC0yXCIgQGNsaWNrLnByZXZlbnQ9XCJoaWRlV2FybmluZz10cnVlXCI+XG4gICAgICAgICAgICAgIEhpZGUgd2FybmluZ1xuICAgICAgICAgICAgPC92LWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2NvbGxhcHNlPlxuICAgIDwvZGl2PlxuICA8L3YtdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi4vLi4vLi4vY29tbW9uL0NvbGxhcHNlLnZ1ZSdcbmltcG9ydCBWQnV0dG9uIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9CdXR0b24udnVlJ1xuaW1wb3J0IFZUcmFuc2l0aW9uIGZyb20gJy4uLy4uLy4uL2NvbW1vbi90cmFuc2l0aW9ucy9WVHJhbnNpdGlvbi52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0Zvcm1DbGVhbmluZ3MnLFxuICBjb21wb25lbnRzOiB7IFZUcmFuc2l0aW9uLCBWQnV0dG9uLCBDb2xsYXBzZSB9LFxuICBwcm9wczoge1xuICAgIGZvcm06IHsgdHlwZTogT2JqZWN0LCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHNwZWNpZnlGb3JtT3duZXI6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgICBoaWRlYWJsZTogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xsYXBzZU9wZW5lZDogZmFsc2UsXG4gICAgICBoaWRlV2FybmluZzogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzQ2xlYW5pbmdzICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uY2xlYW5pbmdzICYmIE9iamVjdC5rZXlzKHRoaXMuZm9ybS5jbGVhbmluZ3MpLmxlbmd0aCA+IDBcbiAgICB9LFxuICAgIGNsZWFuaW5ncyAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtLmNsZWFuaW5nc1xuICAgIH0sXG4gICAgY2xlYW5pbmdDb250ZW50ICgpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gJydcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2xlYW5pbmdzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgbGV0IGZpZWxkTmFtZSA9IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKVxuICAgICAgICBpZiAoZmllbGROYW1lICE9PSAnRm9ybScpIHtcbiAgICAgICAgICBmaWVsZE5hbWUgPSAnXCInICsgZmllbGROYW1lICsgJ1wiIGZpZWxkJ1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaWVsZEluZm8gPSAnPHNwYW4gY2xhc3M9XCJmb250LXNlbWlib2xkXCI+JyArIGZpZWxkTmFtZSArICc8L3NwYW4+PGJyLz48dWwgY2xhc3M9XFwnbGlzdC1kaXNjIGxpc3QtaW5zaWRlXFwnPidcbiAgICAgICAgdGhpcy5jbGVhbmluZ3Nba2V5XS5mb3JFYWNoKChtc2cpID0+IHtcbiAgICAgICAgICBmaWVsZEluZm8gPSBmaWVsZEluZm8gKyAnPGxpPicgKyBtc2cgKyAnPC9saT4nXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChmaWVsZEluZm8pIHtcbiAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZSArIGZpZWxkSW5mbyArICc8dWwvPjxici8+J1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIG1lc3NhZ2VcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7fSxcbiAgbW91bnRlZCAoKSB7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuQ3Jpc3AgKCkge1xuICAgICAgdGhpcy4kY3Jpc3AucHVzaChbJ2RvJywgJ2NoYXQ6c2hvdyddKVxuICAgICAgdGhpcy4kY3Jpc3AucHVzaChbJ2RvJywgJ2NoYXQ6b3BlbiddKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX3NmY19tYWluIiwiVlRyYW5zaXRpb24iLCJWQnV0dG9uIiwiQ29sbGFwc2UiLCJtZXNzYWdlIiwia2V5IiwiZmllbGROYW1lIiwiZmllbGRJbmZvIiwibXNnIl0sIm1hcHBpbmdzIjoiNkVBeURBLE1BQUFBLEVBQUEsQ0FDQSxLQUFBLGdCQUNBLFdBQUEsQ0FBQSxZQUFBQyxFQUFBLFFBQUFDLEVBQUEsU0FBQUMsQ0FBQSxFQUNBLE1BQUEsQ0FDQSxLQUFBLENBQUEsS0FBQSxPQUFBLFNBQUEsRUFBQSxFQUNBLGlCQUFBLENBQUEsS0FBQSxRQUFBLFFBQUEsRUFBQSxFQUNBLFNBQUEsQ0FBQSxLQUFBLFFBQUEsUUFBQSxFQUFBLENBQ0EsRUFDQSxNQUFBLENBQ0EsTUFBQSxDQUNBLGVBQUEsR0FDQSxZQUFBLEVBQ0EsQ0FDQSxFQUNBLFNBQUEsQ0FDQSxjQUFBLENBQ0EsT0FBQSxLQUFBLEtBQUEsV0FBQSxPQUFBLEtBQUEsS0FBQSxLQUFBLFNBQUEsRUFBQSxPQUFBLENBQ0EsRUFDQSxXQUFBLENBQ0EsT0FBQSxLQUFBLEtBQUEsU0FDQSxFQUNBLGlCQUFBLENBQ0EsSUFBQUMsRUFBQSxHQUNBLGNBQUEsS0FBQSxLQUFBLFNBQUEsRUFBQSxRQUFBQyxHQUFBLENBQ0EsSUFBQUMsRUFBQUQsRUFBQSxPQUFBLENBQUEsRUFBQSxjQUFBQSxFQUFBLE1BQUEsQ0FBQSxFQUNBQyxJQUFBLFNBQ0FBLEVBQUEsSUFBQUEsRUFBQSxXQUVBLElBQUFDLEVBQUEsK0JBQUFELEVBQUEsaURBQ0EsS0FBQSxVQUFBRCxDQUFBLEVBQUEsUUFBQUcsR0FBQSxDQUNBRCxFQUFBQSxFQUFBLE9BQUFDLEVBQUEsT0FDQSxDQUFBLEVBQ0FELElBQ0FILEVBQUFBLEVBQUFHLEVBQUEsYUFFQSxDQUFBLEVBQ0FILENBQ0EsQ0FDQSxFQUNBLE1BQUEsQ0FBQSxFQUNBLFNBQUEsQ0FDQSxFQUNBLFFBQUEsQ0FDQSxXQUFBLENBQ0EsS0FBQSxPQUFBLEtBQUEsQ0FBQSxLQUFBLFdBQUEsQ0FBQSxFQUNBLEtBQUEsT0FBQSxLQUFBLENBQUEsS0FBQSxXQUFBLENBQUEsQ0FDQSxDQUNBLENBQ0EifQ==
