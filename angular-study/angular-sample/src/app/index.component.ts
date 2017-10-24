import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  template: `<mat-card>
  <mat-card-title>主页</mat-card-title>
  <mat-card-content></mat-card-content>
</mat-card>
  `,
})
export class IndexComponent implements OnInit {
  title = '主页';

  constructor() {

  }

  ngOnInit(): void {

  }
}
