import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ApiService {
  url: string = "https://jsonmock.hackerrank.com/datetime";

  constructor(private http: Http) {}

  getDateTimeAPI() {
    // Call the API and return the response (change the code below)
    return this.http.get(this.url);
  }
}
