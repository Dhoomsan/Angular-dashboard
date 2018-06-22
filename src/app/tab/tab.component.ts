import { Component, OnInit, ElementRef } from '@angular/core';
declare var Chartist
declare var jQuery
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    let containerElem = this.elementRef.nativeElement;
     //area chart
   new Chartist.Line(jQuery(containerElem).find('.ct-area-ln-chart')[0] , {
     
    labels: [1, 2, 3, 4, 5, 6],
    series: [
      [3, 7, 6, 4, 2, 3]
    ]
    },
     {
      low: 0,
      showArea: true,
      responsive: true,
  });

  //simple chart
   new Chartist.Line(jQuery(containerElem).find('.ct-sm-line-chart')[0] , {
     labels: [1, 2, 3, 4, 5, 6],
     series: [
      [3, 7, 6, 4, 2, 3]
     ]
     }, {
       low: 0,
       showArea: true,
       responsive: true,
   });


  

  }
}
