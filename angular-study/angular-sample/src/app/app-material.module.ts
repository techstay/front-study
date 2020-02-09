import {NgModule} from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ]
})
export class AppMaterialModule {

}
