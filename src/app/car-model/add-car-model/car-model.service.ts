import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarModelService {
  constructor(private http: HttpClient) {};

  public saveCarModel(object: any) {
    return this.http.post(`${environment.apiGatewayUrl}/v1/car-model`, object);
  }

}
