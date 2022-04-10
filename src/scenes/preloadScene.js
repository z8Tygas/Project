/** 
 * Class Preloader Scene, to load all assets before game start
 */
class preloadScene extends Phaser.Scene {
  constructor() {
    super("preloadScene");
  }
  
  preload() {
    
    sessionVerify();

    let x0 = this.game.config.width * 0.1;
    let xSize = this.game.config.width * 0.8;

    let y0 = this.game.config.height * 0.4;
    let ySize = this.game.config.height * 0.2;

    this.progressBarOut = this.add.graphics();
    this.progressBarIn = this.add.graphics();

    let rectout = new Phaser.Geom.Rectangle(x0, y0, xSize, ySize);
    let rectin = new Phaser.Geom.Rectangle(x0 + (xSize*0.01), y0 + (ySize*0.05), xSize - 2*xSize*0.01,  ySize - 2*ySize*0.05);

    this.progressBarOut.fillStyle(0xffffdd, 1);
    this.progressBarOut.fillRectShape(rectout);

    this.progressBarIn.fillStyle(0xfbdc55, 1);
    this.progressBarIn.fillRectShape(rectin);

    this.load.on('progress', (value) =>{
      let rectin = new Phaser.Geom.Rectangle(x0 + (xSize*0.01), y0 + (ySize*0.05), value*(xSize - 2*xSize*0.01),  ySize - 2*ySize*0.05);
      this.progressBarIn.clear();
      this.progressBarIn.fillStyle(0xfbdc55, 1);
      this.progressBarIn.fillRectShape(rectin);
    })
    
    // ---------- Start Screen ---------
    this.load.image("background", "assets/menu/backgroundRect.png");
    this.load.image("btPlay", "assets/menu/btPlay.png");
    this.load.image("btInfo", "assets/menu/btinfo.png");
    this.load.image("btCreditos", "assets/menu/btcreditos.png");
    this.load.image("titulo", "assets/menu/titulo.png");
    this.load.image("titulo2", "assets/menu/titulo2.png");
    this.load.image("boneco", "assets/menu/boneco.png");
  }
  
  // Start game and stop preloader
  create() {
    this.progressBarIn.destroy();
    this.progressBarOut.destroy();

    this.scene.transition({
      target: 'startScene',
      duration: 1000,
      onComplete : () => {this.scene.start('startScene'); }
    });    
  }

  // Code to execute every frame
  update(){}
}