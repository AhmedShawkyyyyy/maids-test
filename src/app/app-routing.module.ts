import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './userPanel/home/home.component';
import { UsersDetailsComponent } from './userPanel/home/usersDetails/usersDetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Maids | Home', component: HomeComponent },
  {
    path: 'user-details/:id',
    title: 'Maids | User Details',
    component: UsersDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
