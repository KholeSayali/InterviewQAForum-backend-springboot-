import { Component } from '@angular/core';
import { Post } from '../../models/Post';
import { Comments } from '../../models/comments';
import { CreateuserService } from '../../services/createuser.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  post=new Post();
  public products: Observable<Post[]> =of([]);
  comments: any;
  custo: any;
 
  constructor(private service:CreateuserService,
    private router: Router) {
    
      
     }


     ngOnInit() {
      this.getAll();
    }
  
    getAll() {
      this.comments = this.service.getAllComments();
    }

    addComments(postId: string) {
      this.comments.pipe(
        map((commentsList: Array<any>) => commentsList[Number(postId)])
      ).subscribe(
        (selectedComments: any) => {
          return this.post.comments.push(selectedComments);
        }
      );
    }
    
    onSubmit()
    {
      this.save();
    }
  
    save()
    {
      console.log(this.post);
      this.service.createPost(this.post).subscribe();
  }
}
