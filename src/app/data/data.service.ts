import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  postUserSettings(userSettings:UserSettings): Observable<any>{
    //return of(userSettings)
    return this.http.post('https://putsreq.com/uqH4uqWPKap7a0xKnM7e',userSettings)
  }
  getsubscriptionType(): Observable<string[]>{
    return of(["Monthly","Annual","Lifetime"])
  }
}
