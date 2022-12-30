import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./feature-modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path:'chat',
    loadChildren: () =>
    import('./feature-modules/chat/chat.module').then((m)=>m.ChatModule)
  },
  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
