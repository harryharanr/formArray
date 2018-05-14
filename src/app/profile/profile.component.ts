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
  ]
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm(this.products);
  }

  createForm(products){
    var arr = [];
    for(var i=0; i<products.length; i++) {
      arr.push(this.buildProduct(products[i]));
    }
    console.log(arr);
    this.productsForm = this.fb.group({
      category:[''],
      brands: this.fb.array(arr),
      gender: ['']
    });
  }

  buildProduct(product) :FormGroup {
    return this.fb.group({
      title: [product.brand],
      value: ['']
    })
  }
  showData(){
    console.log(this.productsForm.value);
  }

}
