import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersPageComponent} from './users-page/users-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'user/:id', component: UserPageComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
