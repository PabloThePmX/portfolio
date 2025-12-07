import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { AboutCard } from "./components/about-card/about-card";
import { Win95Box } from "./components/win95-box/win95-box";
import { STORIES } from './constants/stories.constants';
import { ProjectsCard } from "./components/projects-card/projects-card";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, AboutCard, Win95Box, ProjectsCard, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  stories = STORIES;

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {

      //get the elements
      const storyCards: any = document.querySelectorAll('.fade-in-section');
      const aboutMe: any = document.querySelector("#about-me-card");
      const projects: any = document.querySelector("#projects-card");

      //verify the observer
      const observerCallback = (entries: any[], observer: any) => {
        entries.forEach(entry => {

          switch (entry.target) {
            case aboutMe || projects:
              entry.target.classList.toggle('fade', entry.isIntersecting);
              break;
            case storyCards:
              entry.target.classList.toggle('is-visible', entry.isIntersecting);
              break;
          }

        });

      };

      //observer definitions
      const observer = new IntersectionObserver(observerCallback, 
        { 
          root: null, 
          rootMargin: "0px",
          threshold: 0.2  //20% of the element need to be on user screen
        });
      
      //apply this for each card
      storyCards.forEach((storyCard: any) => observer.observe(storyCard));
      observer.observe(aboutMe);
      //observer.observe(projects);
    });
  }

}
