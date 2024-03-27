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
  
  pageAlter :boolean= false;
  oldEmailAddress = '';
  migrateemailAddress = '';
  newEmailAddress = '';
  accountUserId = '';
  orcidEmailAddress = '';
  neworcidEmailAddress = '';
  migrationType = 'ORCID'; // Default migration type

  submissions: Submission[] = [];
  isEmailValidated :boolean= false;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  toggleMigrationType(migrationType: string) {
    this.migrationType = migrationType;
    this.togglePage(this.migrationType);
  }

  togglePage(migrationType: string) {
    this.pageAlter = migrationType === 'TnF';
  }

  searchOldData() {
    console.log('Searching old data for email:', this.oldEmailAddress);
  }

  searchOrcid() {
    console.log('Searching orcid email:', this.orcidEmailAddress);
  }

  submitOrcid(){
    console.log('Submitting new orcid email:', this.neworcidEmailAddress);
  }

  validateEmail() {
    console.log('Validating new email:', this.newEmailAddress);      
  }

  migrateData() {
    console.log('Migrating data to new email:', this.migrateemailAddress);
  }
}