import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from '../Models/post';
import { PostService } from '../service/post.service';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let POSTS:Post[];
  let p:Post;
  let mockpostservice:any;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ PostComponent]
    })
    .compileComponents();
  });

beforeEach(()=>{
    POSTS=[
      {
        id:1,
        title:'abc',
        body:'welcome'
      },
      {
        id:2,
        title:'def',
        body:'good morning'
      },
      {
        id:3,
        title:'ghi',
        body:'good night'
      },
    ];
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

 mockpostservice=jasmine.createSpyObj(['getposts','delete','addpost']);
  component=new PostComponent(mockpostservice);
});
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getposts',()=>{
    it('get all posts',()=>{
       mockpostservice.getposts.and.returnValue(of(true));
       //const postservice = fixture.debugElement.injector.get(PostService);
    let count=POSTS.length;
      expect(count).toBe(3);
    });
  });

  describe('addpost',()=>{
    it('should add new post',()=>{
      p={id:4,body:'sample',title:'sample'};
      mockpostservice.addpost.and.returnValue(of(true));
      component.posts=POSTS;
      //POSTS.push(p);
      component.addpost(p);
      expect(component.posts.length).toBe(3);
    });
  });

  describe('delete',()=>{
     it('should delete selected post from posts',()=>{
    mockpostservice.delete.and.returnValue(of(true));
    component.posts=POSTS;
    console.log("length"+component.posts.length);
     component.delete(component.posts[0].id);
    console.log("selected element"+component.posts[0]);
    expect(component.posts.length).toBe(3);
    });
  });
});
