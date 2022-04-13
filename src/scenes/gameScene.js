let pos2Grid = new Map();
let pieces = [];
let table = new DoublyLinkedList(0);
let firstMove = true;

class gameScene extends Phaser.Scene {
    constructor() {
        super("gameScene");
    }

    
    /*
    data: { dificulty: 1 }
    */
   init(data) {
       this.dificulty = data.dificulty;
       
       pos2Grid.set(-27, [100]);
       pos2Grid.set(-26, [98]);
       pos2Grid.set(-25, [96]);
       pos2Grid.set(-24, [94]);
       pos2Grid.set(-23, [92]);
       pos2Grid.set(-22, [90]);
       pos2Grid.set(-21, [88]);
       pos2Grid.set(-20, [128, 0.09, 0.78]); // Special
       pos2Grid.set(-19, [130]);
       pos2Grid.set(-18, [132]);
       pos2Grid.set(-17, [134]);
       pos2Grid.set(-16, [136]);
       pos2Grid.set(-15, [138]);
       pos2Grid.set(-14, [140]);
       pos2Grid.set(-13, [142]);
       pos2Grid.set(-12, [186, 0.91, 0.78]); // Special
       pos2Grid.set(-11, [184]);
       pos2Grid.set(-10, [182]);
       pos2Grid.set(-9, [180]);
       pos2Grid.set(-8, [178]);
       pos2Grid.set(-7, [176]);
       pos2Grid.set(-6, [174]);
       pos2Grid.set(-5, [172]);
       pos2Grid.set(-4, [212, 0.09, 0.78]); // Special
       pos2Grid.set(-3, [214]);
       pos2Grid.set(-2, [216]);
       pos2Grid.set(-1, [218]);
       pos2Grid.set(0, [220]);
       pos2Grid.set(1, [222]);
       pos2Grid.set(2, [224]);
       pos2Grid.set(3, [226]);
       pos2Grid.set(4, [228, 0.91, 0.22]); // Special
       pos2Grid.set(5, [268]);
       pos2Grid.set(6, [266]);
       pos2Grid.set(7, [264]);
       pos2Grid.set(8, [262]);
       pos2Grid.set(9, [260]);
       pos2Grid.set(10, [258]);
       pos2Grid.set(11, [256]);
       pos2Grid.set(12, [254, 0.91, 0.22]); // Special
       pos2Grid.set(13, [298]);
       pos2Grid.set(14, [300]);
       pos2Grid.set(15, [302]);
       pos2Grid.set(16, [304]);
       pos2Grid.set(17, [306]);
       pos2Grid.set(18, [308]);
       pos2Grid.set(19, [310]);
       pos2Grid.set(20, [312, 0.91, 0.22]); // Special
       pos2Grid.set(21, [352]);
       pos2Grid.set(22, [350]);
       pos2Grid.set(23, [348]);
       pos2Grid.set(24, [346]);
       pos2Grid.set(25, [344]);
       pos2Grid.set(26, [342]);
       pos2Grid.set(27, [340]);
    }
    
    create() {
        var gridConfig = {
            'scene': this,
            'cols': 21,
            'rows': 21
        }
        this.aGrid = new AlignGrid(gridConfig);
        this.backgroundGame = this.add.image(0, 0, "backgroundGame");
        this.aGrid.placeAtIndex(220, this.backgroundGame);
        this.backgroundGame.setScale(1.7);
        

        for (let i = 1; i <= 28; i++) {
            pieces[i] = this.add.image(50000 ,  50000, "piece".concat(i));
        }

        this.back2 = this.add.image(0, 0, 'back');
        this.back2.setOrigin(-0.1, -0.1);
        this.aGrid.placeAtIndex(0, this.back2);

        this.placePiece(1, true);
        this.placePiece(2, true);
        this.placePiece(3, true);
        this.placePiece(4, true);
        this.placePiece(5, true);
        this.placePiece(6, false);
        this.placePiece(7, true);
        this.placePiece(8, true);
        this.placePiece(9, true);
        this.placePiece(10, true);
        this.placePiece(11, true);
        this.placePiece(12, true);
        this.placePiece(13, false);
        this.placePiece(14, true);
        this.placePiece(15, true);
        this.placePiece(16, true);
        this.placePiece(17, true);
        this.placePiece(18, false);
        this.placePiece(19, true);
        this.placePiece(20, true);
        this.placePiece(21, false);
        this.placePiece(22, true);
        this.placePiece(23, true);
        this.placePiece(24, false);
        this.placePiece(25, true);
        this.placePiece(26, true);
        this.placePiece(27, false);
        this.placePiece(28, true);


        // --------------- Efeitos nas imagens --------------------

        this.back2.setInteractive({ useHandCursor: true });
        this.back2.on('pointerover', () => {
            this.back2.displayHeight += 5;
            this.back2.displayWidth += 5;
        });
        this.back2.on('pointerout', () => {
            this.back2.displayHeight -= 5;
            this.back2.displayWidth -= 5;
        });

        // --------------- Transicoes --------------------

        this.back2.on('pointerup', function (pointer) {
            this.backgroundGame.alpha = 0;
            this.tweens.add({
                targets: [this.back2],
                delay: 100,
                durantion: 1000,
                x: '+=' + game.config.width,
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
            if (fromScene === this.scene.get('preGameScene')) {
                this.tweens.add({
                    delay: 100,
                    targets: [this.backgroundGame],
                    durantion: 5000,
                    alpha: { start: 0.45, to: 1 },
                    ease: 'Linear',
                });
                this.back2.x += game.config.width;
                this.tweens.add({
                    delay: 100,
                    targets: [this.back2],
                    durantion: 1000,
                    x: '-=' + game.config.width,
                    ease: 'Power2'
                });
            }
        }, this);
    }

    /**
    * @param piece is an int that is the piece number
    * @param head is true if its to place left false if right
    */
    placePiece(piece, head) {
        let pos = 0;
        if (firstMove == true) {
            table.changeHead(piece);
            firstMove = false;
        }
        else if (head == true) {
            table.prepend(piece);
            pos = table.head.pos;
        }
        else {
            table.append(piece);
            pos = table.tail.pos;
        }
        console.log(pos);
        let index = pos2Grid.get(pos);

        if (index.length == 1) {
            pieces[piece].angle = 90;
            pieces[piece].setScale(0.9);
            this.aGrid.placeAtIndex(index[0], pieces[piece]);
        }
        else {
            let indice = index[0];
            let displacex = index[1];
            let displacey = index[2];
            pieces[piece].setScale(0.985);
            pieces[piece].setOrigin(displacex, displacey);
            this.aGrid.placeAtIndex(indice, pieces[piece]);
        }
    }
}