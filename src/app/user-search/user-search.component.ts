import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RepositoryUserService } from '../repository-user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-search , app-repository-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  user!: User;
  searchText!: string;
  displayUserDetailContainer = false;
  displayGithubUserErrorNotFound = false;

  constructor(private userservice : RepositoryUserService) { }
  @ViewChild('f') searchRepositoryForm!: NgForm;
  //accessing form inputs
  @ViewChild('f') searchForm! : NgForm;
  repositories: any;
  displayUserRepositoryList = false;
  displayUserErrorMessage = false;
  repositoryUserService: any;
  

  ngOnInit(): void {}

  //search for a github user
  searchGithubUser () {
    this.searchText = this.searchForm.value.search;
    this.userservice.getUserResponse(this.searchText).then(
      (response) => {
        this.user = this.userservice.getUserDetails;
        this.displayUserDetailContainer = true;
      },
      (error) => {
        console.log(error);
        this.displayGithubUserErrorNotFound = true;
      }
    );
  
  //search for github repositories
  
    this.searchText = this.searchRepositoryForm.value.search;
    this.userservice.getRepositoryResponse(this.searchText).then(
      (response) => {
        this.repositories = this.userservice.getRepositoryDetails;
        this.displayUserRepositoryList = true;
      },
      (error) => {
        this.displayUserErrorMessage = true;
        console.log(error);
      }
    );
  }
}


