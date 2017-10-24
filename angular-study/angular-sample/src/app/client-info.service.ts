import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import platform from 'platform';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientInfoService {
  private static ipUrl = 'http://httpbin.org/ip';

  constructor(private httpClient: HttpClient) {

  }

  getClientInfo(): Promise<ClientInfo[]> {
    return new Promise((resolve, reject) => {
      const clientInfo: ClientInfo[] = [];
      clientInfo.push({key: '操作系统', value: `${platform.os}`});
      clientInfo.push({key: '浏览器', value: `${platform.name} ${platform.version}`});
      clientInfo.push({key: '用户代理', value: platform.ua});
      this.httpClient.get(ClientInfoService.ipUrl)
        .subscribe(data => {
          clientInfo.push({key: 'IP地址', value: data['origin']});
          resolve(clientInfo);
        }, err => {
          reject(err);
        });
    });
  }
}

export interface ClientInfo {
  key: string;
  value: string;
}
