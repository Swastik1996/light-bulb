import { Component, OnInit } from '@angular/core';
import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'light-bulb';


    postForm(f:NgForm) {
        //Log user input in console
        console.log(f.value)
    }
}
