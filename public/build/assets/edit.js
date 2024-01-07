var h=Object.defineProperty,c=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var m=(r,e,t)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))g.call(e,t)&&m(r,t,e[t]);if(n)for(var t of n(e))_.call(e,t)&&m(r,t,e[t]);return r},d=(r,e)=>c(r,p(e));import{s as i,d as w,m as y,n as v}from"./app.js";import{B as x}from"./Breadcrumb.js";import{g as u}from"./vform.es.js";const f=function(){i.commit("open/forms/startLoading"),i.dispatch("open/workspaces/loadIfEmpty").then(()=>{i.dispatch("open/forms/load",i.state["open/workspaces"].currentId)})},F={name:"EditForm",components:{Breadcrumb:x},beforeRouteEnter(r,e,t){i.getters["open/forms/getBySlug"](r.params.slug)||f(),i.commit("open/working_form/set",null),t()},beforeRouteLeave(r,e,t){if(this.isDirty())return this.alertConfirm("Changes you made may not be saved. Are you sure want to leave?",()=>{window.onbeforeunload=null,t()},()=>{});t()},middleware:"auth",mixins:[w],data(){return{loading:!1,error:null,formInitialHash:null}},computed:d(l({},y({formsLoading:r=>r["open/forms"].loading})),{updatedForm:{get(){return this.$store.state["open/working_form"].content},set(r){this.$store.commit("open/working_form/set",r)}},form(){return this.$store.getters["open/forms/getBySlug"](this.$route.params.slug)},pageLoaded(){return!this.loading&&this.updatedForm!==null},metaTitle(){return"Edit "+(this.form?this.form.title:"Your Form")}}),watch:{form(){this.updatedForm=new u(this.form)}},created(){},destroyed(){},mounted(){window.onbeforeunload=()=>{if(this.isDirty())return!1},this.closeAlert(),this.form?(this.updatedForm=new u(this.form),this.formInitialHash=this.hashString(JSON.stringify(this.updatedForm.data()))):f(),(!this.updatedForm.notification_settings||Array.isArray(this.updatedForm.notification_settings))&&(this.updatedForm.notification_settings={})},methods:{isDirty(){return!this.loading&&this.formInitialHash&&this.formInitialHash!==this.hashString(JSON.stringify(this.updatedForm.data()))},hashString(r,e=0){let t=3735928559^e,o=1103547991^e;for(let s=0,a;s<r.length;s++)a=r.charCodeAt(s),t=Math.imul(t^a,2654435761),o=Math.imul(o^a,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(o^o>>>13,3266489909),o=Math.imul(o^o>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&o)+(t>>>0)}}};var b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full flex flex-col"},[e.pageLoaded?t("form-editor",{ref:"editor",attrs:{isEdit:!0},on:{"on-save":function(o){e.formInitialHash=null}}}):!e.loading&&e.error?t("div",{staticClass:"mt-4 rounded-lg max-w-xl mx-auto p-6 bg-red-100 text-red-500"},[e._v(" "+e._s(e.error)+" ")]):t("div",{staticClass:"text-center mt-4 py-6"},[t("loader",{staticClass:"h-6 w-6 text-nt-blue mx-auto"})],1)],1)},S=[],C=v(F,b,S,!1,null,null,null,null);const E=C.exports;export{E as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmVzb3VyY2VzL2pzL3BhZ2VzL2Zvcm1zL2VkaXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInctZnVsbCBmbGV4IGZsZXgtY29sXCI+XG4gICAgPGZvcm0tZWRpdG9yIHYtaWY9XCJwYWdlTG9hZGVkXCIgcmVmPVwiZWRpdG9yXCJcbiAgICAgICAgICAgICAgICAgOmlzRWRpdD1cInRydWVcIlxuICAgICAgICAgICAgICAgICBAb24tc2F2ZT1cImZvcm1Jbml0aWFsSGFzaD1udWxsXCJcbiAgICAvPlxuICAgIDxkaXYgdi1lbHNlLWlmPVwiIWxvYWRpbmcgJiYgZXJyb3JcIiBjbGFzcz1cIm10LTQgcm91bmRlZC1sZyBtYXgtdy14bCBteC1hdXRvIHAtNiBiZy1yZWQtMTAwIHRleHQtcmVkLTUwMFwiPlxuICAgICAge3sgZXJyb3IgfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgcHktNlwiPlxuICAgICAgPGxvYWRlciBjbGFzcz1cImgtNiB3LTYgdGV4dC1udC1ibHVlIG14LWF1dG9cIiAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgc3RvcmUgZnJvbSAnfi9zdG9yZSdcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0JyZWFkY3J1bWIudnVlJ1xuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgU2VvTWV0YSBmcm9tICcuLi8uLi9taXhpbnMvc2VvLW1ldGEuanMnXG5cbmNvbnN0IGxvYWRGb3JtcyA9IGZ1bmN0aW9uICgpIHtcbiAgc3RvcmUuY29tbWl0KCdvcGVuL2Zvcm1zL3N0YXJ0TG9hZGluZycpXG4gIHN0b3JlLmRpc3BhdGNoKCdvcGVuL3dvcmtzcGFjZXMvbG9hZElmRW1wdHknKS50aGVuKCgpID0+IHtcbiAgICBzdG9yZS5kaXNwYXRjaCgnb3Blbi9mb3Jtcy9sb2FkJywgc3RvcmUuc3RhdGVbJ29wZW4vd29ya3NwYWNlcyddLmN1cnJlbnRJZClcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRWRpdEZvcm0nLFxuICBjb21wb25lbnRzOiB7IEJyZWFkY3J1bWIgfSxcblxuICBiZWZvcmVSb3V0ZUVudGVyICh0bywgZnJvbSwgbmV4dCkge1xuICAgIGlmICghc3RvcmUuZ2V0dGVyc1snb3Blbi9mb3Jtcy9nZXRCeVNsdWcnXSh0by5wYXJhbXMuc2x1ZykpIHtcbiAgICAgIGxvYWRGb3JtcygpXG4gICAgfVxuICAgIHN0b3JlLmNvbW1pdCgnb3Blbi93b3JraW5nX2Zvcm0vc2V0JywgbnVsbCkgLy8gUmVzZXQgb2xkIHdvcmtpbmcgZm9ybVxuICAgIG5leHQoKVxuICB9LFxuXG4gIGJlZm9yZVJvdXRlTGVhdmUgKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgaWYgKHRoaXMuaXNEaXJ0eSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGVydENvbmZpcm0oJ0NoYW5nZXMgeW91IG1hZGUgbWF5IG5vdCBiZSBzYXZlZC4gQXJlIHlvdSBzdXJlIHdhbnQgdG8gbGVhdmU/JywgKCkgPT4ge1xuICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsXG4gICAgICAgIG5leHQoKVxuICAgICAgfSwgKCkgPT4ge30pXG4gICAgfVxuICAgIG5leHQoKVxuICB9LFxuXG4gIG1pZGRsZXdhcmU6ICdhdXRoJyxcbiAgbWl4aW5zOiBbU2VvTWV0YV0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBmb3JtSW5pdGlhbEhhc2g6IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBTdGF0ZSh7XG4gICAgICBmb3Jtc0xvYWRpbmc6IHN0YXRlID0+IHN0YXRlWydvcGVuL2Zvcm1zJ10ubG9hZGluZ1xuICAgIH0pLFxuICAgIHVwZGF0ZWRGb3JtOiB7XG4gICAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGVbJ29wZW4vd29ya2luZ19mb3JtJ10uY29udGVudFxuICAgICAgfSxcbiAgICAgIC8qIFdlIGFkZCBhIHNldHRlciAqL1xuICAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ29wZW4vd29ya2luZ19mb3JtL3NldCcsIHZhbHVlKVxuICAgICAgfVxuICAgIH0sXG4gICAgZm9ybSAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snb3Blbi9mb3Jtcy9nZXRCeVNsdWcnXSh0aGlzLiRyb3V0ZS5wYXJhbXMuc2x1ZylcbiAgICB9LFxuICAgIHBhZ2VMb2FkZWQgKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmxvYWRpbmcgJiYgdGhpcy51cGRhdGVkRm9ybSAhPT0gbnVsbFxuICAgIH0sXG4gICAgbWV0YVRpdGxlICgpIHtcbiAgICAgIHJldHVybiAnRWRpdCAnICsgKHRoaXMuZm9ybSA/IHRoaXMuZm9ybS50aXRsZSA6ICdZb3VyIEZvcm0nKVxuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBmb3JtICgpIHtcbiAgICAgIHRoaXMudXBkYXRlZEZvcm0gPSBuZXcgRm9ybSh0aGlzLmZvcm0pXG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge30sXG4gIGRlc3Ryb3llZCAoKSB7fSxcblxuICBtb3VudGVkICgpIHtcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0RpcnR5KCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZUFsZXJ0KClcbiAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgbG9hZEZvcm1zKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVkRm9ybSA9IG5ldyBGb3JtKHRoaXMuZm9ybSlcbiAgICAgIHRoaXMuZm9ybUluaXRpYWxIYXNoID0gdGhpcy5oYXNoU3RyaW5nKEpTT04uc3RyaW5naWZ5KHRoaXMudXBkYXRlZEZvcm0uZGF0YSgpKSlcbiAgICB9XG5cbiAgICBpZighdGhpcy51cGRhdGVkRm9ybS5ub3RpZmljYXRpb25fc2V0dGluZ3MgfHwgQXJyYXkuaXNBcnJheSh0aGlzLnVwZGF0ZWRGb3JtLm5vdGlmaWNhdGlvbl9zZXR0aW5ncykpe1xuICAgICAgdGhpcy51cGRhdGVkRm9ybS5ub3RpZmljYXRpb25fc2V0dGluZ3MgPSB7fVxuICAgIH1cbiAgfSxcbiAgXG4gIG1ldGhvZHM6IHtcbiAgICBpc0RpcnR5ICgpIHtcbiAgICAgIHJldHVybiAhdGhpcy5sb2FkaW5nICYmIHRoaXMuZm9ybUluaXRpYWxIYXNoICYmIHRoaXMuZm9ybUluaXRpYWxIYXNoICE9PSB0aGlzLmhhc2hTdHJpbmcoSlNPTi5zdHJpbmdpZnkodGhpcy51cGRhdGVkRm9ybS5kYXRhKCkpKVxuICAgIH0sXG4gICAgaGFzaFN0cmluZyAoc3RyLCBzZWVkID0gMCkge1xuICAgICAgbGV0IGgxID0gMHhkZWFkYmVlZiBeIHNlZWRcbiAgICAgIGxldCBoMiA9IDB4NDFjNmNlNTcgXiBzZWVkXG4gICAgICBmb3IgKGxldCBpID0gMCwgY2g7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2ggPSBzdHIuY2hhckNvZGVBdChpKVxuICAgICAgICBoMSA9IE1hdGguaW11bChoMSBeIGNoLCAyNjU0NDM1NzYxKVxuICAgICAgICBoMiA9IE1hdGguaW11bChoMiBeIGNoLCAxNTk3MzM0Njc3KVxuICAgICAgfVxuICAgICAgaDEgPSBNYXRoLmltdWwoaDEgXiAoaDEgPj4+IDE2KSwgMjI0NjgyMjUwNykgXiBNYXRoLmltdWwoaDIgXiAoaDIgPj4+IDEzKSwgMzI2NjQ4OTkwOSlcbiAgICAgIGgyID0gTWF0aC5pbXVsKGgyIF4gKGgyID4+PiAxNiksIDIyNDY4MjI1MDcpIF4gTWF0aC5pbXVsKGgxIF4gKGgxID4+PiAxMyksIDMyNjY0ODk5MDkpXG4gICAgICByZXR1cm4gNDI5NDk2NzI5NiAqICgyMDk3MTUxICYgaDIpICsgKGgxID4+PiAwKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsibG9hZEZvcm1zIiwic3RvcmUiLCJfc2ZjX21haW4iLCJCcmVhZGNydW1iIiwidG8iLCJmcm9tIiwibmV4dCIsIlNlb01ldGEiLCJfX3NwcmVhZFByb3BzIiwiX19zcHJlYWRWYWx1ZXMiLCJtYXBTdGF0ZSIsInN0YXRlIiwidmFsdWUiLCJGb3JtIiwic3RyIiwic2VlZCIsImgxIiwiaDIiLCJpIiwiY2giXSwibWFwcGluZ3MiOiJxaUJBdUJBLE1BQUFBLEVBQUEsVUFBQSxDQUNBQyxFQUFBLE9BQUEseUJBQUEsRUFDQUEsRUFBQSxTQUFBLDZCQUFBLEVBQUEsS0FBQSxJQUFBLENBQ0FBLEVBQUEsU0FBQSxrQkFBQUEsRUFBQSxNQUFBLGlCQUFBLEVBQUEsU0FBQSxDQUNBLENBQUEsQ0FDQSxFQUVBQyxFQUFBLENBQ0EsS0FBQSxXQUNBLFdBQUEsQ0FBQSxXQUFBQyxDQUFBLEVBRUEsaUJBQUFDLEVBQUFDLEVBQUFDLEVBQUEsQ0FDQUwsRUFBQSxRQUFBLHNCQUFBLEVBQUFHLEVBQUEsT0FBQSxJQUFBLEdBQ0FKLEVBQUEsRUFFQUMsRUFBQSxPQUFBLHdCQUFBLElBQUEsRUFDQUssRUFBQSxDQUNBLEVBRUEsaUJBQUFGLEVBQUFDLEVBQUFDLEVBQUEsQ0FDQSxHQUFBLEtBQUEsVUFDQSxPQUFBLEtBQUEsYUFBQSxpRUFBQSxJQUFBLENBQ0EsT0FBQSxlQUFBLEtBQ0FBLEVBQUEsQ0FDQSxFQUFBLElBQUEsQ0FBQSxDQUFBLEVBRUFBLEVBQUEsQ0FDQSxFQUVBLFdBQUEsT0FDQSxPQUFBLENBQUFDLENBQUEsRUFFQSxNQUFBLENBQ0EsTUFBQSxDQUNBLFFBQUEsR0FDQSxNQUFBLEtBQ0EsZ0JBQUEsSUFDQSxDQUNBLEVBRUEsU0FBQUMsRUFBQUMsRUFBQSxHQUNBQyxFQUFBLENBQ0EsYUFBQUMsR0FBQUEsRUFBQSxZQUFBLEVBQUEsT0FDQSxDQUFBLEdBSEEsQ0FJQSxZQUFBLENBQ0EsS0FBQSxDQUNBLE9BQUEsS0FBQSxPQUFBLE1BQUEsbUJBQUEsRUFBQSxPQUNBLEVBRUEsSUFBQUMsRUFBQSxDQUNBLEtBQUEsT0FBQSxPQUFBLHdCQUFBQSxDQUFBLENBQ0EsQ0FDQSxFQUNBLE1BQUEsQ0FDQSxPQUFBLEtBQUEsT0FBQSxRQUFBLHNCQUFBLEVBQUEsS0FBQSxPQUFBLE9BQUEsSUFBQSxDQUNBLEVBQ0EsWUFBQSxDQUNBLE1BQUEsQ0FBQSxLQUFBLFNBQUEsS0FBQSxjQUFBLElBQ0EsRUFDQSxXQUFBLENBQ0EsTUFBQSxTQUFBLEtBQUEsS0FBQSxLQUFBLEtBQUEsTUFBQSxZQUNBLENBQ0EsR0FFQSxNQUFBLENBQ0EsTUFBQSxDQUNBLEtBQUEsWUFBQSxJQUFBQyxFQUFBLEtBQUEsSUFBQSxDQUNBLENBQ0EsRUFFQSxTQUFBLENBQUEsRUFDQSxXQUFBLENBQUEsRUFFQSxTQUFBLENBQ0EsT0FBQSxlQUFBLElBQUEsQ0FDQSxHQUFBLEtBQUEsVUFDQSxNQUFBLEVBRUEsRUFFQSxLQUFBLFdBQUEsRUFDQSxLQUFBLE1BR0EsS0FBQSxZQUFBLElBQUFBLEVBQUEsS0FBQSxJQUFBLEVBQ0EsS0FBQSxnQkFBQSxLQUFBLFdBQUEsS0FBQSxVQUFBLEtBQUEsWUFBQSxLQUFBLENBQUEsQ0FBQSxHQUhBYixFQUFBLEdBTUEsQ0FBQSxLQUFBLFlBQUEsdUJBQUEsTUFBQSxRQUFBLEtBQUEsWUFBQSxxQkFBQSxLQUNBLEtBQUEsWUFBQSxzQkFBQSxDQUFBLEVBRUEsRUFFQSxRQUFBLENBQ0EsU0FBQSxDQUNBLE1BQUEsQ0FBQSxLQUFBLFNBQUEsS0FBQSxpQkFBQSxLQUFBLGtCQUFBLEtBQUEsV0FBQSxLQUFBLFVBQUEsS0FBQSxZQUFBLEtBQUEsQ0FBQSxDQUFBLENBQ0EsRUFDQSxXQUFBYyxFQUFBQyxFQUFBLEVBQUEsQ0FDQSxJQUFBQyxFQUFBLFdBQUFELEVBQ0FFLEVBQUEsV0FBQUYsRUFDQSxRQUFBRyxFQUFBLEVBQUFDLEVBQUFELEVBQUFKLEVBQUEsT0FBQUksSUFDQUMsRUFBQUwsRUFBQSxXQUFBSSxDQUFBLEVBQ0FGLEVBQUEsS0FBQSxLQUFBQSxFQUFBRyxFQUFBLFVBQUEsRUFDQUYsRUFBQSxLQUFBLEtBQUFBLEVBQUFFLEVBQUEsVUFBQSxFQUVBLE9BQUFILEVBQUEsS0FBQSxLQUFBQSxFQUFBQSxJQUFBLEdBQUEsVUFBQSxFQUFBLEtBQUEsS0FBQUMsRUFBQUEsSUFBQSxHQUFBLFVBQUEsRUFDQUEsRUFBQSxLQUFBLEtBQUFBLEVBQUFBLElBQUEsR0FBQSxVQUFBLEVBQUEsS0FBQSxLQUFBRCxFQUFBQSxJQUFBLEdBQUEsVUFBQSxFQUNBLFlBQUEsUUFBQUMsSUFBQUQsSUFBQSxFQUNBLENBQ0EsQ0FDQSJ9