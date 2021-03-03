import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    @track currenttext;
    number1;
    number2;

    Numberonehandler(event)
    {
        this.number1=parseInt(event.target.value) ;
    }
    Numbertwohandler(event)
    {
        this.number2=parseInt(event.target.value) ;
    }
    savehandler(event)
    {
        this.currenttext = 'result is '+(this.number1 * this.number2);
    }
}