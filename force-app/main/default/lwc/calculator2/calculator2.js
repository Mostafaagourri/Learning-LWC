import { LightningElement,track } from 'lwc';

export default class Calculator2 extends LightningElement {
    @track currentresulat;
    number1;
    number2;
    number3;

    Numberonehandler(event)
    {
        this.number1=parseInt(event.target.value) ;
    }
    Numbertwohandler(event)
    {
        this.number2=parseInt(event.target.value) ;
    }
    Numberthreehandler(event)
    {
        this.number3=parseInt(event.target.value) ;
    }
    savehandler(event)
    {
        this.currentresulat = 'The result is '+(this.number1*this.number2/this.number3);
    }
}