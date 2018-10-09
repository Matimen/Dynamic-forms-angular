import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Textarea} from '../models/textarea';

@Injectable({
    providedIn: 'root'
})
export class DynamicformService {
    json: any;

    constructor(private  http: HttpClient) {
    }

    getInputs(): Observable<Textarea[]> {
        return this.http.get('../../assets/form.json').pipe(map(data => {
            let inputs: Textarea[] = [];
            this.json = data;
            for(let ind in this.json) {
                let _input: Textarea = {name: ind, value: this.json[ind]};
                inputs.push(_input);
            }
            return inputs;
        }));
    }

}
