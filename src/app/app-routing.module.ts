import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeeklyOverviewComponent } from "src/app/weekly-overview/weekly-overview.component";
import { UsersComponent } from "src/app/users/users.component";
import { HomeComponent } from "src/app/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'weeklyOverview', component: WeeklyOverviewComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
