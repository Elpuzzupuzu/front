import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "auth",
        pathMatch: "full"
    },
    {
        path: "auth",
        loadChildren: () => import("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
    },
    {
        path: "client",
        loadChildren: () => import("./layouts/client-layout/client-layout.module").then(m => m.ClientLayoutModule)
    }
];
