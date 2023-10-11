import { Component } from '@angular/core';
import { ProjectDetails } from './projectdetails';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  project1: ProjectDetails = {
    imgUrl: "http://via.placeholder.com/640x360",
    heading: "Lorem ipsum dolor sit amet",
    date: "May 2, 2021",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam accusantium inventore earum exercitationem, quos facilis quisquam, possimus nam dolorem sapiente recusandae perferendis consequuntur impedit nesciunt veniam dicta, sed ipsa!"
}
projects = [this.project1]
}
