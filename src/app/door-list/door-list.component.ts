import { Component, Input, OnInit } from '@angular/core';
import { Door } from '../Door';

@Component({
  selector: 'app-door-list',
  templateUrl: './door-list.component.html',
  styleUrls: ['./door-list.component.css']
})
export class DoorListComponent implements OnInit {

  constructor() { }

  @Input() doors : Door[] | undefined;
  ngOnInit(): void {
  }

}
