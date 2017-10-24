import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    {path: '/', text: '主页'},
    {path: '/databind', text: '数据绑定'},
    {path: '/clientinfo', text: '客户端信息'},
    {path: '/about', text: '关于'},
  ];
}
