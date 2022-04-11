class startScene extends Phaser.Scene{
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
      
      
  
      // --------------- Transicoes --------------------
      /* this.events.on('transitionstart', function(fromScene, duration){
        if ( fromScene === this.scene.get('startScene')   ) {
          this.tweens.add({
              delay: 100,
              targets: [this.background, this.info,
                        this.btPlay, this.credits, this.boneco,
                        this.title1, this.title2],
              durantion : 5000,
              alpha: { start: 0, to: 1 },
              ease:'Linear',
          });
        }
      }, this ); */
    }
  }