import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/sections/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./components/sections/signin/signin-routing.module').then(m => m.SigninRoutingModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/sections/signup/signup-routing.module').then(m => m.SignupRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
