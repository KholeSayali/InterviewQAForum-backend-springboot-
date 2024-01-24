import { Component } from '@angular/core';
import { Post } from '../../models/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateuserService } from '../../services/createuser.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {

  
    postId: number=0;
    post: Post=new Post();
  
    constructor(private route: ActivatedRoute,private router: Router,
      private service: CreateuserService) { }
  
      ngOnInit() {
        this.post = new Post();
    
        this. postId = this.route.snapshot.params['postId'];
        
        
        this.service.getonePostById(this.postId).subscribe((data)=>{
          console.log(data);
          this.post=data;
        })
  
      }
      list(){
        this.router.navigate(['pList']);
      }
}
