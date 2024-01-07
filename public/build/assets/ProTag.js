import{M as a,b as o,n as r}from"./app.js";import{P as n}from"./PricingTable.js";const i={name:"ProTag",components:{PricingTable:n,Modal:a},props:{},data(){return{showPremiumModal:!1,checkoutLoading:!1}},computed:{...o({user:"auth/user",currentWorkSpace:"open/workspaces/getCurrent"}),shouldDisplayProTag(){return window.config.paid_plans_enabled?!this.user||!this.currentWorkSpace?!0:!this.currentWorkSpace.is_pro:!1}},mounted(){},methods:{openChat(){window.$crisp.push(["do","chat:show"]),window.$crisp.push(["do","chat:open"])}}};var u=function(){var e=this,t=e._self._c;return e.shouldDisplayProTag?t("div",{staticClass:"inline"},[t("div",{staticClass:"bg-nt-blue text-white px-2 text-xs uppercase inline rounded-full font-semibold cursor-pointer",on:{click:function(s){s.preventDefault(),e.showPremiumModal=!0}}},[e._v(" PRO ")]),t("modal",{attrs:{show:e.showPremiumModal},on:{close:function(s){e.showPremiumModal=!1}}},[t("h2",{staticClass:"text-nt-blue"},[e._v(" PRO ")]),e.user&&e.user.is_subscribed?t("h4",{staticClass:"text-center mt-5"},[e._v(" We're happy to have you as a Pro customer. If you're having any issue with , or if you have a feature request, please "),t("a",{attrs:{href:"mailto:contact@opnform.com"}},[e._v("contact us")]),e._v(". ")]):e._e(),!e.user||!e.user.is_subscribed?t("div",{staticClass:"mt-4"},[t("p",[e._v(" All the features with a"),t("span",{staticClass:"bg-nt-blue text-white px-2 text-xs uppercase inline rounded-full font-semibold mx-1"},[e._v(" PRO ")]),e._v(" tag are available in the Pro plan of . "),t("b",[e._v("You can play around and try all Pro features within the form editor, but you can't use them in your real forms")]),e._v(". You can subscribe now to gain unlimited access to all our pro features! ")])]):e._e(),t("div",{staticClass:"my-4 text-center"},[t("v-button",{attrs:{color:"white"},on:{click:function(s){e.showPremiumModal=!1}}},[e._v(" Close ")])],1)])],1):e._e()},l=[],c=r(i,u,l,!1,null,null,null,null);const h=c.exports;export{h as P};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvVGFnLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jb21tb24vUHJvVGFnLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJpbmxpbmVcIiB2LWlmPVwic2hvdWxkRGlzcGxheVByb1RhZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJiZy1udC1ibHVlIHRleHQtd2hpdGUgcHgtMiB0ZXh0LXhzIHVwcGVyY2FzZSBpbmxpbmUgcm91bmRlZC1mdWxsIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJzaG93UHJlbWl1bU1vZGFsPXRydWVcIlxuICAgID5cbiAgICAgIFBST1xuICAgIDwvZGl2PlxuICAgIDxtb2RhbCA6c2hvdz1cInNob3dQcmVtaXVtTW9kYWxcIiBAY2xvc2U9XCJzaG93UHJlbWl1bU1vZGFsPWZhbHNlXCI+XG4gICAgICA8aDIgY2xhc3M9XCJ0ZXh0LW50LWJsdWVcIj5cbiAgICAgICAgIFBST1xuICAgICAgPC9oMj5cbiAgICAgIDxoNCB2LWlmPVwidXNlciAmJiB1c2VyLmlzX3N1YnNjcmliZWRcIiBjbGFzcz1cInRleHQtY2VudGVyIG10LTVcIj5cbiAgICAgICAgV2UncmUgaGFwcHkgdG8gaGF2ZSB5b3UgYXMgYSBQcm8gY3VzdG9tZXIuIElmIHlvdSdyZSBoYXZpbmcgYW55IGlzc3VlIHdpdGggLCBvciBpZiB5b3UgaGF2ZSBhXG4gICAgICAgIGZlYXR1cmUgcmVxdWVzdCwgcGxlYXNlIDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdEBvcG5mb3JtLmNvbVwiPmNvbnRhY3QgdXM8L2E+LlxuICAgICAgPC9oND5cbiAgICAgIDxkaXYgdi1pZj1cIiF1c2VyIHx8ICF1c2VyLmlzX3N1YnNjcmliZWRcIiBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWxsIHRoZSBmZWF0dXJlcyB3aXRoIGE8c3BhblxuICAgICAgICAgIGNsYXNzPVwiYmctbnQtYmx1ZSB0ZXh0LXdoaXRlIHB4LTIgdGV4dC14cyB1cHBlcmNhc2UgaW5saW5lIHJvdW5kZWQtZnVsbCBmb250LXNlbWlib2xkIG14LTFcIlxuICAgICAgICA+XG4gICAgICAgICAgUFJPXG4gICAgICAgIDwvc3Bhbj4gdGFnIGFyZSBhdmFpbGFibGUgaW4gdGhlIFBybyBwbGFuIG9mIC4gPGI+WW91IGNhbiBwbGF5IGFyb3VuZCBhbmQgdHJ5IGFsbCBQcm8gZmVhdHVyZXNcbiAgICAgICAgICB3aXRoaW5cbiAgICAgICAgICB0aGUgZm9ybSBlZGl0b3IsIGJ1dCB5b3UgY2FuJ3QgdXNlIHRoZW0gaW4geW91ciByZWFsIGZvcm1zPC9iPi4gWW91IGNhbiBzdWJzY3JpYmUgbm93IHRvIGdhaW4gdW5saW1pdGVkIGFjY2Vzc1xuICAgICAgICAgIHRvXG4gICAgICAgICAgYWxsIG91ciBwcm8gZmVhdHVyZXMhXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibXktNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8di1idXR0b24gY29sb3I9XCJ3aGl0ZVwiIEBjbGljaz1cInNob3dQcmVtaXVtTW9kYWw9ZmFsc2VcIj5cbiAgICAgICAgICBDbG9zZVxuICAgICAgICA8L3YtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9tb2RhbD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsLnZ1ZSdcbmltcG9ydCB7bWFwR2V0dGVyc30gZnJvbSAndnVleCdcbmltcG9ydCBQcmljaW5nVGFibGUgZnJvbSBcIi4uL3BhZ2VzL3ByaWNpbmcvUHJpY2luZ1RhYmxlLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQcm9UYWcnLFxuICBjb21wb25lbnRzOiB7UHJpY2luZ1RhYmxlLCBNb2RhbH0sXG4gIHByb3BzOiB7fSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93UHJlbWl1bU1vZGFsOiBmYWxzZSxcbiAgICAgIGNoZWNrb3V0TG9hZGluZzogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxuICAgICAgY3VycmVudFdvcmtTcGFjZTogJ29wZW4vd29ya3NwYWNlcy9nZXRDdXJyZW50JyxcbiAgICB9KSxcbiAgICBzaG91bGREaXNwbGF5UHJvVGFnKCkge1xuICAgICAgaWYgKCF3aW5kb3cuY29uZmlnLnBhaWRfcGxhbnNfZW5hYmxlZCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoIXRoaXMudXNlciB8fCAhdGhpcy5jdXJyZW50V29ya1NwYWNlKSByZXR1cm4gdHJ1ZVxuICAgICAgcmV0dXJuICEodGhpcy5jdXJyZW50V29ya1NwYWNlLmlzX3BybylcbiAgICB9LFxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9wZW5DaGF0KCkge1xuICAgICAgd2luZG93LiRjcmlzcC5wdXNoKFsnZG8nLCAnY2hhdDpzaG93J10pXG4gICAgICB3aW5kb3cuJGNyaXNwLnB1c2goWydkbycsICdjaGF0Om9wZW4nXSlcbiAgICB9LFxuICB9XG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfc2ZjX21haW4iLCJQcmljaW5nVGFibGUiLCJNb2RhbCIsIm1hcEdldHRlcnMiXSwibWFwcGluZ3MiOiJpRkEyQ0EsTUFBQUEsRUFBQSxDQUNBLEtBQUEsU0FDQSxXQUFBLENBQUEsYUFBQUMsRUFBQSxNQUFBQyxDQUFBLEVBQ0EsTUFBQSxDQUFBLEVBRUEsTUFBQSxDQUNBLE1BQUEsQ0FDQSxpQkFBQSxHQUNBLGdCQUFBLEVBQ0EsQ0FDQSxFQUVBLFNBQUEsQ0FDQSxHQUFBQyxFQUFBLENBQ0EsS0FBQSxZQUNBLGlCQUFBLDRCQUNBLENBQUEsRUFDQSxxQkFBQSxDQUNBLE9BQUEsT0FBQSxPQUFBLG1CQUNBLENBQUEsS0FBQSxNQUFBLENBQUEsS0FBQSxpQkFBQSxHQUNBLENBQUEsS0FBQSxpQkFBQSxPQUZBLEVBR0EsQ0FDQSxFQUVBLFNBQUEsQ0FDQSxFQUVBLFFBQUEsQ0FDQSxVQUFBLENBQ0EsT0FBQSxPQUFBLEtBQUEsQ0FBQSxLQUFBLFdBQUEsQ0FBQSxFQUNBLE9BQUEsT0FBQSxLQUFBLENBQUEsS0FBQSxXQUFBLENBQUEsQ0FDQSxDQUNBLENBQ0EifQ==
