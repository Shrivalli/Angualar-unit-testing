import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:Post;
  p:Post;
posts:Post[]=[];
  constructor(private postservice:PostService) { 
    this.post={id:0,body:"",title:""},
    this.p={id:0,body:"",title:""}
  }

  ngOnInit(): void {
    this.getposts();
  }

  getposts():any{
    this.postservice.getposts().subscribe(posts=>
      {
        this.posts=posts;
        return posts;
      });
  }

  addpost(p:Post)
  {
    this.postservice.addpost(p).subscribe();
  }
  delete(id:number){
 //this.posts.filter((p)=>p.id===post.id);
 this.p=this.posts.filter((p)=>p.id==id)[0];
 console.log(this.p);
    this.postservice.delete(id).subscribe(); 
  }


}
