import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  selectors: any[];

  constructor(public navCtrl: NavController) {
    this.selectors = [
      { title: "Are you a...", options: ["man", "woman"] },
      { title: "How old are you?", options: ["14", "15", "16"] }
    ];
  }
}
