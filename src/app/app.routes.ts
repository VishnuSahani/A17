import { Routes } from '@angular/router';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
      {
        path: '',
        title: 'Auth',
        loadChildren: ()=> import('./auth/auth.module').then((a)=>a.AuthModule)
      },
      {
        path: 'home',
        title: 'Home',
        loadChildren: ()=> import('./home/home.module').then((h)=>h.HomeModule)
      },
      {
        path: 'loc',
        component: HousingLocationComponent,
        title: 'Location details',
      },
      
      { path: '**', component: PageNotFoundComponent }, // Catch-all for unmatched routes

];
