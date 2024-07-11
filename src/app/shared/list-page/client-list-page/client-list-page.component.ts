import { Component } from '@angular/core';
import { ListPageComponent } from '../list-page.component';

@Component({
  selector: 'app-client-list-page',
  standalone: true,
  imports: [ListPageComponent],
  templateUrl: './client-list-page.component.html',
  styleUrl: './client-list-page.component.scss'
})
export class ClientListPageComponent {}
