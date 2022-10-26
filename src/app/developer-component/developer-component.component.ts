import { Component, OnInit } from '@angular/core';
import { developer } from '../models/developer.model';
import { skill } from '../models/skill.model';
@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css']
})
export class DeveloperComponentComponent implements OnInit {
  developer: developer = new developer('Carpentier', 'Antoine', 26, 'Homme', 'J aime bien la biere', [
    new skill('Goudale', 'G', 'Goudale.com'),
    new skill('Leffe', 'L', 'leffe.com'),
    
  ]);
  constructor() { }

  ngOnInit(): void {
  }

}
