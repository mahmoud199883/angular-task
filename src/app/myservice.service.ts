import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor(public _HttpClent:HttpClient) { }
  getData():Observable<any>
  {
    return this._HttpClent.get(`http://localhost:3000/articles`)
  }

  postData(Data:any):Observable<any>
  {
    return this._HttpClent.post(`http://localhost:3000/articles`,Data)
  }


}
