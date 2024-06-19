import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CurrentUserDetails } from 'src/app/interface';

const subscribe: BehaviorSubject<CurrentUserDetails> =
    new BehaviorSubject<CurrentUserDetails>({
        token: '',
        isSuperAdmin: false,
        isIspAdmin: false,
        isSubscriber: false,
        level_id: 0,
        menu_id: [],
        username: '',
        company: ''
    });

@Injectable({
    providedIn: 'root',
})
export class CurrentUser {
    setData(currentUser: CurrentUserDetails) {
        subscribe.next({
            ...subscribe.getValue(),
            ...currentUser,
        });
    }

    clear(): void {
        subscribe.next({
            token: '',
            isIspAdmin: false,
            isSubscriber: false,
            isSuperAdmin: false,
            level_id: 0,
            menu_id: [],
            company: '',
            username: ''
        });
    }

    getIsUserActive() {
        return localStorage.getItem('current_user');
    }

    getData(): CurrentUserDetails {
        return subscribe.getValue();
    }

    getSubscribe() {
        return subscribe;
    }
}
