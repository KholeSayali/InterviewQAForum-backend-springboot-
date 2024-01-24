import { Component } from '@angular/core';
import { Comments } from '../../models/comments';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { CreateuserService } from '../../services/createuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.css'
})
export class CommentsListComponent {
postDetails(arg0: number) {
throw new Error('Method not implemented.');
}

  
  public comments: Observable<Comments[]> =of([]);
  
  constructor(private service: CreateuserService,
    private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.comments = this.service.getAllComments();
  }
  commentsDetails(id: number){
    this.router.navigate(['cdetails', id]);
  }

  updateDetails(id:number)
    {
      this.router.navigate(['cupdate', id]);
    }


  deleteComments(id:number)
    {
      return this.service.deleteCommentsById(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })

    }
}
