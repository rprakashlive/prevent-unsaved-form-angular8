import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './user/personal-detail/personal-detail.component';
import { ContactDetailComponent } from './user/contact-detail/contact-detail.component';
import {PreventUnsavedChangesGuard} from '../app/prevent';
import { ModelDialogueComponent } from './model-dialogue/model-dialogue.component'
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    ContactDetailComponent,
    ModelDialogueComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
