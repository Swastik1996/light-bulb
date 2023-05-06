import { Component, OnInit } from '@angular/core';
import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'light-bulb';
  nodes = [
          {
            id: 'first',
            label: 'A'
          }, {
            id: 'second',
            label: 'B'
          }, {
            id: 'third',
            label: 'C'
          }
        ];

  links = [
          {
            id: 'a',
            source: 'first',
            target: 'second',
            label: 'is parent of'
          }, {
            id: 'b',
            source: 'first',
            target: 'third',
            label: 'custom label'
          }
        ];
}
