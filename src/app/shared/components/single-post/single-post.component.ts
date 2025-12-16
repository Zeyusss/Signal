import { Component, input, InputSignal, signal } from '@angular/core';
import { Post } from './modesl/post/post.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-post',
  imports: [DatePipe],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent {
  post: InputSignal<Post> = input.required();
}
