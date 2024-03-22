import { Component, OnInit, } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subscription } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import { HttpService } from '../shared/services/http.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// export interface Job {
//   jobID: number;
//   title: string;
//   company: string;
//   location: string;
//   description: string;
//   requirements: string;
//   contactEmail: string;
// }

interface Submission {
  submissionNumber: string;
  accountType: string;
}

@Component({
  selector: 'app-migrate-account',
  standalone: true,
  imports: [MatTableModule,MatIconModule,FormsModule,CommonModule],
  templateUrl: './migrate-account.component.html',
  styleUrl: './migrate-account.component.scss'
})
export class MigrateAccountComponent {
  emailAddress: string = '';
  emailAddress2: string = '';
  accountType: string = '';
  submissions: Submission[] = [];
  emailFetched: boolean = false;
  emailValidationMessage: string = '';
  isNewEmailValidated: boolean = false;
  displayedColumns: string[] = ['submissionNumber', 'accountType'];
  dataSource: MatTableDataSource<Submission>;

  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource<Submission>(this.submissions);
  }

  fetchDetails() {
    // Assuming API endpoint to fetch submissions
    const apiUrl = 'https://example.com/api/submissions';

    this.http.get<Submission[]>(apiUrl).subscribe(
      (data) => {
        this.submissions = data;
        this.dataSource.data = this.submissions;
      },
      (error) => {
        console.error('Error fetching submissions:', error);
      }
    );
  }

  submitOldEmail(emailValue: string) {
    console.log('Submitted old email:', emailValue);
    // Here you can perform any additional actions with the submitted old email address
  }

  submitNewEmail(emailValue: string) {
    console.log('Submitted new email:', emailValue);
    // Here you can perform any additional actions with the submitted new email address
    // For now, let's assume validation is successful
    this.isNewEmailValidated = true;

    // Fetch submissions for the new email address
    this.fetchDetails();
  }
}
// {
  
//   displayedColumns: string[] = ['jobID', 'title', 'company', 'location', 'description', 'requirements', 'contactEmail'];
//   dataSource = new MatTableDataSource<Job>();
//   subscription: Subscription | undefined;

//   constructor(private httpService: HttpService) { }

//   ngOnInit(): void {
//     // this.getJobs();
//   }

//   getJobs() {
//     this.subscription = this.httpService.get('/jobs')
//       .subscribe({
//         next: (response: Job[]) => {
//           this.dataSource.data = response;
//         },
//         error: (error: any) => {
//           console.error('Error fetching jobs:', error);
//         }
//       });
//   }
  
//   search(){
//     this.getJobs();
//   }

//   ngOnDestroy(): void {
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }

// }
