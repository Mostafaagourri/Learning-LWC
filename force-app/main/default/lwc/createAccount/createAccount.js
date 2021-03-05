import { LightningElement,track } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';

export default class CreateAccount extends LightningElement 
{
@track Name;
@track RS;
@track NE;

accountNameChangeHandler(event)
{
    this.Name = event.target.value;
}
accountrsChangeHandler(event)
{
    this.RS = event.target.value;
}
accountneChangeHandler(event)
{
    this.NE = event.target.value;
}
createAccount()
 {
        const fields={'Name': this.Name ,'Raison_sociale__c': this.RS ,'NumberOfEmployees':this.NE};
        const recordimput = {apiName :'Account',fields};
        createRecord(recordimput).then(response=>{
            console.log('Account created succefully')
        }).catch(error=>{
            console.log('Error in creating account: ',error.body.message);
        }) ;  
    }
}