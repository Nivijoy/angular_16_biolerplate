import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { routes } from '../../components/navigation';
// import {routes } from '../nav_data';
import { AuthService } from 'src/app/_service';
import { CurrentUser } from 'src/app/_service/store';
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent implements OnInit, AfterViewInit, OnDestroy {
  menus;
  event$!: Subscription;
  current_path = window.location.pathname;
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  sidenavOpened = true; // Default state of sidenav
  isMobile = false;
  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
  constructor(
    private authService: AuthService,
    private currentUser: CurrentUser,
    private observer: BreakpointObserver,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {
   
    const { isIspAdmin, isSubscriber, isSuperAdmin, menu_id, level_id } =
      this.currentUser.getData();
    this.menus = routes.filter(({ data }) => {
      // if (data?.allowAll) return true;
      // if (isSuperAdmin) return true;
      // if (isIspAdmin) return !data?.allowOnlySuperAdmin;

      // const all_menu = this.getMenuAccess(data);
      // if (
      //   data?.level_id?.includes(level_id) ||
      //   menu_id?.some((m_id) => all_menu.some((am_id) => am_id == m_id))
      // ) {
      //   if (data?.children) {
      //     data.children = data.children.filter(({ menu_id: c_menu_id }) =>
      //       c_menu_id?.some((cm_id) => menu_id?.some((m_id) => cm_id == m_id))
      //     );
      //   }
      //   return true;
      // }

      return true;
    });
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        this.current_path = event.url;
      }
    });
  }

  getMenuAccess(data) {
    if (!data) return [];
    const all_menu_id: number[] = [];
    if (data.children) {
      data.children.forEach(({ menu_id }) => {
        if (menu_id) all_menu_id.push(...menu_id);
      });
    } else {
      if (data.menu_id) all_menu_id.push(...data.menu_id);
    }
    return all_menu_id;
  }

  async ngOnInit(): Promise<void> {}
  // ngAfterViewInit() {
  //   this.sidenav.mode = 'over';
  // }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
        this.cdRef.detectChanges();
      });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.event$.unsubscribe();
  }
}
