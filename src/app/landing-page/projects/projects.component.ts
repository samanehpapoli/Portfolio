import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { BallComponent } from '../components/ball/ball.component';

@Component({
  selector: 'app-projects',
  imports: [
    SingleProjectComponent,
    BallComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: 'el-pollo-loco.png',
      github: '#',
      tools: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Pokédex',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: 'pokedex.jpg',
      github: '#',
      tools: ['HTML', 'CSS', 'Api'],
    },
  ];
}
