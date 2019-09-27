import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {

  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    this.date = new Date().toDateString();
  }



  public async close() {
    const onClosedData: Date = new Date(this.date);
    this.popoverController.dismiss(onClosedData);
  }
}
