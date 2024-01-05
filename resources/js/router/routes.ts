import { RouteRecordRaw } from "vue-router";
const pages = import.meta.glob('../pages/**')

function page (path: string) {
    return pages[`../pages/${path}`]
}

export default [
    { path: "/", name: "home", component: page("home.vue") },
    { path: "/forms/create", name: "forms.create", component: page("forms/create.vue") },
    { path: "/forms/create/guest", name: "forms.create.guest", component: page("forms/create-guest.vue") },
    { path: "/forms/:slug/edit", name: "forms.edit", component: page("forms/edit.vue") },
    { path: "/forms/:slug/show", component: page("forms/show/index.vue"), children: [
        { path: "", redirect: { name: "forms.show" } },
        { path: "submissions", name: "forms.show", component: page("forms/show/submissions.vue") },
        { path: "share", name: "forms.show.share", component: page("forms/show/share.vue") },
        { path: "analytics", name: "forms.show.analytics", component: page("forms/show/stats.vue") },
    ] },
    { path: "/settings", component: page("settings/index.vue"), children: [
        { path: "", redirect: { name: "settings.workspaces" } },
        { path: "workspaces", name: "settings.workspaces", component: page("settings/workspace.vue") },
        { path: "workspaces/:slug/details", name: "settings.workspaces.details", component: page("settings/workspaceDetails.vue") },
        { path: "billing", name: "settings.billing", component: page("settings/billing.vue") },
        { path: "profile", name: "settings.profile", component: page("settings/profile.vue") },
        { path: "account", name: "settings.account", component: page("settings/account.vue") },
        { path: "password", name: "settings.password", component: page("settings/password.vue") },
        { path: "admin", name: "settings.admin", component: page("settings/admin.vue") },
    ] },
    { path: "/forms/:slug", name: "forms.show_public", component: page("forms/show-public.vue") },
    { path: "*", component: page("errors/404.vue") },
] as RouteRecordRaw[];
