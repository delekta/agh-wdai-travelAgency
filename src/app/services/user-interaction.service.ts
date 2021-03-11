import { Injectable } from '@angular/core';
import { WebsiteUser } from '../user/user';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInteractionService {
  // private _currentUser = new Subject<WebsiteUser>();
  private _currentUser = new BehaviorSubject<WebsiteUser>(null);
  // private _currentUserBehavior = new BehaviorSubject<WebsiteUser>(null);
  user$ = this._currentUser.asObservable()

  constructor() { }

  sendCurrentUser(user: WebsiteUser){
    this._currentUser.next(user)
  }

  getCurrentUser(){
    return this._currentUser.value
  }
}
