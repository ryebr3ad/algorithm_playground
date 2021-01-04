import { Component, OnInit } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { TOP_LEVEL_ROUTES } from 'src/app/routes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public routes: Routes = TOP_LEVEL_ROUTES

  public activeRoute: Route;

  constructor() { }

  ngOnInit(): void {
    this.activeRoute = this.routes.find(r => r.path.toLowerCase() === "sort");
  }

  setActive(route: Route): void {
    this.activeRoute = route;
  }

}
