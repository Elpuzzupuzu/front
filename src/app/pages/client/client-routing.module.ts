import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full"
  },
  {
    path: "landing",
    component: LandingComponent
  },
  {
    path: "engineering",
    loadChildren: () => import("./engineering/engineering.module").then(m => m.EngineeringModule)
  },
  {
    path: "admon",
    loadChildren: () => import("./admon/admon.module").then(m => m.AdmonModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
