/**
 * Created by sanchez 
 */
'use strict';


window.h5 = {
    initPixi: function() {
        //Pixi-spine 1.3.x works ONLY with data exported from Spine 3.5.！！！！！！！！！！
        var app = new PIXI.Application();
        document.body.appendChild(app.view);

        var basicText = new PIXI.Text('Pixi Skeletal Animation', { fill: 0xffffff, fontSize: 36, fontFamily: 'Arial', align: 'center' });
        
        basicText.x = app.renderer.width / 2 - basicText.width / 2;
        basicText.y = 50;
        app.stage.addChild(basicText);

        // load spine data
        PIXI.loader
            .add('dragon', './assets/img/NewDragon.json')
            .load(function(loader, res) {
                var dragon = new PIXI.spine.Spine(res.dragon.spineData);
                // set the position
                dragon.x = app.renderer.width / 2;
                dragon.y = app.renderer.height;

                dragon.scale.set(0.8);

                // set up the mixes!

                // play animation


                app.stage.addChild(dragon);

                dragon.state.setAnimation(0, 'stand', true);

                app.start();
            });

        app.stage.interactive = true;

        function onAssetsLoaded(loader, res) {
            // create a spine boy
        }
    }
};
window.onload = function() {
    window.h5.initPixi();
};



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