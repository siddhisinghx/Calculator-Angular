import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentNumber='0';
  firstOperand:any=null;
  operator:any=null;
  waitForSecondNumber=false;

  constructor() { }

  ngOnInit(): void {

  }

  public allClear(){
    this.currentNumber='0';
  this.firstOperand=null;
  this.operator=null;
  this.waitForSecondNumber=false;
  }


  // Read values
  public getNumber(v:string){
    console.log(v);
     if(this.waitForSecondNumber){
       this.currentNumber=v;
       this.waitForSecondNumber=false;
     }else{
       this.currentNumber==='0'?this.currentNumber=v:this.currentNumber+=v;
     }
  }

   public getDecimal(){
     if(!this.currentNumber.includes('.')){
       this.currentNumber+='.';
     }
   }

   private doCalculation(op:any,secondOp:any){
     switch(op){
       case '+':
         return this.firstOperand+=secondOp;
         case '-':
          return this.firstOperand-=secondOp;
          case '*':
         return this.firstOperand*=secondOp;
         case '/':
          return this.firstOperand/=secondOp;
          case '=':
            return secondOp;
     }
   }





  //5+5+6
   public getOperattions(op:string){
     console.log("operator"+op);
     if(this.firstOperand===null){
       this.firstOperand=Number(this.currentNumber);
     }else if(this.operator){
        const result=this.doCalculation(this.operator,Number(this.currentNumber));
        this.currentNumber=String(result);
        this.firstOperand=result;
     }

     this.operator=op;
     this.waitForSecondNumber=true;
      console.log(this.firstOperand);
   }


}