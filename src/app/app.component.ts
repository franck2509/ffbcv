import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: number;
  total: number;
  amount: number;
  text = [];

  selectScales = [
    {value: 'null', display: 'Not Applicable'},
    {value: '0', display: 'Weak'},
    {value: '50', display: 'Moderate'},
    {value: '100', display: 'Strong'},
    {value: '150', display: 'Outstanding'}
  ];


  value() {
    this.text = ["Value Check"]
    this.total = 0;
    this.amount = 0;

    if (((<HTMLInputElement>document.getElementById('valueq1')).value) !== 'null') {
      this.total += parseInt((<HTMLInputElement>document.getElementById('valueq1')).value);
      this.amount += 1;
    }
    this.text.push("Customer Needs: "+ (<HTMLInputElement>document.getElementById('valueq1')).value);
    this.text.push((<HTMLInputElement>document.getElementById('textq1')).value);

    if (((<HTMLInputElement>document.getElementById('valueq2')).value) !== 'null') {
      this.total += parseInt((<HTMLInputElement>document.getElementById('valueq2')).value);
      this.amount += 1;
    }
    this.text.push("Market Opportunity: "+ (<HTMLInputElement>document.getElementById('valueq2')).value);
    this.text.push((<HTMLInputElement>document.getElementById('textq2')).value);

    if (((<HTMLInputElement>document.getElementById('valueq3')).value) !== 'null') {
      this.total += parseInt((<HTMLInputElement>document.getElementById('valueq3')).value);
      this.amount += 1;
    }
    this.text.push("Solution: "+ (<HTMLInputElement>document.getElementById('valueq3')).value);
    this.text.push((<HTMLInputElement>document.getElementById('textq3')).value);

    this.score = this.total / this.amount;
    this.text.push("Score: " + this.score.toString())
  }

  savePDF(){
    this.value();
    const doc = new jsPDF();
    doc.text(this.text,10,10);
    doc.save("prototyp.pdf");

  }
}
