import { Component, OnInit } from '@angular/core';
import {PanelService} from './panel.service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  title:string;
  constructor(private data1: PanelService) { }

  ngOnInit() {
    this.data1.currentMessage.subscribe(message => this.title = message);
    //this.data.changeMessage("Hello from Sibling");
  }

  type = 'line';
data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Chart from chartslist",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
options = {
  responsive: true,
  maintainAspectRatio: false
};

}
