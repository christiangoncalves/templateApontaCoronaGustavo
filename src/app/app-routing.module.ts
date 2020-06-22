import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialFormComponent } from './pages/initial-form/initial-form.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  {
    path: 'form',
    component: InitialFormComponent
  },
  {
    path: 'home',
    component: InicioComponent
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
