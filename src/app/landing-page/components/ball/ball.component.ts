import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-ball',
  imports: [CommonModule],
  templateUrl: './ball.component.html',
  styleUrl: './ball.component.scss',
})
export class BallComponent {
  @Input() width = '0px';

  @Input() top = 'auto';

  @Input() bottom = 'auto';

  @Input() right = 'auto';

  @Input() left = 'auto';

  @Input() zIndex = 10;

  @Input() hiddenSize = 0;

  @Input() isVisible = true;

  ngOnInit() {
    this.updateVisibility(window.innerWidth); // Initial check
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateVisibility(event.target.innerWidth);
  }

  private updateVisibility(width: number): void {
    this.isVisible = width > this.hiddenSize; // Hide if the width is less than or equal to 600px
  }
}
