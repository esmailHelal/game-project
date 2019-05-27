import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor() {}
  ngAfterViewInit() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      //>=, not <=
      if (scroll >= 50) {
        //clearHeader, not clearheader - caps H
        $("nav").addClass("stick_header");
      } else {
        $("nav").removeClass("stick_header");
      }
    });
  }

  ngOnInit() {}
}
