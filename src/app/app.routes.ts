import { Routes } from '@angular/router';
import { AnonLayoutComponent } from './core/layouts/anon-layout/anon-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { UserLayoutComponent } from './core/layouts/user-layout/user-layout.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { ProfileComponent } from './features/profile/profile.component';
import { DetailsPostComponent } from './features/details-post/details-post.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { authGuard } from './core/guards/auth/auth-guard';
import { isLoggedGuard } from './core/guards/isLogged/is-logged-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: AnonLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' },
    ],
  },
  {
    path: '',
    component: UserLayoutComponent,
    canActivate: [isLoggedGuard],
    children: [
      { path: 'home', component: TimelineComponent, title: 'Home' },
      { path: 'profile', component: ProfileComponent, title: 'Profile' },
      { path: 'details', component: DetailsPostComponent, title: 'Details' },
    ],
  },
  { path: '**', component: NotfoundComponent, title: 'NotFound' },
];
