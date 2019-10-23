import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IConfig } from '@shared/models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configUrl = `${environment.apiUrl}config.json`;

  constructor(private readonly http: HttpClient) {}

  getConfig() {
    return this.http.get<IConfig>(this.configUrl);
  }
}
