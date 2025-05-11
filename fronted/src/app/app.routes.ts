import { Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { GetOneByIDComponent } from './get-one-by-id/get-one-by-id.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'get-all', component: GetAllComponent },
    { path: 'get-one-by-id', component: GetOneByIDComponent},
    { path: 'create', component: CreateComponent},
    { path: 'update', component: UpdateComponent},
    { path: 'delete', component: DeleteComponent}
];
