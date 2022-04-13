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
        // corner up
        this.piece6 = this.add.image(0,0, 'piece6');
        this.piece6.setScale(0.985);
        this.piece6.setOrigin(0.09, 0.78);
        this.aGrid.placeAtIndex(211, this.piece6);

        this.piece5 = this.add.image(0,0, 'piece5');
        this.piece5.setScale(0.9);
        this.piece5.angle = 90;
        this.aGrid.placeAtIndex(171, this.piece5);

        this.piece7 = this.add.image(0,0, 'piece7');
        this.piece7.setScale(0.9);
        this.piece7.angle = 90;
        this.aGrid.placeAtIndex(173, this.piece7);

        this.piece8 = this.add.image(0,0, 'piece8');
        this.piece8.setScale(0.9);
        this.piece8.angle = 90;
        this.aGrid.placeAtIndex(175, this.piece8);

        this.piece9 = this.add.image(0,0, 'piece9');
        this.piece9.setScale(0.9);
        this.piece9.angle = 90;
        this.aGrid.placeAtIndex(177, this.piece9);

        this.piece10 = this.add.image(0,0, 'piece10');
        this.piece10.setScale(0.9);
        this.piece10.angle = 90;
        this.aGrid.placeAtIndex(179, this.piece10);

        this.piece11 = this.add.image(0,0, 'piece11');
        this.piece11.setScale(0.9);
        this.piece11.angle = 90;
        this.aGrid.placeAtIndex(181, this.piece11);

        this.piece12 = this.add.image(0,0, 'piece12');
        this.piece12.setScale(0.9);
        this.piece12.angle = 90;
        this.aGrid.placeAtIndex(183, this.piece12);

        this.piece13 = this.add.image(0,0, 'piece13');
        this.piece13.setScale(0.9);
        this.piece13.angle = 90;
        this.aGrid.placeAtIndex(185, this.piece13);
        // corner 1 up
        this.piece14 = this.add.image(0,0, 'piece14');
        this.piece14.setScale(0.985);
        this.piece14.setOrigin(0.91, 0.78);
        this.aGrid.placeAtIndex(187, this.piece14);

        this.piece15 = this.add.image(0,0, 'piece15');
        this.piece15.setScale(0.9);
        this.piece15.angle = 90;
        this.aGrid.placeAtIndex(143, this.piece15);

        this.piece16 = this.add.image(0,0, 'piece16');
        this.piece16.setScale(0.9);
        this.piece16.angle = 90;
        this.aGrid.placeAtIndex(141, this.piece16);

        this.piece17 = this.add.image(0,0, 'piece17');
        this.piece17.setScale(0.9);
        this.piece17.angle = 90;
        this.aGrid.placeAtIndex(139, this.piece17);

        this.piece18 = this.add.image(0,0, 'piece18');
        this.piece18.setScale(0.9);
        this.piece18.angle = 90;
        this.aGrid.placeAtIndex(137, this.piece18);

        this.piece19 = this.add.image(0,0, 'piece19');
        this.piece19.setScale(0.9);
        this.piece19.angle = 90;
        this.aGrid.placeAtIndex(135, this.piece19);

        this.piece20 = this.add.image(0,0, 'piece20');
        this.piece20.setScale(0.9);
        this.piece20.angle = 90;
        this.aGrid.placeAtIndex(133, this.piece20);

        this.piece21 = this.add.image(0,0, 'piece21');
        this.piece21.setScale(0.9);
        this.piece21.angle = 90;
        this.aGrid.placeAtIndex(131, this.piece21);

        this.piece22 = this.add.image(0,0, 'piece22');
        this.piece22.setScale(0.9);
        this.piece22.angle = 90;
        this.aGrid.placeAtIndex(129, this.piece22);
        //corner 2 up
        this.piece23 = this.add.image(0,0, 'piece23');
        this.piece23.setScale(0.985);
        this.piece23.setOrigin(0.09, 0.78);
        this.aGrid.placeAtIndex(127, this.piece23);

        this.piece24 = this.add.image(0,0, 'piece24');
        this.piece24.setScale(0.9);
        this.piece24.angle = 90;
        this.aGrid.placeAtIndex(87, this.piece24);

        this.piece25 = this.add.image(0,0, 'piece25');
        this.piece25.setScale(0.9);
        this.piece25.angle = 90;
        this.aGrid.placeAtIndex(89, this.piece25);

        this.piece26 = this.add.image(0,0, 'piece26');
        this.piece26.setScale(0.9);
        this.piece26.angle = 90;
        this.aGrid.placeAtIndex(91, this.piece26);

        this.piece27 = this.add.image(0,0, 'piece27');
        this.piece27.setScale(0.9);
        this.piece27.angle = 90;
        this.aGrid.placeAtIndex(93, this.piece27);

        this.piece28 = this.add.image(0,0, 'piece28');
        this.piece28.setScale(0.9);
        this.piece28.angle = 90;
        this.aGrid.placeAtIndex(95, this.piece28);

        /* this.aGrid.show();
        this.aGrid.showNumbers(); */

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