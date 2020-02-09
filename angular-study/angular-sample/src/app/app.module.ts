import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AboutComponent} from './about/about.component';
import {ClientInfoComponent} from './client-info/client-info.component';
import {IndexComponent} from './index/index.component';
import {AppRoutingModule} from './app-routing.module';
import {ClientInfoService} from './client-info.service';
import {MatTableModule} from '@angular/material/table';
import {AppNavComponent} from './app-nav/app-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DataBindComponent} from './data-bind/data-bind.component';
import {FormsModule} from '@angular/forms';
import {AppMaterialModule} from './app-material.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ClientInfoComponent,
    IndexComponent,
    AppNavComponent,
    DataBindComponent
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
    ClientInfoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
