export class Game {
    public players: string[] = [];
    public playerPics: string[] = [];
    public unplayedCards: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation = false;
    public currentCard: string = '';


    constructor() {
        for (let i = 1; i <= 13; i++) {
            this.unplayedCards.push('spade_' + i);
            this.unplayedCards.push('hearts_' + i);
            this.unplayedCards.push('diamonds_' + i);
            this.unplayedCards.push('clubs_' + i);
        }
        shuffle(this.unplayedCards);
    }

    public toJson() {
        return {
            players: this.players,
            playerPics: this.playerPics,
            unplayedCards: this.unplayedCards,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard
        };
    }

}


// mix cards (shuffle) from stackoverflow
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }