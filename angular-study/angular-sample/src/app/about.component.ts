import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
<mat-card>
  <mat-card-title>关于</mat-card-title>
  <mat-card-content>我做的一个Angular和Angular-Material的练习项目</mat-card-content>
</mat-card>
  `,
})
export class AboutComponent {
  title = '关于';
}
