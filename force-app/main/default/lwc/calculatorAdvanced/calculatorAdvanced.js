import { LightningElement,track } from 'lwc';

export default class CalculatorAdvanced extends LightningElement 
{
    @track currenttext;
    number1;
    number2;
    IsError = false;

    Numberonehandler(event)
    {
        this.number1=parseInt(event.target.value);
    }
    Numbertwohandler(event)
    {
        this.number2=parseInt(event.target.value) ;
    }
    plushandler(event)
    {
        this.currenttext  =  'the result of operation is : '+(this.number1 + this.number2);
    }
    minhandler(event)
    {
        this.currenttext = 'the result of operation is :'+(this.number1 - this.number2);
    }
    mulhandler(event)
    {
        this.currenttext = 'the result of operation is : '+(this.number1 * this.number2);
    }
    divhandler(event)
    {
        if(this.number2 == 0){
            this.IsError = true;
            this.currenttext = 'Error we cant do this operation';
        }
        else{
            this.IsError = false;
            this.currenttext = 'the result of operation is : '+(this.number1 / this.number2);
        }
        
    }
}