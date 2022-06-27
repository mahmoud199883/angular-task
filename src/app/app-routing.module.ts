import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';


const routes: Routes = [
         {path:'' , component:MainpageComponent},
         {path:'AddArticle' , component:AddProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
