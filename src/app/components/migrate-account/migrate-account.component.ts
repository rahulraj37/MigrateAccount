import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subscription } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import { HttpService } from '../shared/services/http.service';


export interface Job {
  jobID: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
  contactEmail: string;
}

@Component({
  selector: 'app-migrate-account',
  standalone: true,
  imports: [MatTableModule,MatIconModule],
  templateUrl: './migrate-account.component.html',
  styleUrl: './migrate-account.component.scss'
})
export class MigrateAccountComponent implements OnInit {
  
  displayedColumns: string[] = ['jobID', 'title', 'company', 'location', 'description', 'requirements', 'contactEmail'];
  dataSource = new MatTableDataSource<Job>();
  subscription: Subscription | undefined;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    // this.getJobs();
  }

  getJobs() {
    this.subscription = this.httpService.get('/jobs')
      .subscribe({
        next: (response: Job[]) => {
          this.dataSource.data = response;
        },
        error: (error: any) => {
          console.error('Error fetching jobs:', error);
        }
      });
  }
  
  search(){
    this.getJobs();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
