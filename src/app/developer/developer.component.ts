import { Component, OnInit } from '@angular/core';
import { developer } from '../models/developer.model';
import { skill } from '../models/skill.model';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  developer: developer = new developer('Carpentier', 'Antoine', 26, 'Homme', 'J aime bien la biere', [
    new skill('Goudale', 'G', 'Goudale.com'),
    new skill('Leffe', 'L', 'leffe.com'),
    
  ]);
  constructor() { }

  ngOnInit(): void {
  }

}
