import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SubscriptionService } from 'src/app/services/common/subscription.service'; 
//import { ToastModule } from './components/toast/toast.module';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        //ToastModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        SubscriptionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
