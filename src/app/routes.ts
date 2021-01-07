import { Routes } from "@angular/router";
import { ArrayComponent } from "./components/array/array.component";
import { GraphComponent } from "./components/graph/graph.component";
import { SortComponent } from "./components/sort/sort.component";

export const AUXILLARY_ROUTES: Routes = [
    { path: '', redirectTo: '/sort', pathMatch: 'full' },
    { path: '**', redirectTo: '/sort'}
];

export const TOP_LEVEL_ROUTES: Routes = [
    { path: 'sort', component: SortComponent },
    { path: 'array', component: ArrayComponent}, 
    { path: 'graph', component: GraphComponent }
];

export const ALL_ROUTES = TOP_LEVEL_ROUTES.concat(AUXILLARY_ROUTES);