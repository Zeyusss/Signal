import { Component, input, OnInit, signal } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isLogin = input<boolean>(true);

  ngOnInit(): void {
    initFlowbite();
  }
}
