import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreateComponent } from './screate/screate.component';
import { SlistComponent } from './slist/slist.component';
import { UpdateComponent } from './update/update.component';
import { SdetailsComponent } from './sdetails/sdetails.component';


const routes: Routes = [
  {
    path:"",
    component:SlistComponent
  },
  {
    path:"create",
    component:ScreateComponent
  },
  {
    path:"list",
    component:SlistComponent
  },
  {
    path:"update/:id",
    component:UpdateComponent
  },
  {
    path:"details/:id",
    component:SdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
