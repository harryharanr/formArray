import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  detailsForm: FormGroup;

  ngOnInit() {
    this.detailsForm = this.fb.group({
      name: '',
      address: this.fb.array([
        this.initAddress()
      ])
    });
  }

  initAddress() {
    return this.fb.group({
      street: ['' , Validators.required],
      postcode: ['']
    });
  }

  addAddress() {
    const control = <FormArray>this.detailsForm.controls['address'];
    control.push(this.initAddress());
  }

}
