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
export class MigrateAccountComponent implements OnInit {
  displayedColumns: string[] = ['submissionId', 'name', 'email'];
  
  pageAlter: boolean = false;
  oldEmailAddress: string = '';
  newEmailAddress: string = '';
  accountType: string = '';
  submissions: Submission[] = [];
  isEmailValidated: boolean = false;
  accountUserId: string = '';
  migrationType: string = ''; // Ensure migrationType is initialized

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Initialize migrationType to a default value
    this.migrationType = 'ORCID'; // Assuming ORCID is the default migration type
  }

  toggleMigrationType(migrationType: string) {
    this.migrationType = migrationType;
    this.togglePage(this.migrationType); // Toggle page based on migration type
  }

  togglePage(migrationType: string) {
    this.pageAlter = migrationType === 'TnF';
  }

  searchOldData() {
    console.log('Searching old data for email:', this.oldEmailAddress);
  }

  validateEmail() {
    console.log('Validating new email:', this.newEmailAddress);
    this.isEmailValidated = true;
    // Fetch account user id based on the new email address
    this.accountUserId = '123456'; // Dummy account user id
  }

  migrateData() {
    console.log('Migrating data to new email:', this.newEmailAddress);
  }
}