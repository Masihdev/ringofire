import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Game } from 'src/models/game';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  // private router for forwarding to the play-cards component when clicking on start game
  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
  }



  playCards() {
  let game = new Game();
  this
  .firestore
  .collection('games')
  .add(game.toJson())
  .then( (gameInfo:any) => {
    this.router.navigateByUrl('/play-cards/' + gameInfo.id);
    console.log(gameInfo);
    
  });
    this.router.navigateByUrl('/play-cards');
  }

}
