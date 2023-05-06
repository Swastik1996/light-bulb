import { Component, OnInit, ViewChild } from '@angular/core';
import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';
import { FormsModule, NgForm } from '@angular/forms';
import { LightBulbComponent } from "./light-bulb/light-bulb.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'light-bulb';
  @ViewChild(LightBulbComponent) lightBulb:LightBulbComponent = new LightBulbComponent();
  value = 1;

  postForm(f:NgForm) {
      var res = new Map(Object.entries(f.value));
      this.value = <number>res.get("Size");
      this.lightBulb.showGraph(this.value);
      this.lightBulb.ngOnInit();
  }
}
