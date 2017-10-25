import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.html'
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
