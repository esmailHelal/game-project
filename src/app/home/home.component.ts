import { Component, OnInit } from "@angular/core";

declare var $: any;
import * as h from "jquery";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngAfterViewInit() {
    $(".cover").parallax({ speed: 0.5 });
  }
  ngOnInit() {}
}
