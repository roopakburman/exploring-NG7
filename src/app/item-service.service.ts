import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from './models/Item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { AuthService } from "../app/shared/services/auth.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
itemsCollection: AngularFirestoreCollection<Item>;
items: Observable<Item[]>;
itemDoc: AngularFirestoreDocument<Item>;
  constructor(public afs1: AngularFirestore) {
    //valueChanges does not bring in firebase document ID
    // this.items = this.afs1.collection('items').valueChanges();

    this.itemsCollection = this.afs1.collection('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const fetchedItem = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;

        return { id, ...fetchedItem}
      })))


   }

   getItems(){
     return this.items;
   }

   addItem(item: Item){
    this.itemsCollection.add(item);
   }

   deleteItem(item: Item){
    this.itemDoc = this.afs1.doc(`items/${item.id}`);
    this.itemDoc.delete();
   }
   updateItem(item: Item){
    this.itemDoc = this.afs1.doc(`items/${item.id}`);
    this.itemDoc.update(item);
   }
}

