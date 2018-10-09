import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DynamicformService} from '../../services/dynamicform.service';

@Component({
    selector: 'app-dynamicform',
    templateUrl: './dynamicform.component.html',
    styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent implements OnInit {
    inputs = [];
    form: FormGroup;

    constructor(private fb: FormBuilder, private dfService: DynamicformService) {
    }

    ngOnInit() {
        this.form = this.createForm();
    }
    createForm() {
        const group = this.fb.group({});
        this.dfService.getInputs().subscribe(data => {
            this.inputs = data;
            data.forEach(control => group.addControl( control.value.name, this.fb.control('', [Validators.required])));
            console.log(this.inputs);
        });
        return group;
    }
    onSubmitForm() {
        console.log(this.form.value);
    }
}
