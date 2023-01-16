import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  base = document.getElementById('base').href + "/" ?? "/";

  title = 'dados';

  dadoIzquierda = "../assets/img/dice1.png";
  dadoDerecha = "../assets/img/dice4.png";

  numero1 = 1;
  numero2 = 4;

  ruleta = true;

  private music(sound: string) {

    const audio = new Audio(this.base + "../assets/sonidos/" + sound + ".mp3");
    audio.load();
    audio.play();

  }

  tirarDados(): void {

    this.ruleta = false;
    this.music("girar");

    let timerId = setInterval(() => {
      this.numero1 = Math.trunc(Math.random() * (6 - 1) + 1);
      this.numero2 = Math.trunc(Math.random() * (6 - 1) + 1);
      this.dadoIzquierda = "../assets/img/dice" + this.numero1 + ".png";
      this.dadoDerecha = "../assets/img/dice" + this.numero2 + ".png";
    }, 200);

    setTimeout(() => {

      clearInterval(timerId);
      this.ruleta = true;
      console.log(this.numero1 +" " + this.numero2)
      if (this.numero1 == this.numero2) this.music("ganar"); else this.music("perder");
    }, 4500);

  }

}

