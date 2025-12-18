import { Component, input } from '@angular/core';
import { Comment } from '../single-post/modesl/post/post.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-comment',
  imports: [DatePipe],
  templateUrl: './single-comment.component.html',
  styleUrl: './single-comment.component.css',
})
export class SingleCommentComponent {
  comment = input<Comment>({} as Comment);
}
