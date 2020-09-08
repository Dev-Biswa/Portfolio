import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import * as component from "./index";

const appRoutes: Routes = [
  { path: "", redirectTo: "miyh", pathMatch: "full" },
  {
    path: "miyh",
    component: component.LayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        component: component.HomeComponent,
      },
      {
        path: "single",
        component: component.SingleProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
