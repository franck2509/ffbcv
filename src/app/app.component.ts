import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: number;
  total: number;
  amount: number;

  value() {
    this.total = 0;
    this.amount = 0;
    if (((<HTMLInputElement>document.getElementById('valueq1')).value) !== 'null') {
      this.total += parseInt((<HTMLInputElement>document.getElementById('valueq1')).value);
      this.amount += 1;
    }

    if (((<HTMLInputElement>document.getElementById('valueq2')).value) !== 'null') {
      this.total += parseInt((<HTMLInputElement>document.getElementById('valueq2')).value);
      this.amount += 1;
    }

    if (((<HTMLInputElement>document.getElementById('valueq3')).value) !== 'null') {
      this.total += parseInt((<HTMLInputElement>document.getElementById('valueq3')).value);
      this.amount += 1;
    }
    this.score = this.total / this.amount;
  }
}
