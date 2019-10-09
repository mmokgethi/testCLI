import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EmailBlastComponent } from './email-blast/email-blast.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [AdminComponent, EmailBlastComponent, UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EmailBlastComponent,
    UsersComponent,
    AdminComponent,
  ]
})
export class AdminModule { }

export class GenerateMails {
  constructor() {}
  genMails(mailHolder: any[], mailCounter: any) {
    for (mailCounter = 0; mailCounter < mailHolder.length; mailCounter++) {
      if (mailHolder[mailCounter] === '' || mailHolder[mailCounter] === null) {
        if (!(mailHolder[mailCounter] === isNaN)) {
          mailHolder[mailCounter] = ValidityState.call;
          mailCounter++;
        }
      } else if  (mailHolder[mailCounter] ) {

      }
    }
  }
}
