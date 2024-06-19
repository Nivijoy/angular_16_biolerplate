import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// import {} from '../interface';
import { CurrentUser } from '../store';
const current_user_storage_name = 'current_user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private currentUser: CurrentUser,
        private router: Router
    ) {}

    async login(body = {}) {
        // const resp = await this.http
        //     .post<ApiCurrentUserDetailsResp>('/auth/login', body)
        //     .toPromise();
        // if (resp && !resp.error) {
        //     localStorage.setItem(
        //         current_user_storage_name,
        //         JSON.stringify(resp)
        //     );
        //     this.currentUser.setData({
        //         token: resp.token,
        //         isIspAdmin: resp.isIspAdmin,
        //         isSubscriber: resp.isSubscriber,
        //         isSuperAdmin: resp.isSuperAdmin,
        //         level_id: resp.level_id,
        //         menu_id: resp.menu_id,
        //         company: resp.company,
        //         username: resp.username
        //     });
        // }
        // return resp;
    }

    async logout(needNavigate: boolean = true): Promise<void> {
        // localStorage.removeItem(current_user_storage_name);
        // this.currentUser.clear();
        // const resp: Resp | undefined = await this.http
        //     .get<Resp | undefined>('/auth/logout')
        //     .toPromise();
        // if (resp && !resp.error && needNavigate) {
        //     const returnUrl = this.router.routerState.snapshot.url;
        //     this.router.navigate(['/'], { queryParams: { returnUrl } });
        // }
    }
}
