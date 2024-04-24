import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiServicesService } from '../../controllers/Users-Api-Services.service';

@Component({
  selector: 'usersDetails',
  templateUrl: './usersDetails.component.html',
  styleUrls: ['./usersDetails.component.css'],
})
export class UsersDetailsComponent implements OnInit {
  users: any[] = [];
  id: any;

  constructor(
    private api: UsersApiServicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getById(this.id).subscribe((data: any) => {
      if (data && data.data) {
        this.users = [data.data];
      } else {
        console.error('No user data');
      }
    });
  }

  navigateToHomePage() {
    this.router.navigate(['/home']);
  }
}
