import { Component } from '@angular/core';
import { Comments } from '../../models/comments';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateuserService } from '../../services/createuser.service';

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrl: './comments-details.component.css'
})
export class CommentsDetailsComponent {

  
  commentsId: number=0;
  comments: Comments=new Comments();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: CreateuserService) { }

    ngOnInit() {
      this.comments = new Comments();
  
      this. commentsId = this.route.snapshot.params['commentsId'];
      
      
      this.service.getoneCommentsById(this.commentsId).subscribe((data)=>{
        console.log(data);
        this.comments=data;
      })

    }
    list(){
      this.router.navigate(['cList']);
    }
}
