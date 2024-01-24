import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AddCommentsComponent } from './components/add-comments/add-comments.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentsDetailsComponent } from './components/comments-details/comments-details.component';
import { CommentsUpdateComponent } from './components/comments-update/comments-update.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
 
  {
    path:'home',
    component:HomeComponent
  },

{
  path:'aboutus',
  component:AboutusComponent
},
  {
    path:'contactus',
    component:ContactusComponent
  }
  ,
  
  {
    path:'add',
    component:RegistrationComponent
  },

  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'createPost',
    component: AddPostComponent
  }
  ,
  {
    path:'createComments',
    component:AddCommentsComponent
  },
  {
    path:'pList',
    component:PostListComponent
  }
  ,
  
  {
    path:'pdetails/:postId',
    component:PostDetailsComponent
  }
  ,
  {
    path:'pupdate/:postId',
    component:PostUpdateComponent
  }
  ,
  {
    path:'cList',
    component:CommentsListComponent
  }
  ,
  
  {
    path:'cdetails/:commentsId',
    component:CommentsDetailsComponent
  }
  ,
  {
    path:'cupdate/:commentsId',
    component:CommentsUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
