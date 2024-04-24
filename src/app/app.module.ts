import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './userPanel/shared/header/header.component';
import { HomeComponent } from './userPanel/home/home.component';
import { UsersListComponent } from './userPanel/home/usersList/usersList.component';
import { UsersDetailsComponent } from './userPanel/home/usersDetails/usersDetails.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './userPanel/loading/loading.component';
import { Error404Component } from './userPanel/error404/error404.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersListComponent,
    UsersDetailsComponent,
    LoadingComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
