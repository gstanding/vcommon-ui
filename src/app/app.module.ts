/*
 * @Author: your name
 * @Date: 2019-12-12 14:42:37
 * @LastEditTime: 2019-12-17 18:26:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ViaeouCommonUI/src/app/app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { VCommonUIModule } from 'projects/vcommon-ui/src/lib/vcommon-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VCommonUIModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
