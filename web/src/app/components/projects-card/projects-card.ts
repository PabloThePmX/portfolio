import { Component } from '@angular/core';
import { PROJECTS } from '../../constants/project.constants';

@Component({
  selector: 'app-projects-card',
  imports: [],
  templateUrl: './projects-card.html',
  styleUrl: './projects-card.css',
  host: {
    'class': 'section-container'
  }
})
export class ProjectsCard {
  projectIndex: number = 0;
  currentProject = PROJECTS[0];
  projects = PROJECTS;
  isFading = false;
  
  triggerFading(){
    this.isFading = false;
    setTimeout(() => this.isFading = true);
  }

  nextSlide(){
    if(this.projectIndex < this.projects.length - 1)
      this.projectIndex++;
    else
      this.projectIndex = 0
    
    this.currentProject = this.projects[this.projectIndex];
    this.triggerFading();
  }

  previousSlide(){
    if(this.projectIndex > 0)
      this.projectIndex--;
    else
      this.projectIndex = PROJECTS.length - 1

    this.currentProject = this.projects[this.projectIndex];
    this.triggerFading();
  }

  jumpToSlide(slideIndex: number){
    this.projectIndex = slideIndex;
    this.currentProject = this.projects[this.projectIndex];
    this.triggerFading();
  }
}