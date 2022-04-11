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
      
      this.background= this.add.image(0, 0, 'background');
      this.aGrid.placeAtIndex(220,this.background);
      this.background.setScale(1.7);

      this.facil = this.add.image(0, 0, 'facil');
      this.aGrid.placeAtIndex(115,this.facil);
      
      /* this.aGrid.show();
      this.aGrid.showNumbers(); */
      
  
      // --------------- Transicoes --------------------
      this.events.on('transitionstart', function(fromScene, duration){
        if ( fromScene === this.scene.get('startScene')   ) {
            this.tweens.add({
                targets: [this.info, this.credits,
                            this.btPlay, this.boneco,
                            this.title1, this.title2],
                delay: 100,
                durantion : 1000,
                x: '+=' + game.config.width,
                ease: 'power2'
            });
        }
      }, this );
    }
  }