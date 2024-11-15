import { Component } from '@angular/core';
import { FormComponent } from "../_tailwindForm/form/form.component";

@Component({
  selector: 'app-tailwind-page',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './tailwind-page.component.html',
  styleUrl: './tailwind-page.component.css'
})
export class TailwindPageComponent {

}
