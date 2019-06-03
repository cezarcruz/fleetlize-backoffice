import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarModelService {
  constructor(private http: HttpClient) {};

  public saveCarModel(object: any) {
    return this.http.post('http://localhost:8080/car-model', object);
  }

}
