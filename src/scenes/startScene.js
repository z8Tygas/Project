class startScene extends Phaser.Scene {
  constructor() {
    super("startScene");
  }

  init() { }

  create() {
    var gridConfig = {
      'scene': this,
      'cols': 21,
      'rows': 21
    }
    this.aGrid = new AlignGrid(gridConfig);

    this.background = this.add.image(0, 0, 'background');
    this.aGrid.placeAtIndex(220, this.background);
    this.background.setScale(1.7);

    this.title1 = this.add.image(0, 0, 'titulo');
    this.title2 = this.add.image(0, 0, 'titulo2');
    this.title1.setScale(1.6);
    this.aGrid.placeAtIndex(73, this.title1);
    this.title2.setScale(0.8);
    this.title2.setOrigin(0.65, 0.7);
    this.aGrid.placeAtIndex(29, this.title2);

    this.btPlay = this.add.image(0, 0, 'btPlay');
    this.btPlay.setScale(1.4);
    this.aGrid.placeAtIndex(262, this.btPlay);

    this.boneco = this.add.image(0, 0, 'boneco');
    this.boneco.setScale(1.65);
    this.aGrid.placeAtIndex(339, this.boneco);

    this.info = this.add.image(0, 0, 'btInfo');
    this.info.setScale(0.8);
    this.info.setOrigin(0.3, 0.8);
    this.aGrid.placeAtIndex(355, this.info);

    this.credits = this.add.image(0, 0, 'btCreditos');
    this.credits.setScale(0.8);
    this.credits.setOrigin(0.3, 0.8);
    this.aGrid.placeAtIndex(418, this.credits);

    // --------------- Efeitos nas imagens --------------------
    this.btPlay.setInteractive({ useHandCursor: true });
    this.btPlay.on('pointerover', () => {
      this.btPlay.displayHeight += 5;
      this.btPlay.displayWidth += 5;
    });
    this.btPlay.on('pointerout', () => {
      this.btPlay.displayHeight -= 5;
      this.btPlay.displayWidth -= 5;
    });

    this.info.setInteractive({ useHandCursor: true });
    this.info.on('pointerover', () => {
      this.info.displayHeight += 5;
      this.info.displayWidth += 5;
    });
    this.info.on('pointerout', () => {
      this.info.displayHeight -= 5;
      this.info.displayWidth -= 5;
    });

    this.credits.setInteractive({ useHandCursor: true });
    this.credits.on('pointerover', () => {
      this.credits.displayHeight += 5;
      this.credits.displayWidth += 5;
    });
    this.credits.on('pointerout', () => {
      this.credits.displayHeight -= 5;
      this.credits.displayWidth -= 5;
    });

    // --------------- Transicoes --------------------
    this.btPlay.on('pointerup', function (pointer) {
      this.background.alpha = 0;
      
      this.tweens.add({
        targets: [this.info, this.credits,
        this.btPlay, this.boneco,
        this.title1, this.title2],
        delay: 100,
        durantion: 1000,
        x: '-=' + game.config.width,
        ease: 'power2'
      });
      this.scene.transition({
        target: 'preGameScene',
        duration: 1000,
        moveBelow: true,
      });
    }, this);

    // got here from ...
    this.events.on('transitionstart', function (fromScene, duration) {
      if (fromScene === this.scene.get('preloadScene')) {
        this.tweens.add({
          delay: 100,
          targets: [this.background, this.info,
          this.btPlay, this.credits, this.boneco,
          this.title1, this.title2],
          durantion: 3000,
          alpha: { start: 0, to: 1 },
          ease: 'Linear',
        });
      }
      if (fromScene === this.scene.get('preGameScene')) {
        this.tweens.add({
          delay: 100,
          targets: this.background,
          durantion: 1000,
          alpha: { start: 0.45, to: 1 },
          ease: 'Linear'
        });

        this.title1.x -= game.config.width;
        this.title2.x -= game.config.width;
        this.btPlay.x -= game.config.width;
        this.boneco.x -= game.config.width;
        this.credits.x -= game.config.width;
        this.info.x -= game.config.width;
        this.tweens.add({
          delay: 100,
          targets: [this.title1, this.title2, this.btPlay, this.info, this.credits, this.boneco],
          x: '+=' + game.config.width,
          durantion: 5000,
          ease: 'power2',

        });
      }
    }, this);

    /* 
    this.aGrid.show();
    this.aGrid.showNumbers(); */
  }
}