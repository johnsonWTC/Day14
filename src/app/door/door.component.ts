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
  }

}
