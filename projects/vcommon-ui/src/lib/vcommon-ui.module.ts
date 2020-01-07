/*
 * @Author: your name
 * @Date: 2019-12-12 14:46:42
 * @LastEditTime: 2019-12-17 14:34:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ViaeouCommonUI/projects/vcommon-ui/src/lib/vcommon-ui.module.ts
 */
import { NgModule } from '@angular/core';
import { InputWithErrorHintComponent } from './component/input-with-error-hint/input-with-error-hint.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarWithColorSetComponent } from './component/calendar-with-color-set/calendar-with-color-set.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [InputWithErrorHintComponent, CalendarWithColorSetComponent],
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [InputWithErrorHintComponent, CalendarWithColorSetComponent]
})
export class VCommonUIModule { }
