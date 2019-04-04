import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {ItemServiceService} from '../../item-service.service';
import { Item } from '../../models/Item';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';

// Auth service
import { AuthService } from "../../shared/services/auth.service";
import { AppRoutingModule } from '../../../app/shared/routing/app-routing.module';
import { AppComponent } from '../../app.component';
import { NavComponent } from '../../nav/nav.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: Item = {
    title: '',
    description: ''
  }
  constructor(
    public authService: AuthService,
    private itemService: ItemServiceService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  // onSubmit(){
  //   if(this.item.title != '' && this.item.description != ''){
  //     this.itemService.addItem(this.item);
  //     this.item.title='';
  //     this.item.description='';
  //   }
  // }
}
