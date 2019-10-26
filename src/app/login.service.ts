import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: firebase.User;

  constructor(
    private firebaseAuth: AngularFireAuth
  ) {
    // we're going to check to see if the user is already signed in somehow
    // if they aren't, let's sign them in

    // forEach only gets called once to sign the user in
    this.firebaseAuth.user.forEach(currentUser => {
      console.log('checking for user');
      if (currentUser) {
        this.user = currentUser;
        console.log(this.user); // going to make it easier to see what's going on later
      } else {
        this.signIn().then(res => {
          this.user = res.user;
          console.log(this.user);
        });
      }
    });

  }

  // method to sign the user in

  public signIn(): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
