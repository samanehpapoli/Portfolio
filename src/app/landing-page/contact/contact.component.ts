import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';
import { BallComponent } from '../components/ball/ball.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    PrimaryButtonComponent,
    BallComponent,
    FormsModule,
    CommonModule,
    TranslatePipe,
    TranslateDirective,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  formIsSent = false;
  formHasError = false;
  mailTest = false;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: '',
  };

  post = {
    endPoint: 'https://samanehpapoli.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.formIsSent = true;
          },
          error: (error) => {
            this.formHasError = true;
          },
          complete: () => {
            setTimeout(() => {
              this.formIsSent = false;
              this.formHasError = false;
            }, 5000);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
