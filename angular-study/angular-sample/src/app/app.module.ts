import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppMaterialModule} from './app-material.module';
import {AboutComponent} from './about.component';
import {IndexComponent} from './index.component';
import {AppRoutingModule} from './app-routing.module';
import {ClientInfoService} from './client-info.service';
import {ClientInfoComponent} from './client-info.component';
import {DataBindComponent} from './data-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IndexComponent,
    ClientInfoComponent,
    DataBindComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ClientInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
