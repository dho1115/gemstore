import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor() { }

  getAvatar(email: string) {
    return "https://2.gravatar.com/avatar" + email;
  }
}
