import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * MDB Angular
 */
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
