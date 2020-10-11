import { CustomFormsModule } from './../forms/forms.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';

@NgModule({
    imports:[
        CommonModule,
        CustomFormsModule
    ],
    declarations: [
        ModalComponent
    ],
    exports: [
        ModalComponent
    ]
})
export class ModalModule {}