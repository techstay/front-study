import {NgModule} from '@angular/core';
import {
  MatTabsModule,
  MatCardModule,
  MatTableModule,
  MatSnackBarModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
} from '@angular/material';

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
