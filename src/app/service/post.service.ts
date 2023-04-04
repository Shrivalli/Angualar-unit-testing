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
  updatepost(post:Post)
  {
  return this.http.put<Post>('https://localhost:7015/api/Posts/'+post.id,post);
  }
  
  getpostbyid(id:number)
  {
  return this.http.get<Post>('https://localhost:7015/api/Posts/'+id);
  }
  
  getposts()
  {
    //return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return this.http.get<Post[]>('https://localhost:7015/api/Posts/');
  }
  
  addpost(post:Post)
  {
  // return this.http.post('https://jsonplaceholder.typicode.com/posts',post);
  return this.http.post<Post>('https://localhost:7015/api/Posts/',post);
  }
  delete(id:number)
  {
    //let pid=post.id;
   // return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id);
   return this.http.delete('https://localhost:7015/api/Posts/'+id);
  }
}
