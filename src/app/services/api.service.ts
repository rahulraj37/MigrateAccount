import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Job } from "../models/job";
import { Dev } from "../models/dev";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	// private apiUrl = "https://monacodelisa-node-express.onrender.com/api";
	private apiUrl = "https://monacodelisa-node-express.cyclic.app/api";

	constructor(private http: HttpClient) {}

	getJobs() {
		return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
	}

	getDevs() {
		return this.http.get<Dev[]>(`${this.apiUrl}/devs`);
	}
}
