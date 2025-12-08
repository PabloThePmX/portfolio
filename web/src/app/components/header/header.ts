import { Component, input, output, signal, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  typingValue: string = "";
  private _typingCounter: number = 0;
  reloadTypeWriter = input(false);
  resetClicked = output();

  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faMail = faEnvelope;

  ngOnInit(){
    this.typeWriter();
  }

  ngOnChanges() {
    if(this.reloadTypeWriter()){
      this.typeWriter();
      this.resetClicked.emit();
    }
  }

  typeWriter(): void {
    let txt: string = `Hey! I'm Pablo! :)`;

    if(this._typingCounter == 0){
      this.typingValue = "";
    }

    if (this._typingCounter < txt.length) {
        this.typingValue += txt.charAt(this._typingCounter);
        this._typingCounter++;
        setTimeout(() => this.typeWriter(), 70);
    } else {
      this._typingCounter = 0;
    }
  }
}