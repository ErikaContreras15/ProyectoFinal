import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  constructor(private router: Router) {}

  irAHome() {
    this.router.navigate(['paginas/home'], { replaceUrl: true });
  }
}

