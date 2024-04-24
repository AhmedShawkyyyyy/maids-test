import { Injectable } from '@angular/core';
import { APIFunctionServicesService } from './API-Function-Services.service';
import { HttpClient } from '@angular/common/http';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UsersApiServicesService extends APIFunctionServicesService<
  user[]
> {
  constructor(public override Http: HttpClient) {
    super('https://reqres.in/api/users', Http);
  }
}
