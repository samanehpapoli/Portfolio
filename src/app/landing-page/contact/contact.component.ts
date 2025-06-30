import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';
import { BallComponent } from '../components/ball/ball.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    PrimaryButtonComponent,
    BallComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: '',
  };
}
