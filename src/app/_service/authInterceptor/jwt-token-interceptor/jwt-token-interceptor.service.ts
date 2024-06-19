import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CurrentUser,ProcessReqStore } from "../../store";
import { environment as env } from 'src/environments/environment';
import { AuthService } from '../../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
 
@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor(
    private currentUser: CurrentUser,
    private toaster: ToastrService,
    private auth: AuthService,
    private process: ProcessReqStore
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // request count ++
    this.process.addReqCount();
     const token = this.currentUser.getData().token;
    request = request.clone({
      url: env.baseUrl + request.url,
      setHeaders: token
        ? {
          'Authorization': `Bearer ${token}`
        }
        : undefined,
      withCredentials: true
    });
    // this.reqResService.addReqCount();
    return next.handle(request).pipe(
      tap((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this.process.addResCount();
          const resp = evt.body;
          if (resp.error) {
            this.toaster.warning(resp.msg);
          }
          return resp;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.process.addResCount();
        if (error.status === 401) {
          this.auth.logout();
        }
        this.toaster.error(error?.error?.msg || error?.message);
        throw error;
      })
    )
  }
}
