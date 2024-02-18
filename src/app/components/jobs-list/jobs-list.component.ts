import { Component, OnInit, inject } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Job } from "../../models/job";

import { MatExpansionModule } from "@angular/material/expansion";

@Component({
	selector: "app-jobs-list",
	standalone: true,
	imports: [MatExpansionModule],
	templateUrl: "./jobs-list.component.html",
	styleUrl: "./jobs-list.component.scss",
})
export class JobsListComponent implements OnInit {
	apiService = inject(ApiService);
	jobs: Job[] = [];

	ngOnInit(): void {
		this.apiService.getJobs().subscribe((data) => {
			this.jobs = data;
		});
	}
}
