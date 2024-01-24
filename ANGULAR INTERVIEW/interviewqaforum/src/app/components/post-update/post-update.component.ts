import { Component } from '@angular/core';
import { Post } from '../../models/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateuserService } from '../../services/createuser.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrl: './post-update.component.css'
})
export class PostUpdateComponent {

  
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

    onSubmit(){
      this. updatePost();
    }

    updatePost()
    {
      this.service.updatePost(this.post).subscribe((data)=>{
        console.log(data);
        this.post= new Post();
        this.gotoList();
      })
    }

    gotoList(){
      this.router.navigate(['pList']);
    }
}
