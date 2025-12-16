import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { LoggedUserService } from '../../core/services/logged-user/logged-user.service';
import { LoggedInUser } from '../../core/models/loggedInUserData/logged-in-user.interface';
import { CreatePostComponent } from '../../shared/components/create-post/create-post.component';
import { DatePipe } from '@angular/common';
import { UserPostsService } from './services/user-posts/user-posts.service';
import { Post } from '../../shared/components/single-post/modesl/post/post.interface';
import { SinglePostComponent } from '../../shared/components/single-post/single-post.component';
import { SkeletonPostComponent } from '../../shared/components/skeletons/skeleton-post/skeleton-post.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-profile',
  imports: [CreatePostComponent, DatePipe, SkeletonPostComponent, SinglePostComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly userPostsService = inject(UserPostsService);
  loggedinUserInfo = signal<LoggedInUser>({} as LoggedInUser);
  userPostsList = signal<Post[]>([]);
  postsLoading = signal<boolean>(true);
  aboutMeLoading = signal<boolean>(true);
  hasPosts = computed(() => this.userPostsList().length > 0);

  ngOnInit(): void {
    initFlowbite();
    this.getLoggedInUserData();
  }
  getLoggedInUserData(): void {
    this.loggedUserService.getLoggedUserData().subscribe({
      next: (res) => {
        if (res.message === 'success') {
          this.aboutMeLoading.set(false);
          this.loggedinUserInfo.set(res.user);
          this.getLoggedInUserPosts(res.user._id);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getLoggedInUserPosts(userId: string): void {
    this.userPostsService.getAllUserPosts(userId).subscribe({
      next: (res) => {
        console.log(res);
        if (res.message === 'success') {
          this.userPostsList.set(res.posts);
          this.postsLoading.set(false);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
