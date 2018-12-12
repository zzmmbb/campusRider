/!*http拦截器*!/
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError ,  mergeMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  //private proxy = 'api-zdxh';
  //private realUrl = 'http://localhost/api-zdxh/v2';

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
     req = req.clone({ headers: req.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8') });
    //req = req.clone({url: req.url.replace(this.proxy,this.realUrl)});
    const authReq = req.clone({ headers: req.headers.set('JZAPPTOKEN', 'FIRST_ACCESS') });
    return next.handle(req).pipe(mergeMap((event: any) => {
        if (event instanceof HttpResponse && event.status != 200) {
          return ErrorObservable.create(event);
        }
        return Observable.create(observer => observer.next(event)); //请求成功返回响应
      }),
      catchError((res: HttpResponse<any>) => {   //请求失败处理
        return ErrorObservable.create(res);
      }));
  }
}
