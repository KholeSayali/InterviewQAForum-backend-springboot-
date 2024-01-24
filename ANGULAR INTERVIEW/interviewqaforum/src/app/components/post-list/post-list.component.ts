import { Component } from '@angular/core';
import { Post } from '../../models/Post';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { CreateuserService } from '../../services/createuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  public post: Observable<Post[]> =of([]);
  
  constructor(private service: CreateuserService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.post = this.service.getAllPosts();
  }
  postDetails(id: number){
    this.router.navigate(['pdetails', id]);
  }

  updateDetails(id:number)
    {
      this.router.navigate(['pupdate', id]);
    }


  deletePost(id:number)
    {
      return this.service.deletePostById(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })

    }
    
}
