import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { GraphComponent } from './components/graph/graph.component';
import { SortComponent } from './components/sort/sort.component';
import { ALL_ROUTES } from './routes';


@NgModule({
  imports: [
    RouterModule.forRoot(
      ALL_ROUTES
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
