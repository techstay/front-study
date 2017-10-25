import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.html'
})
export class AppNavComponent {
  navLinks = [
    {path: '/databind', label: '数据绑定'},
    {path: '/clientinfo', label: '客户端信息'},
    {path: '/about', label: '关于'},
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'angular',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/angular.svg'));
  }
}
