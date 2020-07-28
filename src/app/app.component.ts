import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  dateTimeObj;
  date: string;
  year: string;

  constructor(private service: ApiService) {}

  ngOnInit() {
    // assign API response to dateTimeObj on loading of application
    this.service.getDateTimeAPI().subscribe((result) => {
      this.dateTimeObj = result;
    });
  }

  getDateTime() {
    // Use this function to parse the date returned by the API upon button click
    let date = new Date(this.dateTimeObj.date);
    this.date = date.getDate().toString();
    this.year = date.getFullYear().toString();
  }
}
