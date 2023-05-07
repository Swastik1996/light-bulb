import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.scss']
})
export class LightBulbComponent implements OnInit {

  nodes:Node[] = [];
  links:Edge[] = [];
  n:number = 5;
  randomInt = (min:number, max:number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  constructor() {}
  ngOnInit(): void {
    this.showGraph();
  }

  // Observable for update
  update$: Subject<any> = new Subject();

  // Update function
  updateChart(){
      this.update$.next(true);
  }

  flipNode(node:Node):Node{
      console.log("Flipping Node: " + node.id);
      if(node.data.color == '#a8385d'){
        node.data.color = '#7aa3e5';
      }
      else if(node.data.color == '#7aa3e5'){
        node.data.color = '#a8385d';
      }

      if(node.label == 'A'){
        node.label = 'B';
      }
      else if(node.label == 'B'){
        node.label = 'A';
      }
      return node;
  }

  flipNodeWithId(id:string):void{
    for(let i = 0; i < this.n; i++){
        if(id == this.nodes[i].id){
          this.nodes[i] = this.flipNode(this.nodes[i]);
        }
    }
  }

  click(node:Node):void{
    console.log("Clicked: " + node.id);
    this.flipNodeWithId(node.id);
    for(let j =0; j < this.links.length; j++){
      if(this.links[j].source == node.id){
        this.flipNodeWithId(this.links[j].target);
      }
      else if(this.links[j].target == node.id){
        this.flipNodeWithId(this.links[j].source);
      }
    }

    this.updateChart();
  }

  updateSize(n:number): void{
    this.n = n;
  }

  showGraph(): void {
    this.nodes = [];
    for(let i = 0; i < this.n; i++){
      var x = this.randomInt(0, 1);
      this.nodes.push({
        id: String.fromCharCode('A'.charCodeAt(0) + i),
        label: String.fromCharCode('A'.charCodeAt(0) + x)
      });
    }
    this.links = [];
    for(let i = 0; i < this.n; i++){
      for(let j = i + 1; j < this.n ; j++){
        var x = this.randomInt(0, 1);
        if(x == 1){
          this.links.push({
            id: String.fromCharCode('a'.charCodeAt(0) + i * this.n + j),
            source: String.fromCharCode('A'.charCodeAt(0) + i),
            target: String.fromCharCode('A'.charCodeAt(0) + j),
            label: 'Edge'
          });
        }
      }
    }
  }



}
