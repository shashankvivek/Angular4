import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabCompList: QueryList<TabComponent>;
  ngAfterContentInit() {
    this.tabCompList.forEach(tabcomp => console.log(tabcomp))
  }
}
