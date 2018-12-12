/**
 * 全局下的统一参数  应用下可全局调用 比如登录信息等数据 共享同一个实例 AppModule下定义
 * 所有模块（module）共享
 * 不要在组件的providers属性中再次定义它 否则将为该组件及其子组件创建一个新的服务实例。
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {HttpParams} from '../../node_modules/@angular/common/http';
import {LoadingController, ToastController} from 'ionic-angular';

@Injectable()
export class UniteParameter {

  ApiPath = 'http://192.168.0.103/api-zdxh/v2/';
  WSMsgPath ='ws://192.168.0.103/api-zdxh/v2/';
  WebPath = 'http://192.168.0.103/zdxhweb/';
  loading = null;

  /**
   *
   * @param http
   * @param storage
   * @param toastCtrl
   * @param loadingCtrl
   */
  constructor(private http: HttpClient,
              private storage:Storage,
              private toastCtrl: ToastController,private loadingCtrl: LoadingController) {
  }

  /**
   *
   * @param message 消息
   * @param duration  存在时间 毫秒: 3000
   * @param position  消息位置 top | bottom | middle
   */
  presentToast(message,duration,position) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });
    toast.present();
  }

  /**
   *  http 请求 统一处理
   * @param url
   * @param value  键值对 ： {key:value}
   */
  post(url,value) : Observable<any> {
    const params = new HttpParams({fromObject: value});
    return new Observable(
      observer => {
        this.http.post(url, params)
          .subscribe((data: any) => {
            if(data['code'] == '-1' || data['code'] == '1') {
              this.presentToast(data['message'], 3000, 'middle');
            }
            setTimeout(() => {
              if(this.loading != null){
                this.loading.dismiss();
                this.loading = null;
              }
            }, 1000);
            observer.next(data);
          }, response => {
            if(response['status'] == '504') {
              this.presentToast(response['status'] + '：连接超时了呢！请检查您的网络是否开启', 3000, 'middle');
            }else {
              this.presentToast(response['status'] + '：未知的错误!', 3000, 'middle');
            }
            setTimeout(() => {
              if(this.loading != null){
                this.loading.dismiss();
                this.loading = null;
              }
            }, 1000);
            observer.next(response);
          });
      })
  }

  /**
   * 遮蔽层
   * @param content html 内容： 请稍后、加载中
   * @param showbackdrop 是否显示背景
   * @param spinner svg名称
   */
  showLoading(content, showbackdrop , spinner ) {
    this.loading = this.loadingCtrl.create({
      content: content,
      showBackdrop: spinner,
      spinner: spinner
    });
    this.loading.present();
  }

}
