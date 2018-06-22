import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery;
declare var Morris;
declare var Chartist;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class Admin implements OnInit {
  constructor(private elementRef:ElementRef) { }

 ngOnInit() {
   let containerElem = this.elementRef.nativeElement;
   new Chartist.Line(jQuery(containerElem).find('.ct-area-ln-chart')[0] , {
     labels: [1, 2, 3, 4, 5, 6],
     series: [
       [3, 7, 6, 4, 2, 3]
     ]
     }, {
       low: 0,
    
       //plugins: [
        // Chartist.plugins.tooltip()
       //],

       showArea: true
   });


 }

}
