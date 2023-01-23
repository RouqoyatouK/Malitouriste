import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidemenuPage } from './sidemenu.page';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children:[
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'pays',
        loadChildren: () => import('../pays/pays.module').then( m => m.PaysPageModule)
      },
      {
        path: 'regions',
        loadChildren: () => import('../regions/regions.module').then( m => m.RegionsPageModule)
      },
      {
        path: 'commentaire/:idnomregion',
        loadChildren: () => import('../commentaire/commentaire.module').then( m => m.CommentairePageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
      },
      {
        path: 'signin',
        loadChildren: () => import('../signin/signin.module').then( m => m.SigninPageModule)
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuPageRoutingModule {}
