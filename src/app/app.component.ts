import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {
  FilterSettingsModel,
  TreeGridComponent
} from '@syncfusion/ej2-angular-treegrid';
import { isNullOrUndefined } from 'util';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Object[];
  public filterSettings: FilterSettingsModel;
  public dropDownData: string[] = [];

  @ViewChild('treegrid', { static: false })
  public treegrid: TreeGridComponent;

  ngOnInit(): void {
    this.data = sampleData;
    this.getDropDownData(this.data);
    this.filterSettings = {
      ignoreAccent: true,
      hierarchyMode: 'None',
      type: 'Excel' //Menu, FilterBar
    };
  }

  public onChange(args: ChangeEventArgs): void {
    this.treegrid.filterByColumn('taskName', 'equal', args.value);
  }

  public getDropDownData(data: object[]): void {
    for (var i = 0; i < data.length; i++) {
      if (this.dropDownData.indexOf(data[i]['taskName']) == -1)
        this.dropDownData.push(data[i]['taskName']);
      if (!isNullOrUndefined(data[i]['subtasks'])) {
        this.getDropDownData(data[i]['subtasks']);
      }
    }
  }
}
