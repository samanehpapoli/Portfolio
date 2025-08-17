import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { BallComponent } from '../components/ball/ball.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [
    SingleProjectComponent,
    BallComponent,
    TranslatePipe,
    TranslateDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Join',
      description: 'app.projects.join',
      image: 'join.jpg',
      link: 'https://join.samanehpapoli.com/',
      github: 'https://github.com/samanehpapoli/join',
      tools: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase', 'Api'],
    },
    {
      name: 'El Pollo Loco',
      description: 'app.projects.polloLoco',
      image: 'el-pollo-loco.png',
      link: 'https://elpololoco.samanehpapoli.com/',
      github: 'https://github.com/samanehpapoli/El-Polo-Loco',
      tools: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Pokédex',
      description: 'app.projects.pokedex',
      image: 'pokedex.jpg',
      link: 'https://pokedex.samanehpapoli.com/',
      github: 'https://github.com/samanehpapoli/pokedex',
      tools: ['HTML', 'CSS', 'Api'],
    },
  ];
}
