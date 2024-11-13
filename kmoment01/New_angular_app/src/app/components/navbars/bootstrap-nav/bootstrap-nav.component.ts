import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


declare const bootstrap: any;
@Component({
  selector: 'app-bootstrap-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './bootstrap-nav.component.html',
  styleUrl: './bootstrap-nav.component.css'
})
export class BootstrapNavComponent {

}
