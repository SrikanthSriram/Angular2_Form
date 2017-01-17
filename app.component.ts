import {Component} from 'angular2/core';
import {Control, ControlGroup, FormBuilder, Validator} from 'angular2/common';
import {CustomValidator} from './customvalidator';

@Component({
    selector: 'my-app',
    templateUrl:'dev/form.html'
})

export class AppComponent {
    form: ControlGroup;
    Constructor (formbuilder: FormBuilder){
        this.form = formbuilder.group({
            username : ['', Validator.compose([Validator.required, CustomValidator.underscorecheck])],
            password: []
        })
    }
}