import { BrowserModule } from '@angular/platform-browser';
/**
 * MDB Angular
 */
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainCarouselComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
