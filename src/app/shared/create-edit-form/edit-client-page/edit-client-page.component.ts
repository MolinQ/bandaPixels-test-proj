import { Component } from '@angular/core';
import { CreateEditFormComponent } from '../create-edit-form.component';

@Component({
  selector: 'app-edit-client-page',
  standalone: true,
  imports: [CreateEditFormComponent],
  templateUrl: './edit-client-page.component.html',
  styleUrl: './edit-client-page.component.scss'
})
export class EditClientPageComponent {}
