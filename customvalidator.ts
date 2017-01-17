import {Control} from 'angular2/common';

export class CustomValidator{
    static underscorecheck(control: Control){
        if(Control.value.indexOf('_')>=0)
        return null;
        
        return {underscorenotfound: true};
    }
}

