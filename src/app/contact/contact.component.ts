import { Component, OnInit } from "@angular/core";

declare var $: any;
import * as h from "jquery";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $("a").click(function() {
      var aherf = $(this).attr("href");
      console.log(aherf);
      var secoff = $(aherf).offset().top;
      console.log(secoff);
      $("html,body").animate({ scrollTop: secoff }, 3000);
    });
  }
}
