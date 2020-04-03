import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailComponent  } from './user/personal-detail/personal-detail.component';
import { ContactDetailComponent  } from './user/contact-detail/contact-detail.component';
import {PreventUnsavedChangesGuard} from '../app/prevent'
const routes: Routes = [
  { path: '', redirectTo: '/user/q', pathMatch: 'full' },
  { path: 'user/q',  component: PersonalDetailComponent, canDeactivate: [ PreventUnsavedChangesGuard ]  },
  { path: 'user/c',  component: ContactDetailComponent, canDeactivate: [ PreventUnsavedChangesGuard ]   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
