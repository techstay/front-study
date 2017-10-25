import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  template: `<h1>主页</h1>
  `,
})
export class IndexComponent implements OnInit {
  title = '主页';

  constructor() {

  }

  ngOnInit(): void {

  }
}
