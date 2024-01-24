import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

import { AddPostComponent } from './components/add-post/add-post.component';
import { AddCommentsComponent } from './components/add-comments/add-comments.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentsDetailsComponent } from './components/comments-details/comments-details.component';
import { CommentsUpdateComponent } from './components/comments-update/comments-update.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    AddPostComponent,
    AddCommentsComponent,
    PostDetailsComponent,
    PostListComponent,
    PostUpdateComponent,
    CommentsListComponent,
    CommentsDetailsComponent,
    CommentsUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,RouterModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
