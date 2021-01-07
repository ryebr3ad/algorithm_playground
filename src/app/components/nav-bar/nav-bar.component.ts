import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router, Routes, Event } from '@angular/router';
import { TOP_LEVEL_ROUTES } from 'src/app/routes';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public routes: Routes = TOP_LEVEL_ROUTES

  public activeRoute: Route;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    let events$: Observable<Event> = this.router.events;
    if (events$) {
      events$.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        let trimUrl = event.urlAfterRedirects.substring(1);
        this.activeRoute = this.routes.find(r => r.path === trimUrl);
      });
    }
  }

  setActive(route: Route): void {
    this.activeRoute = route;
  }

}
