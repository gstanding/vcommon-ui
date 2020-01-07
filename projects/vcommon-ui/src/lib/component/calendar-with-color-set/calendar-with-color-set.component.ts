/*
 * @Author: your name
 * @Date: 2019-12-13 15:25:19
 * @LastEditTime: 2019-12-17 15:26:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ViaeouCommonUI/projects/vcommon-ui/src/lib/component/calendar-with-color-set/calendar-with-color-set.component.ts
 */
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepicker } from '@angular/material/datepicker';
import { CalendarWithColorSetConfig } from './calendar-with-color-set.config';
@Component({
  selector: 'VComm-calendar-with-color-set',
  templateUrl: './calendar-with-color-set.component.html',
  styleUrls: ['./calendar-with-color-set.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class CalendarWithColorSetComponent implements OnInit {
  @Input() 
  public set config(value: CalendarWithColorSetConfig) {
    this._setting = value;
  }
  constructor() { }
  @ViewChild('picker', {static: true}) picker: MatDatepicker<any>;

  _setting: CalendarWithColorSetConfig;

  _inputHeight = -1;
  _margin = -1;
  
  @Output() dateChange = new EventEmitter();
  @Output() clearDate = new EventEmitter();

  ngOnInit() {
    this._inputHeight = this._setting.inputHeight;
    this._margin = (this._inputHeight - 18) / 2;
  }

  set() {
    if (this._setting.rescalePanel) {
      let _width = document.getElementById('dateInputWrapper').offsetWidth;
      console.log(_width)
      let _height = _width * 1.25;
      let _attr = 'width: ' + _width + 'px;' 
                + 'height: ' + _height + 'px';
      document.getElementsByClassName('mat-calendar')[0].setAttribute('style', _attr);
    } else {
      let _height = this._setting.panelHeight ? this._setting.panelHeight : this._setting.panelWidth * 1.25;
      let _attr = 'width: ' + this._setting.panelWidth + 'px;'
                + 'height: ' + _height + 'px';
      document.getElementsByClassName('mat-calendar')[0].setAttribute('style', _attr);
    }
  }

  open() {
    this.picker.open();
  }

  doClean($event) {
    this._setting.date = null;
    this.clearDate.emit($event);

  }
  dateChangeEvent($event) {
    this.dateChange.emit($event.value._d);
    this._setting.date = $event.value._d;
  }

}
