class App {

  theString!: string;  // hier typ anpassen & Fehler beheben
  theBig!: number;  // hier ggf. anpassen
  theWhat: string;  // hier nicht anpassen
  theNumbers: number[] = [100, 200, 300];  //hier typ anpassen
  theArray: (string | boolean)[] = [];  // hier typ anpassen
  theBoss: ((string | number)[] | number | boolean)[] = [8, 3, true]; // hier typ anpassen
  theFinalBoss: (string | null |(string | boolean | number[])[])[] = ["das ist ein test"];  // hier typ anpassen

  constructor() {
    this.theBig = 1000;  // hier ggf. anpassen
    this.theWhat = "200";  // hier anpassen
    this.theNumbers = [100];  // hier anpassen
    this.theArray = ["Marion", true];  // hier nicht anpassen
    this.theBoss = [[1, 2, 7, "9"], [66]];  // hier nicht anpassen
    this.theFinalBoss = ["das ist ein langer test", ["ein weiterer Test", true, [3, 6, 9]], null];  // hier nicht anpassen
  }
}