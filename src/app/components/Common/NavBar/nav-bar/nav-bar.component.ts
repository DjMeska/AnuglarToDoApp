import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { colors } from 'colors';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  buttonColor = colors.e

  constructor(private router: Router) {
  }

  goToPage(pageName:string) {
    this.router.navigate([`${pageName}`]);
  }

}
