import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataLength: number;
  showAmount = 18;
  seeMore: boolean;
  url: string;
  people: any;

  constructor( private http: HttpClient) {
    this.getStuff();
    this.seeMoreVisibiltiy();
  }

  seeMoreVisibiltiy() {
    this.dataLength >= this.showAmount ? this.seeMore = true : this.seeMore = false;
  }

  getStuff() {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get(this.url).subscribe( res => {
      this.people = res;
      this.dataLength = this.people.length;
      console.log(res);
    });
  }

  loadMore() {
    if (this.dataLength > this.showAmount ) {
      this.showAmount = this.showAmount + 18;
      console.log(this.showAmount);
    }

    this.dataLength <= this.showAmount ? this.seeMore = true : this.seeMore = false;

  }


}
