import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 count:number;
  constructor(private http:HttpClient) {
    this.count=0;
   }

  getposts()
  {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  
 addpost(post:Post)
 {
  return this.http.post('https://jsonplaceholder.typicode.com/posts',post);
 }
  delete(id:number)
  {
    //let pid=post.id;
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}
