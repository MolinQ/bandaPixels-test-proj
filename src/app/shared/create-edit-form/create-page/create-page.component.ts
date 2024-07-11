import { Component } from '@angular/core';
import {CreateEditFormComponent} from "../create-edit-form.component";

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [
    CreateEditFormComponent
  ],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss'
})
export class CreatePageComponent {

}
