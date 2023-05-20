import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { IApp } from './models/app';
import { finalize } from 'rxjs/operators';
import { AppApiService } from './services/api/app-api.service';
import { AppService } from './services/subject/app.service';
import { ToastService, ToastType } from './components/toast/service/toast.service';
import { SubscriptionService } from './services/common/subscription.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.scss'],
})
export class AppComponent {
  // loading state
  loading = false;
  // infor for side menu
  appPages = [
    {
      title: 'Money Management',
      url: '/home',
      icon: 'management'
    }, {
      title: 'Fund My Purchase',
      url: '/fund',
      icon: 'fund'
    }, {
      title: 'Notifications',
      url: '/notifications',
      icon: 'notifications'
    }, {
      title: 'Talk to Miliu',
      url: '/talk',
      icon: 'talk'
    }, {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }, {
      title: 'Logout',
      url: '/start',
      icon: 'logout'
    }
  ];

  // start page show or not
  startPageShow = true;
  // info in side-menu and home page
  pp?: IApp;
  constructor(
    private subscriptionService: SubscriptionService,
    private toastService: ToastService,
    private appApiService: AppApiService,
    private appService: AppService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }
  /**
   * close menu
   * */
  menuClose() {
    this.menu.enable(false, 'side');
    this.menu.close('side');
  }

  /**
   * init app
   * */
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this._getAppData();

    document.documentElement.style.fontSize =
      document.documentElement.clientWidth / 10.8 + 'px';

  }
  /**
   * get app data
   */
  private _getAppData(): void {
    const sub = this.appApiService.getApp()
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (res: IApp): void => {
          if (!res) { return; }
          this._onAppLoaded(res);
        },
        error: e => {
          this.toastService.open({
            type: ToastType.error,
            message: e.message,
          });
        },
      });

    this.subscriptionService.store('_getAppData', sub);
    this.loading = true;
  }

  /**
    * handle app data loaded
    * @param res  app data
    */
  private _onAppLoaded(res: IApp): void {
    this.pp = res;
    this.appService.app = res;

  }
}
