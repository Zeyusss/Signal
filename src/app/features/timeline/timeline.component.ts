import { Component, computed, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CreatePostComponent } from '../../shared/components/create-post/create-post.component';
import { SinglePostComponent } from '../../shared/components/single-post/single-post.component';
import { PostService } from '../../shared/components/single-post/services/post.service';
import { Post } from '../../shared/components/single-post/modesl/post/post.interface';
import { SkeletonPostComponent } from '../../shared/components/skeletons/skeleton-post/skeleton-post.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-timeline',
  imports: [
    CreatePostComponent,
    SinglePostComponent,
    SkeletonPostComponent,
    InfiniteScrollDirective,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent implements OnInit {
  private readonly postService = inject(PostService);
  postsList = signal<Post[]>([]);
  hasPosts = computed(() => this.postsList().length > 0);
  loading = signal(true);
  postsLoading = signal<boolean>(false);
  limit = 50;
  page = 1;

  ngOnInit(): void {
    this.getAllPosts();
  }
  getAllPosts(): void {
    this.postsLoading.update((value) => true);
    this.postService.getAllPosts(this.page, this.limit).subscribe({
      next: (res) => {
        console.log(res);
        this.postsLoading.update((value) => false);
        this.loading.update((value) => false);
        this.postsList.update((value) => [...value, ...res.posts]);
      },
      error: (err) => {
        this.loading.update((value) => false);
        console.log(err);
      },
    });
  }

  onScroll(): void {
    if (this.postsLoading()) return;
    this.page++;
    this.getAllPosts();
  }
}
