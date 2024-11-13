import { Routes } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { BootstrapPageComponent } from './components/bootstrap-page/bootstrap-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeContentComponent},
    { path: 'bootstrap', component: BootstrapPageComponent},
    { path: '**', component: NotFoundComponent},
    { path: '', redirectTo: '/hem', pathMatch: 'full'}
];
