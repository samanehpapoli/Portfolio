import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, TranslateDirective, TranslatePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isFixed: boolean = false;
  isChecked: boolean = false;
  logoIcon: string = 'logo-white.svg';
  isOtherPages: boolean = false;
  routeName?: string;

  languageFromStorage = localStorage.getItem('spSiteLanguage');
  selectedLanguage = this.languageFromStorage
    ? parseInt(this.languageFromStorage, 10)
    : 0;

  languages = [
    {
      title: 'EN',
      value: 'en',
    },
    {
      title: 'DE',
      value: 'de',
    },
  ];

  @Output() languageChanged = new EventEmitter<{
    title: string;
    value: string;
  }>();

  ngOnInit(): void {
    this.loadSelectedLanguage();
    this.initLanguage();
  }

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
    setTimeout(() => {
      this.checkScrollPosition();
    }, 200);
  }

  closeMenu() {
    if (this.isChecked === true) {
      setTimeout(() => {
        this.isChecked = false;
        this.isOtherPages = this.routeName === '' && this.isChecked === false ? false : true;
        this.onCheckedChanged();
      }, 100);
      setTimeout(() => {
        this.checkScrollPosition();
      }, 200);
    }
  }

  loadSelectedLanguage(): void {
    const languageFromStorage = localStorage.getItem('spSiteLanguage');
    this.selectedLanguage = languageFromStorage
      ? parseInt(languageFromStorage, 10)
      : 0;
  }

  initLanguage() {
    this.languageChanged.emit(this.languages[this.selectedLanguage]);
  }

  changeLanguage(): void {
    this.selectedLanguage = this.selectedLanguage === 0 ? 1 : 0;
    localStorage.setItem('spSiteLanguage', this.selectedLanguage.toString());
    this.initLanguage();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    this.isFixed = window.scrollY > 600 ? true : this.isChecked;
    this.isOtherPages = this.isChecked ? false : this.isFixed || this.routeName !== '';
  }
}
