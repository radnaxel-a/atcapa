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
  public dateRange: any;

  // Day of the week arrays
  public mondayEntries: TimeEntry[] = [];
  public tuesdayEntries: TimeEntry[] = [];
  public wednesdayEntries: TimeEntry[] = [];
  public thursdayEntries: TimeEntry[] = [];
  public fridayEntries: TimeEntry[] = [];
  public saturdayEntries: TimeEntry[] = [];
  public sundayEntries: TimeEntry[] = [];


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
    let timeEntries = data["data"];
    console.log(timeEntries);
    let date;

    for (let entry of timeEntries) {
      date = new Date(entry['date']);

      this.serializeEntry(date.getDay(), entry);
    }
    console.log(this.fridayEntries);
  }

  private serializeEntry(day, entry): void {

    switch (day) {
      case 0:
        this.sundayEntries.push(entry);
        break;
      
      case 1:
      entry["time_entry_type"] = {
        name: "Normal Time"
      }
        this.mondayEntries.push(entry);
        break;

      case 2:
        this.tuesdayEntries.push(entry);
        break;

      case 3:
        this.wednesdayEntries.push(entry);
        break;

      case 4:
        this.thursdayEntries.push(entry);
        break;

      case 5:
        this.fridayEntries.push(entry);
        break;

      case 6:
      this.saturdayEntries.push(entry);
        break;
    
      default:
        break;
    }
  }
}
