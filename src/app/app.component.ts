/*
 * @Author: your name
 * @Date: 2019-12-12 14:42:37
 * @LastEditTime: 2019-12-17 18:41:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ViaeouCommonUI/src/app/app.component.ts
 */
import { Component } from '@angular/core';
import { CalendarWithColorSetConfig } from 'projects/vcommon-ui/src/lib/component/calendar-with-color-set/calendar-with-color-set.config';

@Component({
  selector: 'via-comm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  shouldRun = true;
  title = '组件库测试';
  setting1: CalendarWithColorSetConfig = {
    inputWidth: 350,
    inputHeight: 27,
    iconColor: 'blue',
    date: new Date(),
    startDate: new Date('1987-04-08'),
    endDate: new Date(),
    rescalePanel: false,
    panelHeight: 356,
    panelWidth: 298,
    placeholder: '选择日期哦',
    needClear: true
  };
  setting2: CalendarWithColorSetConfig = {
    inputWidth: 350,
    inputHeight: 27,
    iconColor: 'blue',
    date: new Date(),
    startDate: new Date('1987-04-08'),
    endDate: new Date(),
    rescalePanel: true,
    panelHeight: 356,
    panelWidth: 298,
    placeholder: '选择日期哦',
    needClear: false
  };

  listenClear() {
    console.log('clear!!')
  }
}
