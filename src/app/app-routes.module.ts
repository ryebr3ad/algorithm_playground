import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { SortComponent } from './components/sort/sort.component';


const routes: Routes = [
  {path: '', redirectTo: '/sort', pathMatch: 'full'},
  {path: 'sort', component: SortComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
