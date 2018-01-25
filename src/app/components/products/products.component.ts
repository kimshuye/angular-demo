import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any[];
  
  constructor(private db: AngularFireDatabase) { 
    db.list<Product>('/products').valueChanges().subscribe(
      products => {
        this.products = products;
        console.log(this.products);
      }
    );
    
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