import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { FormGroup }     from '@angular/forms';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';

export interface FormComponent {
    form: FormGroup;
}
@Injectable()
export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent> {
    constructor(private confirmationDialogService: ConfirmationDialogService){}
    canDeactivate(component: FormComponent) {
         console.log("component",component);
        if (component['sampleForm'].dirty ) {
        return this.confirmationDialogService.confirm('Please confirm..', 'You have unsaved changes. Are you sure you want to navigate away?')
        .then((confirmed) => 
        {
            return true;
        })
      .catch(() => {
        console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)')
        return false;
      });
        // return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        // return true;
        } else {
            return true;
        }
    } 
}