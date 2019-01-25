import { Employee } from "src/app/models/Employee/Employee";
import { Project } from "src/app/models/Project/Project";
import { TimeEntryType } from "./TimeEntryType";

export interface TimeEntry {
    created: Date;
    user: Employee;
    project: Project;
    sum: number;
    timeEntryType: TimeEntryType;
}