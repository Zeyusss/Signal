import { Component, inject, OnInit, signal } from '@angular/core';
import { SkeletonPostComponent } from '../../shared/components/skeletons/skeleton-post/skeleton-post.component';
import { SinglePostComponent } from '../../shared/components/single-post/single-post.component';

import { DetailsService } from './services/details.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../shared/components/single-post/modesl/post/post.interface';

@Component({
  selector: 'app-details-post',
  imports: [SkeletonPostComponent, SinglePostComponent],
  templateUrl: './details-post.component.html',
  styleUrl: './details-post.component.css',
})
export class DetailsPostComponent implements OnInit {
  private readonly detailsService = inject(DetailsService);
  private readonly activatedRoute = inject(ActivatedRoute);

  postId = signal<string | null>('');
  postData = signal<Post>({} as Post);
  detailsLoading = signal<boolean>(false);
  ngOnInit(): void {
    this.getPostId();
    this.postDetails();
  }

  getPostId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (paramUrl) => {
        this.postId.set(paramUrl.get('id'));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  postDetails(): void {
    this.detailsLoading.update((value) => true);
    this.detailsService.postDetailsGet(this.postId()).subscribe({
      next: (res) => {
        if (res.message === 'success') {
          console.log(res);
          this.postData.set(res.post);
          this.detailsLoading.update((value) => false);
        }
      },
      error: (err) => {
        this.detailsLoading.update((value) => false);

        console.log(err);
      },
    });
  }
}
