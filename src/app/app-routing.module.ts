import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeeklyOverviewComponent } from "src/app/weekly-overview/weekly-overview.component";
import { UsersComponent } from "src/app/users/users.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'weeklyOverview', component: WeeklyOverviewComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
