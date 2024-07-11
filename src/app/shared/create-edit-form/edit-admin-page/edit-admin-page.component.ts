import { Component } from '@angular/core';
import {CreateEditFormComponent} from "../create-edit-form.component";

@Component({
  selector: 'app-edit-admin-page',
  standalone: true,
  imports: [
    CreateEditFormComponent
  ],
  templateUrl: './edit-admin-page.component.html',
  styleUrl: './edit-admin-page.component.scss'
})
export class EditAdminPageComponent {

}
