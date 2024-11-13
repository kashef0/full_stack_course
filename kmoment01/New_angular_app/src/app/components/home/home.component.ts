import { Component } from '@angular/core';
import { BootstrapNavComponent } from "../navbars/bootstrap-nav/bootstrap-nav.component";
import { TalwindNavComponent as TailwindNavComponent } from "../navbars/talwind-nav/talwind-nav.component";
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from "../home-content/home-content.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BootstrapNavComponent, TailwindNavComponent, CommonModule, HomeContentComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  bootstrap_nav: boolean = true;
  toggleNavbarStyle() {
      this.bootstrap_nav = !this.bootstrap_nav;
  }

}
