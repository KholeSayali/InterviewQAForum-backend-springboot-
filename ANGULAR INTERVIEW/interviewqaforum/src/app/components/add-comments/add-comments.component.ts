import { Component } from '@angular/core';
import { Comments } from '../../models/comments';
import { CreateuserService } from '../../services/createuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrl: './add-comments.component.css'
})
export class AddCommentsComponent {

  comments=new Comments();
  constructor(private service:CreateuserService,
    private router: Router) {
    
     }

  onSubmit()
  {
      this.save();
  }

  save()
  {
    this.service.createComments(this.comments).subscribe();
   
      this.gotoPostPage();
   
  }

  gotoPostPage(){
    this.router.navigate(['/createPost']);
  }

}
