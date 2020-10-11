import { RemoveBorderDirective } from './td.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        RemoveBorderDirective,
    ],
    exports: [
        RemoveBorderDirective
    ]
})
export class DirectivesModule {}