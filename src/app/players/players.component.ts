import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  @Input() name;
  @Input() profilePic = '1.png';

  @Input() playeractive: boolean = false;
   
  
  constructor() { }

  ngOnInit(): void {
  }

 
}
