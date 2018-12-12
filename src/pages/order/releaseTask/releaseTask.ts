import { Component, ViewChild } from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, ModalController} from "ionic-angular";
import {UniteParameter} from "../../../global/uniteParameter";
@IonicPage()
@Component({
  selector: 'page-releaseTask',
  templateUrl: 'releaseTask.html'
})
export class ReleaseTaskPage  {

  @ViewChild('recValueType') recvalueType;
  @ViewChild('recValueLevel') recvalueLevel;
  @ViewChild('recValueMode') recValueMode;

  type: any;
  level: any;
  mode: any;

  constructor(public uniteParameter: UniteParameter,public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController) {
  }

  presentTypeSheet() {
    this.type = [{'id':'食品','text':'食品'},{'id':'饮品','text':'饮品'},
    {'id':'快递','text':'快递'}, {'id':'生活用品','text':'生活用品'}, {'id':'其他物品','text':'其他物品'}];
    this.recvalueType.displayBack();
  }

  presetLevelSelect () {
    this.level = [{'id':'正常','text':'正常'},{'id':'紧急','text':'紧急'}];
    this.recvalueLevel.displayBack();
  }

  presentModeSheet() {
    this.mode = {
      title: '请选择支付方式',
      cancelText: '稍后支付',
      confirmText: '立即支付',
      data: [
        {
          icon: 'jz-wx-icon',
          id:'微信支付',
          text: '微信支付'},
        {
          icon: 'jz-zfb-icon',
          id:'支付宝支付',
          text: '支付宝支付'}
      ]
    };
    this.recValueMode.displayBack();
  }

  recDatatype(event) {
    console.log(event)
  }

  recDatalevel(event) {
    console.log(event)
  }

  recDatamode(event) {
    console.log(event)
    this.recValueMode.hideBack();
  }

}

