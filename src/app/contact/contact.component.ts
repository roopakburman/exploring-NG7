import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })

   }
onSubmit(){
  this.submitted = true;

  if (this.messageForm.invalid){
    return console.log('chutiyaa gaye ho ke!');
  }
  this.success=true;
}
  ngOnInit() {
    
  }

}
