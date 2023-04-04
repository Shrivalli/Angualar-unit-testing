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
let mockpostArray:Post[];
let httpController: HttpTestingController;
let url = 'https://localhost:/7015';
beforeEach(()=>{
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


it('get method returns items from db',waitForAsync(inject([HttpTestingController],(http:HttpTestingController)=>{
    {{debugger}}
   service.getposts().subscribe((res)=>{
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

});