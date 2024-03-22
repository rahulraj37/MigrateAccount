import { Component, OnInit, } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subscription } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import { HttpService } from '../shared/services/http.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';

interface Submission {
  submissionId: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-migrate-account',
  standalone: true,
  imports: [MatTableModule,MatIconModule,FormsModule,CommonModule,MatRadioModule],
  templateUrl: './migrate-account.component.html',
  styleUrl: './migrate-account.component.scss'
})
export class MigrateAccountComponent {
  displayedColumns: string[] = ['submissionId', 'name', 'email'];

  oldEmailAddress: string = '';
  newEmailAddress: string = '';
  accountType: string = '';
  submissions: Submission[] = [];
  isEmailValidated: boolean = false;
  accountUserId: string = '';

  constructor(private http: HttpClient) {}

  searchOldData() {
    // Placeholder method for searching old data based on email address
    // Replace this with your actual implementation
    console.log('Searching old data for email:', this.oldEmailAddress);
  }

  Validateemail() {
    // Placeholder method for email validation
    // Replace this with your actual implementation
    console.log('Validating new email:', this.newEmailAddress);
    // Assuming validation is successful
    this.isEmailValidated = true;
    // Fetch account user id based on the new email address
    this.accountUserId = '123456'; // Dummy account user id
  }

  migrateData() {
    // Placeholder method for migrating data to the new email address
    // Replace this with your actual implementation
    console.log('Migrating data to new email:', this.newEmailAddress);
  }
}