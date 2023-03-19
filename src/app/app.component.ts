import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';

  calcValue: number = 0;
  funcT: any = "NoFunction";
  calcNumber: string = "noValue";

  onClickValue(val: string, type: any){
    if(type === "number"){
      this.onNumberClick(val);
    }
  }

  onNumberClick(val: string){
    if(this.calcNumber !== "noValue"){
      this.calcNumber = this.calcNumber + val;
    } else {
      this.calcNumber = val;
    }

    this.calcValue = parseFloat(this.calcNumber);
  }
}
