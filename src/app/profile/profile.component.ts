import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  productsForm: FormGroup;
  products = [
    {
      'brand': "Apple"
    }
  ];
  gender = [
    {
      'sex':'Male'
    },
    {
      'sex':'Female'
    }
  ];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm(this.products,this.gender);
  }

  createForm(products,gender) {
    var productsArr = [];
    var genderArr = [];
    for(var i=0; i<products.length; i++) {
      productsArr.push(this.buildProduct(products[i]));
    }
    for(var i=0; i<gender.length; i++) {
      genderArr.push(this.buildGender(gender[i]));
    }
    this.productsForm = this.fb.group({
      category:[''],
      brands: this.fb.array(productsArr),
      gender: this.fb.array(genderArr)
    });
  }

  buildProduct(product) :FormGroup {
    return this.fb.group({
      title: [product.brand],
      value: ['']
    })
  }
  
  buildGender(gender) :FormGroup {
    return this.fb.group({
      title: [gender.sex],
      value: ['']
    })
  }
  showData(){
    console.log(this.productsForm.value);
  }

}
