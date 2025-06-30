import { Component } from '@angular/core';
import { BallComponent } from '../components/ball/ball.component';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';

@Component({
  selector: 'app-about',
  imports: [
    BallComponent,
    PrimaryButtonComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
