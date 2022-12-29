import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) { }
  userId : any;
  products : any;
  ngOnInit(){
    this.http.get('http://localhost:8080/getAllProductsDetailsForReduxApp').subscribe(data => {
        this.products = data;
    })
  }
}
