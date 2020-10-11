import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        UserFormComponent,
        UserEditFormComponent,
    ],
    exports: [
        UserFormComponent,
        UserEditFormComponent,
    ]
})
export class CustomFormsModule {}