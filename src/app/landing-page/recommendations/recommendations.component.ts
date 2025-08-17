import { Component } from '@angular/core';
import { TranslateDirective } from '@ngx-translate/core';
import { SingleRecommendationComponent } from "./single-recommendation/single-recommendation.component";

@Component({
  selector: 'app-recommendations',
  imports: [TranslateDirective, SingleRecommendationComponent],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {
  recommendations = [
    {
      name: 'Jan Gerardi',
      project: 'Project Join',
      text: 'app.recommendations.janText'
    },
    {
      name: 'Kilian Heyne',
      project: 'Project Join',
      text: 'app.recommendations.kilianText'
    },
    {
      name: 'Irene Kober',
      project: 'Project Join',
      text: 'app.recommendations.ireneText'
    },
  ]
}
