import {Component, OnInit} from '@angular/core';
import {ClientInfo, ClientInfoService} from '../client-info.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  dataSource: ClientInfoDataSource;
  displayedColumns = ['key', 'value'];

  constructor(private clientInfoService: ClientInfoService) {
  }


  ngOnInit(): void {
    this.dataSource = new ClientInfoDataSource(this.clientInfoService);
  }
}

class ClientInfoDataSource implements DataSource<any> {
  constructor(private clientInfoService: ClientInfoService) {
  }

  connect(): Observable<ClientInfo[]> {
    return this.clientInfoService.getClientInfo();
  }

  disconnect(): void {
  }

}
