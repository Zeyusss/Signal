import { Component, inject, input, InputSignal, OnInit, signal } from '@angular/core';
import { Post } from './modesl/post/post.interface';
import { DatePipe } from '@angular/common';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-post',
  imports: [DatePipe, CreateCommentComponent, RouterLink],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent {
  post: InputSignal<Post> = input.required();
  showButton = input<boolean>(true);
  showMoreCommentsInPost = input<boolean>(false);
}
