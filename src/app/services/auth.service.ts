import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  loggedIn$ = new BehaviorSubject<boolean>(false);

  labForWebLogin = (body: {username: string, password: string}): Observable<Object> => {
    return this.http.post('http://api.labforweb.it/backend/web/index.php/1/authorize', body);
  }  

}
