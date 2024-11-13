import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TalwindNavComponent } from "./components/navbars/talwind-nav/talwind-nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BootstrapNavComponent } from "./components/navbars/bootstrap-nav/bootstrap-nav.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, CommonModule, BootstrapNavComponent, TalwindNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  bootstrap_nav: boolean = true;
  toggleNavbarStyle() {
      this.bootstrap_nav = !this.bootstrap_nav;
  }

}
