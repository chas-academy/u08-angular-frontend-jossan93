import { Component, createComponent } from '@angular/core';
import { GetAllComponent } from '../get-all/get-all.component';
import { GetOneByIDComponent } from '../get-one-by-id/get-one-by-id.component';
import { CreateComponent } from '../create/create.component';
import { UpdateComponent } from '../update/update.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GetAllComponent, GetOneByIDComponent, CreateComponent, UpdateComponent, DeleteComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
}
