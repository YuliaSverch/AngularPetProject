import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstComponent } from './components/first/first.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FontSizeDirective } from './directives/font-size.directive';

@NgModule({
  declarations: [
    FirstComponent,
    HighlightDirective,
    FontSizeDirective
  ],
  exports: [
    FirstComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
