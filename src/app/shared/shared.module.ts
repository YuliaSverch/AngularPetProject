import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstComponent } from './components/first/first.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FontSizeDirective } from './directives/font-size.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FirstComponent,
    HighlightDirective,
    FontSizeDirective,
    OrderByPipe
  ],
  exports: [
    FirstComponent,
    HighlightDirective,
    OrderByPipe,
    CommonModule,
    FormsModule
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
