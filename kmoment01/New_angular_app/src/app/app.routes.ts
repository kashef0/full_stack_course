import { Routes } from '@angular/router';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { BootstrapPageComponent } from './components/bootstrap-page/bootstrap-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TailwindPageComponent } from './components/tailwind-page/tailwind-page.component';
import { PubliceringComponent } from './components/publicering/publicering.component';

export const routes: Routes = [
    { path: 'home', component: HomeContentComponent},
    { path: 'bootstrap', component: BootstrapPageComponent},
    { path: 'tailwind', component: TailwindPageComponent},
    { path: 'publicering', component: PubliceringComponent},
    { path: '**', component: NotFoundComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
