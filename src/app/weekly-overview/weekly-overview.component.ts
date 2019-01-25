import { Component, OnInit } from '@angular/core';
import { WeeklyOverviewService } from "src/app/services/weekly-overview.service";
import { TimeEntry } from "src/app/models/TimeEntry/TimeEntry";

@Component({
  selector: 'app-weekly-overview',
  templateUrl: './weekly-overview.component.html',
  styleUrls: ['./weekly-overview.component.css']
})
export class WeeklyOverviewComponent implements OnInit {

  private readonly weeklyService: WeeklyOverviewService
  public timeEntries: TimeEntry[] = [];

  constructor(weeklyService: WeeklyOverviewService) {
    this.weeklyService = weeklyService;
   }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.weeklyService.getTimeEntries().subscribe((data) => {
      this.setTimeEntries(data);
    })
  }

  private setTimeEntries(data): void {
    this.timeEntries = data["data"] as TimeEntry[];
  }
}
