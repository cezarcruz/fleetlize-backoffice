import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get(`${environment.apiGatewayUrl}/v1/car-manager/manufacturer/`);
  }
}
