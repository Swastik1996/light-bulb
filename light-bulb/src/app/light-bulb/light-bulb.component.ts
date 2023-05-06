import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.scss']
})
export class LightBulbComponent implements OnInit {

  nodes:Node[] = [];
  links:Edge[] = [];
  n:number = 1;

  constructor() {}
  ngOnInit(): void {
    this.showGraph(this.n);
  }

  showGraph(n:number): void {
    this.n = n;
    this.nodes = [];
    for(let i = 0; i < n; i++){
      this.nodes.push({
        id: String.fromCharCode('A'.charCodeAt(0) + i),
        label: String.fromCharCode('A'.charCodeAt(0) + i)
      });
    }
    this.links = [];
    for(let i = 0; i < n - 1; i++){
      this.links.push({
        id: String.fromCharCode('a'.charCodeAt(0) + i),
        source: String.fromCharCode('A'.charCodeAt(0) + i),
        target: String.fromCharCode('A'.charCodeAt(0) + i + 1),
        label: 'custom label'
      });
    }
  }



}
