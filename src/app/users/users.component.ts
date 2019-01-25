import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { Employee } from "src/app/models/Employee/Employee";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private userService: UserService;
  public employees: Employee[] = [];

  constructor(userService: UserService) { 
    this.userService = userService;
  }

  ngOnInit() {
    this.listUseres();
  }

  listUseres () {
    this.userService.getEmployees().subscribe((data: Employee[]) => {
      this.setEmployees(data);
    });
  }

  private setEmployees(data: Employee[]) {
    console.log(data);
    this.employees = data["data"].map(x => x as Employee)
  }
}
