import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  redirectUrl: string;
  isConnected = false;
  constructor(private http: HttpClient) { }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(environment.URL + '/users/' + id).pipe();
  }
  public login(user: User): Observable<any> {
    return this.http.post(environment.URL + '/auth/local', user).pipe();
  }

}
