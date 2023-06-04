import { Injectable } from '@angular/core';

const token = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  clean(): void {
    localStorage.clear();
  }

  saveUser(user: any): void {
    localStorage.removeItem(token);
    localStorage.setItem(token, JSON.stringify(user));
  }

  getUser(): any {
    const user = localStorage.getItem(token);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem(token);
    if (user) {
      return true;
    }
    return false;
  }
}

