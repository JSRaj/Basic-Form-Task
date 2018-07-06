import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Routes, RouterModule } from '@angular/router';



const appRoutes:Routes=[
  
  {path:'userdetails', component:UserDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
