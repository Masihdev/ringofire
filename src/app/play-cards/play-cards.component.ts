import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { ProfilePicsComponent } from '../profile-pics/profile-pics.component';


@Component({
  selector: 'app-play-cards',
  templateUrl: './play-cards.component.html',
  styleUrls: ['./play-cards.component.scss']
})
export class PlayCardsComponent implements OnInit {

cards = [0, 1, 2, 3, 4];
game: Game; // variable vom Typ Game
gameId: string;



  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
    console.log(params['id']);
    this.gameId = params['id'];

      
      this
      .firestore
      .collection('games')
      .doc(this.gameId)
      .valueChanges()
      .subscribe( (game: any) => {
          console.log('Game update', game);

          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.playerPics = game.playerPics;
          this.game.unplayedCards = game.unplayedCards;
          this.game.pickCardAnimation = game.pickCardAnimation;
           this.game.currentCard = game.currentCard; 
      });
    });
    
  }

newGame() {
  this.game = new Game();
  console.log(this.game);
}


  takeCard() {
   if(!this.game.pickCardAnimation) {
    this.game.currentCard = this.game.unplayedCards.pop(); // pop() gives the last value from array and removes it
    this.game.pickCardAnimation = true;
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
    this.saveGame();
    
    setTimeout(() => {
      this.game.playedCards.push(this.game.currentCard);
      this.game.pickCardAnimation = false;
      this.saveGame();
    }, 1000);
   }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
      this.game.players.push(name);
      this.game.playerPics.push('1.png');
      this.saveGame();
    }
    });
  }

  saveGame() {
    this.firestore.collection('games').doc(this.gameId).update(this.game.toJson());

  }

  editPlayer(playerID: number) {
    console.log('edit player', playerID);

    const dialogRef = this.dialog.open(ProfilePicsComponent);

    dialogRef.afterClosed().subscribe((change: string) => {
      if(change){
        if(change == 'delete') {
          this.game.players.splice(playerID, 1);
          this.game.playerPics.splice(playerID, 1);
        } else {
          this.game.playerPics[playerID] = change;
        }
          this.saveGame();
    }
    });
  }
}



