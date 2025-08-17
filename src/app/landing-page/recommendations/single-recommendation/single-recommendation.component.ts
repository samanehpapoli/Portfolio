import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-single-recommendation',
  imports: [TranslatePipe],
  templateUrl: './single-recommendation.component.html',
  styleUrl: './single-recommendation.component.scss'
})
export class SingleRecommendationComponent {
  @Input() recommendation!: {
    name: string,
    project: string,
    text: string
  }
}
