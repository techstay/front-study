import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AboutComponent} from './about/about.component';
import {ClientInfoComponent} from './client-info/client-info.component';
import {DataBindComponent} from './data-bind/data-bind.component';

const routes: Routes = [
  {path: '', component: IndexComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'clientinfo', component: ClientInfoComponent},
  {path: 'databind', component: DataBindComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
