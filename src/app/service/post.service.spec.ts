import { HttpClient, HttpClientModule } from "@angular/common/http";
import{HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from "@angular/core/testing";
import { PostService } from "./post.service";
import { Post } from "../Models/post";
import { Observable } from "rxjs";

describe('Postservice',()=>{
let service:PostService;
let http:HttpClient;
let posts:Observable<Post[]>;
let p:Post;
let count=3;
let mockpostArray:Post[];
let httpController: HttpTestingController;
let url = 'https://localhost:7015';
beforeEach(()=>{
    p= {
        id:1,
        title:'first',
        body:'firstbody'
      };
    mockpostArray=[
        {
            id:1,
            title:'first',
            body:'firstbody'
          },
          {
            id:2,
            title:'second',
            body:'secondbody'
          },
          {
            id:3,
            title:'third',
            body:'thirdbody'
          },
    ]
    TestBed.configureTestingModule({
        imports:[
            HttpClientModule,
            HttpClientTestingModule,
        ],
    });
    service = TestBed.inject(PostService);
   httpController = TestBed.inject(HttpTestingController);
});

it('get single post based on id passed',waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=>{
    const id=1;
    service.getpostbyid(id).subscribe((res)=>{
    expect(res).toEqual(p);
    });
    const req=httpController.expectOne({
        method:'GET',
        url:`${url}/api/Posts/${id}`,
    });
    req.flush(p);
})));


it('get method returns items from db',waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=>{
    service.getposts().subscribe((res)=>{
        count=res.length;
    expect(res).toEqual(mockpostArray);  
    console.log(res);
});
    const req = httpController.expectOne({
        method: 'GET',
       // url: `${url}/api/Posts/`,
       url:'https://localhost:7015/api/Posts/',
      });
    req.flush(mockpostArray);
  
    })));

    it('should call updatepost and return the updated post from the API', () => {
        const updatedPost: Post = {
          id: 1,
          title: 'New title',
          body: 'New Body',
        };
    
        const id=1;
        service.updatepost(p).subscribe((data) => {
          expect(data).toEqual(updatedPost);
        });
    
        const req = httpController.expectOne({
          method: 'PUT',
          url: `${url}/api/Posts/${id}`,
        });
    
        req.flush(updatedPost);
    });

    it('should call addpost and add a new record to the db', waitForAsync(inject([HttpTestingController],(http:HttpTestingController) => {
        const newdata: Post = {
          id: 4,
          title: 'Fresh title',
          body: 'Fresh Body',
        };
    
        const id=1;
        service.addpost(p).subscribe((data) => {
            console.log(data);
          expect(data).toEqual(newdata);
          console.log(newdata);
        });
    
        const req = httpController.expectOne({
          method: 'POST',
          url: `${url}/api/Posts/`,
        });
    
        req.flush(newdata);
    })));


    it('should call delete and delete the record in db', waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=> {
         const id=1;
         console.log("Total count:"+count);
       

        service.delete(id).subscribe();

          const req = httpController.expectOne({
          method: 'DELETE',
          url: `${url}/api/Posts/${id}`
        });
        expect(req).toBeDefined();
    
    })));

});

