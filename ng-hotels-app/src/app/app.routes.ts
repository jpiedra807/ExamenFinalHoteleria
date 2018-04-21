import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelsSearchComponent } from './components/hotels-search/hotels-search.component'

const AppRouteModule: Routes = [
    { path: 'hotels', component: HomeComponent },
    { path: 'hotels-search/:name/:stars', component: HotelsSearchComponent },
    { path: '**', pathMatch: 'full', redirectTo:'hotels' }
];

export const AppRoutingModule = RouterModule.forRoot(AppRouteModule, { useHash: true });