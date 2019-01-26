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
  }

  private getData(dateRange): void {
    this.weeklyService.getTimeEntries().subscribe((data) => {


      let filteredData = this.filterEntries(dateRange, data);
      if (filteredData.length != 0) {
        this.setTimeEntries(filteredData);  
      }
    })
  }

  private filterEntries(dateRange, data): TimeEntry[] {

    let filteredData = [];
    let currentEntryDate;

    for (let entry of data["data"]) {
      currentEntryDate = new Date(entry.date).getTime();

      if (currentEntryDate >= dateRange.min &&
          currentEntryDate <= dateRange.max) {
            filteredData.push(this.setTimeEntryType(entry));
      }
    }
    return filteredData;
  }

  private setTimeEntries(data): void {

    let date;

    for (let entry of data) {
      
      date = new Date(entry.date);

      this.serializeEntry(date.getDay(), entry);
    }
  }

  private serializeEntry(day, entry): void {

    switch (day) {
      case 0:
        this.sundayEntries.push(entry);
        break;

      case 1:
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

  private setTimeEntryType(entry): TimeEntry {

    if (entry.time_entry_type_id === null) {
      entry.time_entry_type = {
        name: "Holiday"
      }
    }

    return entry;
  }

  public handleEvent(element): void {

    let range = element.value.split(" - ");

    let firstDate = new Date(range[0]);
    let secDate = new Date(range[1])

    firstDate.setDate(firstDate.getDate() + 1);
    secDate.setDate(secDate.getDate() + 1);

    let dateRange = {
      min: firstDate.getTime(),
      max: secDate.getTime()
    }

    this.clearArrays();
    this.getData(dateRange)
  }


  private clearArrays(): void{
    this.mondayEntries = [];
    this.tuesdayEntries = [];
    this.wednesdayEntries = [];
    this.thursdayEntries = [];
    this.fridayEntries = [];
    this.saturdayEntries = [];
    this.sundayEntries = [];
  }
}
