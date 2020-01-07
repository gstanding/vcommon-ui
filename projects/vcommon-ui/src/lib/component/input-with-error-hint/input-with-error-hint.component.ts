/*
 * @Author: your name
 * @Date: 2019-12-12 14:54:13
 * @LastEditTime: 2019-12-17 17:11:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ViaeouCommonUI/projects/vcommon-ui/src/lib/component/input-with-error-hint/input-with-error-hint.component.ts
 */
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'VComm-input-with-error-hint',
  templateUrl: './input-with-error-hint.component.html',
  styleUrls: ['./input-with-error-hint.component.scss']
})
export class InputWithErrorHintComponent implements OnInit {
  // 输入类型text、email、number
  _inputType = 'text';
  @Input()
  public set inputType(value: string) {
    this._inputType = value;
  }

  _maxLength = 10;
  @Input()
  public set maxLength(value: number) {
    this._maxLength = value;
  }

  _minLength = 3;
  @Input()
  public set minLength(value: number) {
    this._minLength = value;
  }

  _fontSize = 18;
  @Input()
  public set fontSize(value: number) {
    this._fontSize = value;
  }

  _needDeleteInput = true;
  @Input()
  public set needDeleteInput(value: boolean) {
    this._needDeleteInput = value;
  }

  _inputValue = ''
  
  numberControl = new FormControl('', [
    Validators.pattern('[0-9]' + '{' + this._minLength + ',' + this._maxLength + '}'),
    Validators.minLength(this._minLength),
    Validators.maxLength(this._maxLength),
  ]);
  emailControl = new FormControl('', [
    Validators.email
  ]);
  textControl = new FormControl('', [
    Validators.minLength(this._minLength),
    Validators.maxLength(this._maxLength),
  ]);

  getErrorMessage(type: string) {
    if (type === 'number') {
      return this.numberControl.hasError('pattern') ? '请输入' + this._minLength + '到' + this._maxLength + '位数字' : '';
    } else if (type === 'email') {
      return this.emailControl.hasError('email') ? '请输入合法的邮箱格式' : '';
    } else {
      return this.textControl.invalid ? '长度在' + this._minLength + '-' + this._maxLength + '之间' : '';
    }
  }

  doClean() {
    this._inputValue = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
