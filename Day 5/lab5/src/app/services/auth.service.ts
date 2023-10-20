import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private http: HttpClient) { }

  login(user: User) {
      this.http.post<any>('http://localhost:3000/User', user)
        .pipe(
          tap(response => {
              if (response.email && response.password) {
                localStorage.setItem('user', JSON.stringify(response));
                this.loggedIn.next(true);
                this.router.navigate(['/products']);
              }
          })
        )
        .subscribe();
    
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}