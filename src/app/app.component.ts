import {  Component,  ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { environment } from './../environments/environment';
fetch(environment.apiUrl);
@Component({
	
	selector: "app-root",
	standalone: true,
	imports: [
		CommonModule,
    FooterComponent,
    RouterLink,
		RouterLinkActive,
		RouterOutlet,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent  {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
	@ViewChild('sidenav') sidenav!: MatSidenav;

	onMouseEnter() {
	  if (!this.sidenav.opened) {
		this.sidenav.open();
	  }
	}
  
	onMouseLeave() {
	  if (this.sidenav.opened) {
		this.sidenav.close();
	  }
	}
}
