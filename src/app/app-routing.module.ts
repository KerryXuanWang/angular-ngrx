import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
export const routedComponents = [UsersComponent, UserComponent, SettingsComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
