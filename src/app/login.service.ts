import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private firebaseAuth: AngularFireAuth
  ) {}

  // method to sign the user in

  public signIn(): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  public getLoginStatus(): firebase.User | null {
    return this.firebaseAuth.auth.currentUser;
  }
}
