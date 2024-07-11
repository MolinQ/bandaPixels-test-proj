import { Component } from '@angular/core';
import {ListPageComponent} from "../list-page.component";

@Component({
  selector: 'app-admin-list-page',
  standalone: true,
  imports: [
    ListPageComponent
  ],
  templateUrl: './admin-list-page.component.html',
  styleUrl: './admin-list-page.component.scss'
})
export class AdminListPageComponent {

}
