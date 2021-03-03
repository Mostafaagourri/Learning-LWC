import { LightningElement,track } from 'lwc';

export default class EmployeInformations2 extends LightningElement {
    @track name;
    @track salary;
    @track age;
    @track exp;
    @track infos = true;

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
    Exphandler(event)
    {
        this.exp = event.target.value;
    }
    Adrhandler(event)
    {
        this.adr = event.target.value;
    }
    savehandler(event)
    {
        this.infos = false;
    }

}