import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { initFlowbite, Modal } from 'flowbite';
import { initCreatePost } from './model/creat-post.init';
import { form, Field, FIELD } from '@angular/forms/signals';
import { creatPostSchema } from './model/creat-post.schema';
import { PostService } from '../single-post/services/post.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-post',
  imports: [Field],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent implements OnInit {
  private readonly postService = inject(PostService);
  private readonly toastrService = inject(ToastrService);

  saveFile: WritableSignal<File | string> = signal('');
  myModal = viewChild<ElementRef>('modal');
  imagePreview = signal<string | null>(null);
  isLoading = signal<boolean>(false);
  suberscribe: Subscription = new Subscription();
  ngOnInit(): void {
    initFlowbite();
  }

  creatPostModel = signal(initCreatePost);
  createPostForm = form(this.creatPostModel, creatPostSchema);

  changeImg(e: Event): void {
    let input = e.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.saveFile.set(file);
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }
  submitPost(e: Event): void {
    e.preventDefault();
    if (this.createPostForm().valid()) {
      this.isLoading.update((value) => true);
      const formData = new FormData();
      formData.append('body', this.createPostForm.content().value());

      if (this.saveFile()) {
        formData.append('image', this.saveFile());
      }
      this.suberscribe.unsubscribe();
      this.suberscribe = this.postService.creatPostPost(formData).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message === 'success') {
            this.isLoading.update((value) => false);
            this.toastrService.success('Post added successfully');
            new Modal(this.myModal()?.nativeElement).hide();
            this.postService.getAllPosts();
          }
        },
        error: (err) => {
          console.log(err);
          this.isLoading.update((value) => false);
          this.toastrService.error(err.error.error);
        },
      });
    }
  }
}
