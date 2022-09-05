import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  // private router for forwarding to the play-cards component when clicking on start game
  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  playCards() {
    this.router.navigateByUrl('/play-cards');
  }

}
