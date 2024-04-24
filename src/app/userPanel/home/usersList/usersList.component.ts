import { LoaderService } from './../../controllers/loader.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersApiServicesService } from '../../controllers/Users-Api-Services.service';
import { user } from '../../model/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'usersList',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input()
  searchText: number = 0;
  users: user[] = [];
  isLoading: boolean = true;

  constructor(
    private api: UsersApiServicesService,
    private router: Router,
    private loader: LoaderService,
    private toastr: ToastrService
  ) {
    this.getAllUsers();
    // console.log(this.searchText);
    this.toastr.info(`Welcome aboard!`, '', {
      timeOut: 2500,
      positionClass: 'toast-top-right',
      progressBar: true,
      progressAnimation: 'decreasing',
    });
  }

  ngOnInit() {
    this.loader.loadingAction.subscribe((loading) => {
      this.isLoading = loading;
    });
  }

  getAllUsers() {
    setTimeout(() => {
      this.api.get().subscribe((data: any) => {
        if (data && data.data && Array.isArray(data.data)) {
          this.users = data.data;
          // console.log(this.users);
          this.loader.hideLoader();
        }
      });
    }, 2000);
  }
  // =============================

  navigateToUserDetails(userId: number) {
    this.router.navigate(['/user-details', userId]);
  }
}
