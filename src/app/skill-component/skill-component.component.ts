import { Component, OnInit, Input } from '@angular/core';
import { skill } from '../models/skill.model';
@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit {
  @Input() skill?: skill;
  constructor() { }

  ngOnInit(): void {
  }

}
