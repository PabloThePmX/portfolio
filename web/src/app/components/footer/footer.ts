import { Component, output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentTime: string = "";
  clickedEvent = output();

  ngOnInit(){
    this.setTime();
  }

  setTime(){
    const TODAY: Date = new Date();

    let timeHours: string = TODAY.getHours().toString().padStart(2, "0");
    let timeMinutes: string = TODAY.getMinutes().toString().padStart(2, "0");

    this.currentTime = `${timeHours}:${timeMinutes}`;

    setInterval(() => this.setTime(), 5000);
  }
}