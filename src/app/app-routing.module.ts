import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

const routes: Routes = [
  {
    path:'', component: ProductsPageComponent
  },
  {
    path: 'about', component:AboutPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
