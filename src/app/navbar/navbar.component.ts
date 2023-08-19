import {Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,

  ) {}

  navActive: string = ""
  night: boolean = false
  nightButtonText: string = "🌙  Night Mode"

  activateNightMode() {
    this.night = true
    this.nightButtonText = "☀️  Light Mode"
    this.document.body.classList.remove("light-mode");
    this.document.body.classList.add("night-mode");
  }
  activateLightMode() {
    this.night = false
    this.nightButtonText = "🌙  Night Mode"
    this.document.body.classList.remove("night-mode");
    this.document.body.classList.add("light-mode");
  }

  goToHome() {
    this.router.navigate(['/']).then(r => {
      this.navActive = ''
    });
  }

  goToExperience() {
    this.router.navigate(['/experience']).then(r => {
      this.navActive = 'experience'
    });
  }

  goToEducation() {
    this.router.navigate(['/education']).then(r => {
      this.navActive = 'education'
    });
  }

  goToSkills() {
    this.router.navigate(['/skills']).then(r => {
      this.navActive = 'skills'
    });
  }

  goToProjects() {
    this.router.navigate(['/projects']).then(r => {
      this.navActive = 'projects'
    });
  }

  goToCertifications() {
    this.router.navigate(['/certifications']).then(r => {
      this.navActive = 'certifications'
    });
  }

}
