import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isChecked: boolean = false;
  logoIcon: string = 'logo-white.svg';
  isOtherPages: boolean = false;
  routeName?: string;

  getRouteName(route?: string) {
    this.routeName = route;
    this.isOtherPages = this.routeName === '' && this.isChecked === false ? false : true;
  }

  onCheckedChanged(): void {
    if (this.isChecked) {
      setTimeout(() => {
        this.logoIcon = 'logo-blue.svg';
      }, 300);
    } else {
      setTimeout(() => {
        this.logoIcon = 'logo-white.svg';
      }, 100);
    }
    if (this.routeName !== '') {
      this.isOtherPages = this.isChecked === true ? false : true;
    }

  }

  closeMenu() {
    if (this.isChecked === true) {
      setTimeout(() => {
        this.isChecked = false;
      }, 100);
    }
  }
}
