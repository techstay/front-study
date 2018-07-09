import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import platform from 'platform';

import {Observable, of} from 'rxjs';
import {catchError, map, tap, startWith} from 'rxjs/operators';

@Injectable()
export class ClientInfoService {
  private static ipUrl = 'http://httpbin.org/ip';

  constructor(private httpClient: HttpClient) {

  }

  getClientInfo(): Observable<ClientInfo[]> {
    const clientInfo: ClientInfo[] = [];
    clientInfo.push({key: '操作系统', value: `${platform.os}`});
    clientInfo.push({key: '浏览器', value: `${platform.name} ${platform.version}`});
    clientInfo.push({key: '用户代理', value: platform.ua});
    return this.httpClient.get(ClientInfoService.ipUrl)
      .pipe(
        map(data => data['origin']),
        catchError(this.handleError('获取IP地址', '网络错误')),
        map(e => clientInfo.concat([{key: 'IP地址', value: e}])),
        startWith(clientInfo)
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

export interface ClientInfo {
  key: string;
  value: string;
}
