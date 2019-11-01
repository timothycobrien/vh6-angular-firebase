import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


interface ReturnType {
  item: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  item = '';

  dataArr = [];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fireStore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.loginService.signOut().then(e => {
      this.router.navigate(['login']);
    });
  }

  createItem() {
    this.fireStore.collection('items').add({item: this.item});
  }

  renderItems() {
    this.dataArr = [];
    const ref = this.fireStore.collection('items');
    ref.get().subscribe(query => {
      query.forEach(doc => {
        const data = doc.data() as ReturnType;
        this.dataArr.push(data.item);
      });
    });
  }

}
