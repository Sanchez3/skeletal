/**
 * Created by sanchez 
 */
'use strict';

window.h5 = {
    initPhaser: function() {
        //缺失了部分图案
        var sprite;
        var index = -1;

        var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'mycanvas', {
            init: function() {
                this.dragonBonesPlugin = this.game.plugins.add(Rift.DragonBonesPlugin);
            },
            preload: function() {
                this.dragonBonesPlugin.addResourceByNames('SwordsMan',
                    './assets/img/SwordsMan_ske.json', './assets/img/SwordsMan_tex.json', './assets/img/SwordsMan_tex.png');
                this.dragonBonesPlugin.loadResources();
            },
            create: function() {
                console.log(1)
                this.add.text(this.world.centerX, 50, 'Phaser Skeletal Animation\nClick Click Click', { fill: '#fff', font: '30px Arial',align:'center' }).anchor.setTo(0.5);
                sprite = this.dragonBonesPlugin.getArmature('SwordsMan');
                sprite.position.setTo(200, this.game.height - 100);
                sprite.scale.setTo(0.5);
                this.world.add(sprite);

                // this.changeAnimation();
                var names = sprite.animation._animationNames;
                // sprite.animation.play(names[0], false);
                this.input.onDown.add(this.changeAnimation, this);
            },
            changeAnimation: function(animation) {
                var names = sprite.animation._animationNames;
                index = (index + 1) % 8;
                sprite.animation.play(names[index], false);
            },
            update: function() {
                // this.dragonBonesPlugin.refreshClock(); // when switching states this needs called
            }
        });
    }
};
window.h5.initPhaser();


function showStats() {
    var stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    var fs = document.createElement('div');
    fs.style.position = 'absolute';
    fs.style.left = 0;
    fs.style.top = 0;
    fs.style.zIndex = 999;
    fs.appendChild(stats.domElement);
    document.body.appendChild(fs);

    function animate() {
        stats.begin();
        // monitored code goes here
        stats.end();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}
showStats();