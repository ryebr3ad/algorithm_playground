import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SortComponent } from './components/sort/sort.component';
import { AppRoutesModule } from './app-routes.module';
import { GraphComponent } from './components/graph/graph.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ArrayComponent } from './components/array/array.component';

@NgModule({
  declarations: [
    AppComponent,
    SortComponent,
    GraphComponent,
    NavBarComponent,
    ArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
