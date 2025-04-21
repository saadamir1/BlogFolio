import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css'],
})
export class BlogFormComponent {
  newBlog: Blog = {
    id: 0,
    title: '',
    content: '',
    author: '',
    date: '',
  };

  constructor(private blogService: BlogService) {}

  addBlog() {
    this.blogService.addBlog({ ...this.newBlog });
    this.newBlog = {
      id: 0,
      title: '',
      content: '',
      author: '',
      date: '',
    };
  }
}
