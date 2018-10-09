import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
    form = new FormGroup({});
    model: any = {};
    fields: FormlyFieldConfig[] = [
        {
            key: 'text',
            type: 'input',
            templateOptions: {
                label: 'Text',
                placeholder: 'Type here to see the other field become enabled...',
            },
        },
        {
            key: 'text2',
            type: 'input',
            templateOptions: {
                label: 'Hey!',
                placeholder: 'This one is disabled if there is no text in the other input',
            },
            expressionProperties: {
                'templateOptions.disabled': '!model.text',
            },
        },
    ];

    submit() {
        alert(JSON.stringify(this.model));
    }


  constructor() { }

  ngOnInit() {
  }

}
