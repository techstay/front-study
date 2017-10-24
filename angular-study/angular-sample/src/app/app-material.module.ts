import {NgModule} from '@angular/core';
import {
  MatTabsModule,
  MatCardModule,
  MatTableModule,
  MatSnackBarModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatListModule,
  ],
  exports: [
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatListModule,
  ]
})
export class AppMaterialModule {

}
