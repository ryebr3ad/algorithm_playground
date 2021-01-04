import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortComponent } from './components/sort/sort.component';
import { AppRoutesModule } from './app-routes.module';
import { GraphComponent } from './components/graph/graph.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SortComponent,
    GraphComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
