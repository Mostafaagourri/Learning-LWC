import { LightningElement,track } from 'lwc';

export default class EmployeDetails extends LightningElement {

    @track name;
    @track salary;
    @track age;
    @track exp;

    Namehandler(event)
    {
        this.name = event.target.value
    }
    Agehandler(event)
    {
        this.age = event.target.value
    }
    Salaryhandler(event)
    {
        this.salary = event.target.value
    }
    Exphandler(event)
    {
        this.exp = event.target.value
    }

}