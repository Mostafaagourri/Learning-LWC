import { LightningElement,track } from 'lwc';

export default class AccountDetails extends LightningElement {
    @track name;
    @track age;
    @track salary;

    Namehandler(event)
    {
        this.name = event.target.value;
    }
    Agehandler(event)
    {
        this.age = event.target.value;
    }
    Salaryhandler(event)
    {
        this.salary = event.target.value;
    }
}