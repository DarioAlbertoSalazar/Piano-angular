import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';

  applysound(note: number): void {
    const sound = new Audio()
    sound.src = '../assets/sonidos/note' + note + '.wav'
    sound.load();
    sound.play();
  }
}
