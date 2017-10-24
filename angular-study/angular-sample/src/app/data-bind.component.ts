import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-data-bind',
  template: `<mat-card>
  <mat-card-title>模板语法</mat-card-title>
  <mat-card-content>
    <h2>显示数据</h2>
    <p>显示单个数据:{{count}}</p>
    <p>选择显示数据:
      <button (click)="seen=!seen">切换显示</button>
      <span *ngIf="seen">能不能看见我</span>
    </p>
    列表显示数据:
    <ul>
      <li *ngFor="let name of names">
        {{name}}
      </li>
    </ul>

    <h2>单向绑定</h2>
    <p>
      <button (click)="addCount()">更新计数</button>
      {{count}}
    </p>
    <h2>双向绑定(ngModel)</h2>
    <input type="text" [(ngModel)]="username"/>
    <p>{{username}}</p>
  </mat-card-content>
</mat-card>
  `
})

export class DataBindComponent {
  count = 0;
  seen = true;
  names = ['yitian', '张三', '李四'];
  username = 'yitian';

  addCount(): void {
    this.count++;
  }
}
