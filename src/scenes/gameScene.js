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
    }
}