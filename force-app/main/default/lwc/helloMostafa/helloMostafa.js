import { LightningElement,track } from 'lwc';

export default class HelloMostafa extends LightningElement 
{
    @track greeting = "Mostafa";
    changehandler(event)
    {
        this.greeting = event.target.value;
    }
}