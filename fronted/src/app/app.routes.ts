import { Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneByIDComponent } from './get-one-by-id/get-one-by-id.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'get-all', component: GetAllComponent },
    { path: 'get-one-by-id', component: GetOneByIDComponent}
];
