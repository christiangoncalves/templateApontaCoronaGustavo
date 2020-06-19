import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialFormComponent } from './pages/initial-form/initial-form.component';


const routes: Routes = [
  {
    path: 'form',
    component: InitialFormComponent
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
