import { Component, OnInit } from "@angular/core";
declare var $: any;
import * as h from "jquery";
@Component({
  selector: "app-join",
  templateUrl: "./join.component.html",
  styleUrls: ["./join.component.scss"]
})
export class JoinComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(".team_slider").bxSlider({
      slideWidth: 220,
      minSlides: 3,
      maxSlides: 4,
      moveSlides: 1,
      slideMargin: 10,
      pager: false
    });
  }
}
