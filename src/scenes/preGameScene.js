class preGameScene extends Phaser.Scene {
    constructor() {
        super("preGameScene");
    }

    init() { }

    create() {
        var gridConfig = {
            'scene': this,
            'cols': 21,
            'rows': 21
        }
        this.aGrid = new AlignGrid(gridConfig);
        this.background = this.add.image(0, 0, "background");
        this.aGrid.placeAtIndex(220, this.background);
        this.background.setScale(1.7);

        this.back = this.add.image(0, 0, 'back');
        this.aGrid.placeAtIndex(211, this.back);

        this.facil = this.add.image(0, 0, 'facil');
        this.facil.setScale(0.5);
        this.aGrid.placeAtIndex(115, this.facil);

        this.medio = this.add.image(0, 0, 'medio');
        this.medio.setScale(0.5);
        this.aGrid.placeAtIndex(178, this.medio);

        this.dificil = this.add.image(0, 0, 'dificil');
        this.dificil.setScale(0.5);
        this.aGrid.placeAtIndex(241, this.dificil);

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

        this.medio.setInteractive({ useHandCursor: true });
        this.medio.on('pointerover', () => {
            this.medio.displayHeight += 5;
            this.medio.displayWidth += 5;
        });
        this.medio.on('pointerout', () => {
            this.medio.displayHeight -= 5;
            this.medio.displayWidth -= 5;
        });

        this.dificil.setInteractive({ useHandCursor: true });
        this.dificil.on('pointerover', () => {
            this.dificil.displayHeight += 5;
            this.dificil.displayWidth += 5;
        });
        this.dificil.on('pointerout', () => {
            this.dificil.displayHeight -= 5;
            this.dificil.displayWidth -= 5;
        });

        // --------------- Transicoes --------------------

        this.back.on('pointerup', function (pointer) {
            this.background.alpha = 0;
            this.tweens.add({
                targets: [this.back, this.facil, this.medio, this.dificil],
                delay: 100,
                durantion: 1000,
                x: '+=' + game.config.width,
                ease: 'power2'
            });
            this.scene.transition({
                target: 'startScene',
                duration: 1000,
                moveBelow: true,
            });
        }, this);

        this.facil.on('pointerup', function (pointer) {
            this.background.alpha = 0;
            this.tweens.add({
                targets: [this.back, this.facil, this.medio, this.dificil],
                delay: 100,
                durantion: 1000,
                x: '-=' + game.config.width,
                ease: 'power2'
            });
            this.scene.transition({
                target: 'gameScene',
                duration: 1000,
                moveBelow: true,
            });
        }, this);

        // got here from ...
        this.events.on('transitionstart', function (fromScene, duration) {
            if (fromScene === this.scene.get('startScene')) {
                this.tweens.add({
                    delay: 100,
                    targets: [this.background],
                    durantion: 5000,
                    alpha: { start: 1, to: 0.45 },
                    ease: 'Linear',
                });
                this.back.x += game.config.width;
                this.facil.x += game.config.width;
                this.medio.x += game.config.width;
                this.dificil.x += game.config.width;

                this.tweens.add({
                    delay: 100,
                    targets: [this.facil, this.medio, this.dificil, this.back],
                    durantion: 1000,
                    x: '-=' + game.config.width,
                    ease: 'Power2'
                });
            }

            if (fromScene === this.scene.get('gameScene')) {
                this.tweens.add({
                    delay: 100,
                    targets: [this.background],
                    durantion: 5000,
                    alpha: { start: 1, to: 0.45 },
                    ease: 'Linear',
                });

                this.back.x -= game.config.width;
                this.facil.x -= game.config.width;
                this.medio.x -= game.config.width;
                this.dificil.x -= game.config.width;

                this.tweens.add({
                    delay: 100,
                    targets: [this.back, this.facil, this.medio, this.dificil],
                    durantion: 5000,
                    x: '+=' + game.config.width,
                    ease: 'Power2'
                });
            }
        }, this);
    }
}