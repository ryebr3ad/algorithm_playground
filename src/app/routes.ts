import { Routes } from "@angular/router";
import { GraphComponent } from "./components/graph/graph.component";
import { SortComponent } from "./components/sort/sort.component";

export const AUXILLARY_ROUTES: Routes = [
    { path: '', redirectTo: '/sort', pathMatch: 'full' }
];

export const TOP_LEVEL_ROUTES: Routes = [
    { path: 'sort', component: SortComponent },
    { path: 'graph', component: GraphComponent }
];

export const ALL_ROUTES = AUXILLARY_ROUTES.concat(TOP_LEVEL_ROUTES);