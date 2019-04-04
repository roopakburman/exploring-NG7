import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { AuthService } from "../../shared/services/auth.service";
import { ItemServiceService } from '../../item-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  editState: boolean = false;
  itemToEdit: Item;
  fetchedItem: Item[];

  item: Item = {
    title: '',
    description: ''
  }
  constructor(
    private itemService: ItemServiceService,
    public authService: AuthService,) { }
  ngOnInit() {
    this.itemService.getItems().subscribe(i =>{
      // console.log(i);
      this.fetchedItem = i; 
    })
  }
  onSubmit(){
    if(this.item.title != '' && this.item.description != ''){
      this.itemService.addItem(this.item);
      this.item.title='';
      this.item.description='';
    }
  }
  deleteItem(event, item: Item){
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Item){
    this.editState = true;
    this.itemToEdit = item;

  }
  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
}
