class gameScene extends Phaser.Scene {
    constructor() {
        super("gameScene");
    }

    init() { }

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
        this.aGrid.placeAtIndex(211, this.back2);

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