import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Observable<any[]>;
  
  constructor(private db: AngularFireDatabase) { 
    this.products = db.list<Product>('/products').valueChanges();
    this.products.subscribe( console.log );    
    
  }

  ngOnInit() {
  }

}

interface Product{
  $name?: string;
  description?: string;
  $sku?: string;
  sellprice?: string;
  purchaseprice?: string;
  stock?: string;
  availablestock?: string;
  unittext?: string;
}