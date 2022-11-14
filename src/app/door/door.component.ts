import { Component, OnInit } from '@angular/core';
import { Door } from '../Door';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent implements OnInit {

  constructor() { }

  Doorlist : Door[] = [];

  ngOnInit(): void {
    this.Doorlist = [
      {
        Size: 20,
        Color: "Red"
      }, {
        Size: 10,
        Color: "Blue"
      }, {
        Size: 5,
        Color: "Black"
      }
    ]
  }
}
