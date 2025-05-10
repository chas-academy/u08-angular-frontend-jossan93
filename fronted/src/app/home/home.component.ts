import { Component } from '@angular/core';
import { GetAllComponent } from '../get-all/get-all.component';
import { GetOneByIDComponent } from '../get-one-by-id/get-one-by-id.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GetAllComponent, GetOneByIDComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
}
