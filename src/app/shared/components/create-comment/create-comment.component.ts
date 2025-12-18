import {
  Component,
  inject,
  input,
  Input,
  InputSignal,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { form, Field } from '@angular/forms/signals';
import { initComment } from './model/comment.init';
import { Comment, Comments } from './model/comment.interface';
import { CommentService } from '../single-comment/services/comment.service';
import { SingleCommentComponent } from '../single-comment/single-comment.component';
import { SkeletonCommentComponent } from '../skeletons/skeleton-comment/skeleton-comment.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-comment',
  imports: [Field, SingleCommentComponent, SkeletonCommentComponent],
  templateUrl: './create-comment.component.html',
  styleUrl: './create-comment.component.css',
})
export class CreateCommentComponent implements OnInit {
  private readonly commentService = inject(CommentService);

  postId = input<string>('');
  commentModel = signal<Comment>(initComment);
  commentForm = form<Comment>(this.commentModel);
  comments = signal<Comments[]>([]);
  commentsLoading = signal<boolean>(false);
  showMoreComments = input<boolean>(false);
  postCreated = output<void>();

  subscribe: Subscription = new Subscription();
  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.commentsLoading.update((value) => true);
    this.commentService.getComment(this.postId()).subscribe({
      next: (res) => {
        this.commentsLoading.update((value) => false);
        this.comments.set(res.comments);
      },
      error: (err) => {
        this.commentsLoading.update((value) => false);
        console.log(err);
      },
    });
  }

  submitComment(e: Event): void {
    e.preventDefault();
    if (this.commentForm().valid()) {
      let data = {
        content: this.commentForm.content().value(),
        post: this.postId(),
      };
      this.subscribe.unsubscribe();
      this.subscribe = this.commentService.createCommentPost(data).subscribe({
        next: (res) => {
          if (res.message === 'success') {
            this.commentForm.content().reset('');
            this.getComments();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
