
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
 
 
// import module elements
import {
    LightningElement,
    wire,
    track
} from 'lwc';
 
//import method from the Apex Class
import fetchAccounts from '@salesforce/apex/FetchAccount.FetchAccount';
 
// Declaring the columns in the datatable
const columns = [{
        label: 'View',
        type: 'button-icon',
        initialWidth: 75,
        typeAttributes: {
            iconName: 'action:preview',
            title: 'Preview',
            variant: 'border-filled',
            alternativeText: 'View'
        }
    },
    {
        label: 'Name',
        fieldName: 'Name'
    },
    {
        label: 'Phone',
        fieldName: 'Phone'
    },
    {
        label: 'Type',
        fieldName: 'Type'
    }
];
 
// declare class to expose the component
export default class DataTableComponent extends LightningElement {
    @track columns = columns;
    @track record = {};
    @track rowOffset = 0;
    @track data = {};
    @track bShowModal = false;
    @wire(fetchAccounts) parameters;
 
    // Row Action event to show the details of the record
    handleRowAction(event) {
        const row = event.detail.row;
        this.record = row;
        this.bShowModal = true; // display modal window
    }
 
    // to close modal window set 'bShowModal' tarck value as false
    closeModal() {
        this.bShowModal = false;
    }
}


 
 