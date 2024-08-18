import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class GenericHttpService {
  api: string = environment.baseApi; 

  constructor(private _http: HttpClient) {},

 get<T>(api:string, callback: (res:T) => void){
    this._http.get<T>(`${this.api}/${api}`).subscribe({
      next: (res: T) => callback(res),
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  post<T>(api:string, model:any, callback: (res:T) => void){
    this._http.post<T>(`${this.api}/${api}`, model, {}).subscribe({
      next: (res: T) => callback(res),
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }


}
