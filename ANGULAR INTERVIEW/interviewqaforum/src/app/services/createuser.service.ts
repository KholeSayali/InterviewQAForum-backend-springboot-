import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {
  createCustomer(custo: any) {
    throw new Error('Method not implemented.');
  }

  baseUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  //for user
  createUser(User: Object): Observable<Object> {
    console.log("inside service")
    console.log(User);
    return this.http.post(`${this.baseUrl}/addUser`, User);
  }


  //for login
  loginUser(Login: object): Observable<object> {
    return this.http.post(`${this.baseUrl}/loginUser`, Login)
  };


  // for the post
  createPost(post: Object): Observable<Object> {
    console.log("inside service")
    console.log(post);
    return this.http.post(`${this.baseUrl}/addPost`, post);
  }

  getAllPosts(): any {
    return this.http.get(`${this.baseUrl}/getAllPosts`);
  }
  deletePostById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletePostById/${id}`, { responseType: 'text' });
  }

  getonePostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getonePostById/${id}`);
  }
  updatePost(post: object) {
    return this.http.put(`${this.baseUrl}/updatePost`, post);
  }

  //for post 
  

//   getOnePost(id: number): Observable<any> {
//     return this.http.get(`${this.baseUrl}/getonePostById/${id}`);
  

//   }
  
  //for comments
  createComments(comment: Object): Observable<Object> {
    console.log("inside service")
    console.log(comment);
    return this.http.post(`${this.baseUrl}/addComment`, comment);
  }

  getAllComments():any
  {
    return this.http.get(`${this.baseUrl}/getAllComments`);
  }
  deleteCommentsById(id: number): Observable<any> {
    return this.http.delete( `${this.baseUrl}/deleteCommentsById/${id}`, { responseType: 'text' });
  }

  getoneCommentsById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getoneCommentsById/${id}`);
  }

  // /*update Player */
  updateComments(comments:object){
    return this.http.put(`${this.baseUrl}/updateComments`,comments);
}
}