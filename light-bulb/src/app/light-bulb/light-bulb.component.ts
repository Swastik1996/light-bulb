import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.scss']
})
export class LightBulbComponent implements OnInit {
    n = 3;

    nodes:Node[] = [];
    links:Edge[] = [];
    mockArr:string[] = [];

  constructor() {


  }

  ngOnInit(): void {
    for(let i = 0; i < this.n; i++){
      this.nodes.push({
        id: String.fromCharCode('A'.charCodeAt(0) + i),
        label: String.fromCharCode('A'.charCodeAt(0) + i)
      });
    }

    for(let i = 0; i < this.n - 1; i++){
      this.links.push({
        id: String.fromCharCode('a'.charCodeAt(0) + i),
        source: String.fromCharCode('A'.charCodeAt(0) + i),
        target: String.fromCharCode('A'.charCodeAt(0) + i + 1),
        label: 'custom label'
      });
    }
  }

}
