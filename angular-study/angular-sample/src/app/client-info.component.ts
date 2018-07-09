import {Component, OnInit} from '@angular/core';
import {ClientInfo, ClientInfoService} from './client-info.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';

@Component({
  template: `
    <mat-table #table [dataSource]="dataSource">
      <ng-container matColumnDef="key">
        <mat-header-cell *matHeaderCellDef>项目</mat-header-cell>
        <mat-cell *matCellDef="let row"> {{row.key}}</mat-cell>
      </ng-container>
      <ng-container matColumnDef="value">
        <mat-header-cell *matHeaderCellDef>值</mat-header-cell>
        <mat-cell *matCellDef="let row"> {{row.value}}</mat-cell>
      </ng-container>
      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
    </mat-table>
  `,
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
