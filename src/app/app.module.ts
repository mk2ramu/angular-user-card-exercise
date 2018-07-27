import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgForm, Form } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { DirectionRouting } from './direction.routing';
import { AppComponent } from './app.component';
import { DirectionComponent } from './direction/direction.component';
import { UserComponent } from './user/user.component';
import { OrganizationComponent } from './organization/organization.component';
import { RepositoryComponent } from './repository/repository.component';

import { GithubService } from './github.service';


@NgModule({
  declarations: [
    AppComponent,
    DirectionComponent,
    UserComponent,
    OrganizationComponent,
    RepositoryComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    DirectionRouting,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
