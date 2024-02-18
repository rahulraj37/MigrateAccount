import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

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
export class AppComponent implements OnInit, OnDestroy {
	title = "WebDevRemote";
	mobileQuery: MediaQueryList;

	fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

	private _mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia("(max-width: 600px)");
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

  ngOnInit(): void {

  }

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

}
