class preGameScene extends Phaser.Scene{
    constructor(){
      super("preGameScene");
    }
  
    init() {}
  
    create(){
        var gridConfig = {
        'scene': this,
        'cols': 21,
        'rows': 21
        }
        this.aGrid = new AlignGrid(gridConfig);
        this.background = this.add.image(0, 0, "background");
        this.aGrid.placeAtIndex(220,this.background);
        this.background.setScale(1.7);
    //   this.background.alpha = 0.6;

        this.facil = this.add.image(0, 0, 'facil');
        this.aGrid.placeAtIndex(116, this.facil);
        
        this.back = this.add.image(0, 0, 'back');
        this.aGrid.placeAtIndex(211, this.back);

        /* this.aGrid.show();
        this.aGrid.showNumbers(); */
      
     
    // --------------- Efeitos nas imagens --------------------
    
        this.back.setInteractive({ useHandCursor: true });
        this.back.on('pointerover', () => {
            this.back.displayHeight += 5;
            this.back.displayWidth += 5;
        });
        this.back.on('pointerout', () => {
        this.back.displayHeight -= 5;
        this.back.displayWidth -= 5;
        });

        this.facil.setInteractive({ useHandCursor: true });
        this.facil.on('pointerover', () => {
            this.facil.displayHeight += 5;
            this.facil.displayWidth += 5;
        });
        this.facil.on('pointerout', () => {
        this.facil.displayHeight -= 5;
        this.facil.displayWidth -= 5;
        });

      // --------------- Transicoes --------------------

        this.back.on('pointerup', function (pointer) {
        this.tweens.add({
            targets: this.background,
            durantion : 1000,
            alpha: { start: 0.45, to: 0 },
            ease:'Linear',
        });
        this.tweens.add({
            targets: [this.back, this.facil],
            delay: 100,
            durantion : 1000,
            x: '+=' + game.config.width,
            ease: 'power2'
        });
        this.scene.transition({
            target: 'StartScene',
            duration: 1000,
            moveBelow: true,
        });
        }, this);


      this.events.on('transitionstart', function(fromScene, duration){
        if ( fromScene === this.scene.get('startScene')   ) {
            this.tweens.add({
                delay: 100,
                targets: [this.facil, this.back],
                durantion : 5000,
                alpha: { start: 0, to: 1 },
                ease:'Linear',
            });
            this.tweens.add({
                delay: 100,
                targets: [this.background],
                durantion : 5000,
                alpha: { start: 1, to: 0.45 },
                ease:'Linear',
            });
        }
      }, this );
    }
  }