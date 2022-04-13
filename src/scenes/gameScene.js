class gameScene extends Phaser.Scene {
    constructor() {
        super("gameScene");
    }

    /*
    data: { dificulty: 1 }
    */
    init(data) {
        this.dificulty = data.dificulty;
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

        this.back2 = this.add.image(0, 0, 'back');
        this.back2.setOrigin(-0.1, -0.1);
        this.aGrid.placeAtIndex(0, this.back2);

        this.piece1 = this.add.image(0,0, 'piece1');
        this.piece1.setScale(0.9);
        this.piece1.angle = 90;
        this.aGrid.placeAtIndex(219, this.piece1);
        
        this.piece2 = this.add.image(0,0, 'piece2');
        this.piece2.setScale(0.9);
        this.piece2.angle = 90;
        this.aGrid.placeAtIndex(217, this.piece2);

        this.piece3 = this.add.image(0,0, 'piece3');
        this.piece3.setScale(0.9);
        this.piece3.angle = 90;
        this.aGrid.placeAtIndex(215, this.piece3);
        
        this.piece4 = this.add.image(0,0, 'piece4');
        this.piece4.setScale(0.9);
        this.piece4.angle = 90;
        this.aGrid.placeAtIndex(213, this.piece4);
        
        this.piece5 = this.add.image(0,0, 'piece5');
        this.piece5.setScale(0.9);
        this.piece5.angle = 90;
        this.aGrid.placeAtIndex(211, this.piece5);
        
        this.piece6 = this.add.image(0,0, 'piece6');
        this.piece6.setScale(0.75);
        this.piece6.setOrigin(0.5, 0.5);
        this.aGrid.placeAtIndex(150, this.piece6);

        this.aGrid.show();
        this.aGrid.showNumbers();

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
}