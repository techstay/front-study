import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
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
