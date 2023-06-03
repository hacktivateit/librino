import { Injectable } from '@angular/core';

const token = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(token);
    window.sessionStorage.setItem(token, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(token);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(token);
    if (user) {
      return true;
    }

    return false;
  }
}

