import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "src/app/_service";
import { CurrentUser } from "src/app/_service/store";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private currentUser: CurrentUser,
    private authService: AuthService,
    private router: Router
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>  {
    const { isIspAdmin, isSubscriber, isSuperAdmin, menu_id, level_id } = this.currentUser.getData();
    // if (this.currentUser.getIsUserActive()) {
    //   if (isSuperAdmin) return true;
    //   if (isIspAdmin) return !route.data.allowOnlySuperAdmin;
    //   if (isSubscriber) return !route.data.allowSubscriber;
    //   if (route.data.level_id?.includes(level_id) || menu_id?.includes(route.data.menu_id)) return true;
    // }
    // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } })
    // await this.authService.logout(false);
    return true;
  }
}
