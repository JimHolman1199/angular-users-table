import { DirectivesModule } from './../../directives/directives.module';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { TrComponent } from './tr/tr.component';
import { TdComponent } from './td/td.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from '../modal/modal.module';

@NgModule({
    imports:[
        CommonModule,
        ModalModule,
        DirectivesModule
    ],
    declarations: [
        TdComponent,
        TrComponent,
        UserComponent,
        UsersComponent,
    ],
    exports: [
        UsersComponent
    ]
})
export class UserTableModule {}