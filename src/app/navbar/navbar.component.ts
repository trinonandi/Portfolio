import {Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}
  night:boolean = false
  nightButtonText:string = "🌙  Dark Mode"

  activateNightMode() {
    this.night = true
    this.nightButtonText = "☀️  Light Mode"
    this.document.body.classList.remove("light-mode");
    this.document.body.classList.add("night-mode");
  }
  activateLightMode() {
    this.night = false
    this.nightButtonText = "🌙  Dark Mode"
    this.document.body.classList.remove("night-mode");
    this.document.body.classList.add("light-mode");
  }


}
