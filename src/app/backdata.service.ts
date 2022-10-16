import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackdataService {
  private _url: string="http://localhost:8080/";

  constructor(private http:HttpClient) { }
  getData():Observable<string> {
    return this.http.get<string>(this._url, {responseType: 'text' as 'json'});
  }
}
