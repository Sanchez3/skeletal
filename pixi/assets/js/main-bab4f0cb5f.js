(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/sanchez/Work/test/dragon/src/assets/js/main.js":[function(require,module,exports){
/**
 * Created by sanchez 
 */
'use strict';


window.h5 = {
    initPixi: function() {
        //Pixi-spine 1.3.x works ONLY with data exported from Spine 3.5.！！！！！！！！！！
        var app = new PIXI.Application();
        document.body.appendChild(app.view);

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
window.h5.initPixi();


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
},{}]},{},["/Users/sanchez/Work/test/dragon/src/assets/js/main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgc2FuY2hleiBcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cblxuXG53aW5kb3cuaDUgPSB7XG4gICAgaW5pdFBoYXNlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8v57y65aSx5LqG6YOo5YiG5Zu+5qGIXG4gICAgICAgIHZhciBzcHJpdGU7XG4gICAgICAgIHZhciBpbmRleCA9IC0xO1xuXG4gICAgICAgIHZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKDgwMCwgNjAwLCBQaGFzZXIuQ0FOVkFTLCAnbXljYW52YXMnLCB7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdvbkJvbmVzUGx1Z2luID0gdGhpcy5nYW1lLnBsdWdpbnMuYWRkKFJpZnQuRHJhZ29uQm9uZXNQbHVnaW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZWxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uQm9uZXNQbHVnaW4uYWRkUmVzb3VyY2VCeU5hbWVzKCdTd29yZHNNYW4nLFxuICAgICAgICAgICAgICAgICAgICAnLi9hc3NldHMvaW1nL1N3b3Jkc01hbl9za2UuanNvbicsICcuL2Fzc2V0cy9pbWcvU3dvcmRzTWFuX3RleC5qc29uJywgJy4vYXNzZXRzL2ltZy9Td29yZHNNYW5fdGV4LnBuZycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uQm9uZXNQbHVnaW4ubG9hZFJlc291cmNlcygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coMSlcbiAgICAgICAgICAgICAgICB0aGlzLmFkZC50ZXh0KHRoaXMud29ybGQuY2VudGVyWCwgNTAsICdQaGFzZXIgU2tlbGV0YWwgQW5pbWF0aW9uXFxuQ2xpY2sgQ2xpY2sgQ2xpY2snLCB7IGZpbGw6ICcjZmZmJywgZm9udDogJzMwcHggQXJpYWwnLGFsaWduOidjZW50ZXInIH0pLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICAgICAgICAgIHNwcml0ZSA9IHRoaXMuZHJhZ29uQm9uZXNQbHVnaW4uZ2V0QXJtYXR1cmUoJ1N3b3Jkc01hbicpO1xuICAgICAgICAgICAgICAgIHNwcml0ZS5wb3NpdGlvbi5zZXRUbygyMDAsIHRoaXMuZ2FtZS5oZWlnaHQgLSAxMDApO1xuICAgICAgICAgICAgICAgIHNwcml0ZS5zY2FsZS5zZXRUbygwLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMud29ybGQuYWRkKHNwcml0ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNoYW5nZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIHZhciBuYW1lcyA9IHNwcml0ZS5hbmltYXRpb24uX2FuaW1hdGlvbk5hbWVzO1xuICAgICAgICAgICAgICAgIC8vIHNwcml0ZS5hbmltYXRpb24ucGxheShuYW1lc1swXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQub25Eb3duLmFkZCh0aGlzLmNoYW5nZUFuaW1hdGlvbiwgdGhpcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbmdlQW5pbWF0aW9uOiBmdW5jdGlvbihhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZXMgPSBzcHJpdGUuYW5pbWF0aW9uLl9hbmltYXRpb25OYW1lcztcbiAgICAgICAgICAgICAgICBpbmRleCA9IChpbmRleCArIDEpICUgODtcbiAgICAgICAgICAgICAgICBzcHJpdGUuYW5pbWF0aW9uLnBsYXkobmFtZXNbaW5kZXhdLCBmYWxzZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRyYWdvbkJvbmVzUGx1Z2luLnJlZnJlc2hDbG9jaygpOyAvLyB3aGVuIHN3aXRjaGluZyBzdGF0ZXMgdGhpcyBuZWVkcyBjYWxsZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBpbml0UGl4aTogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vUGl4aS1zcGluZSAxLjMueCB3b3JrcyBPTkxZIHdpdGggZGF0YSBleHBvcnRlZCBmcm9tIFNwaW5lIDMuNS7vvIHvvIHvvIHvvIHvvIHvvIHvvIHvvIHvvIHvvIFcbiAgICAgICAgdmFyIGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLnZpZXcpO1xuXG4gICAgICAgIC8vIGxvYWQgc3BpbmUgZGF0YVxuICAgICAgICBQSVhJLmxvYWRlclxuICAgICAgICAgICAgLmFkZCgnZHJhZ29uJywgJy4vYXNzZXRzL2ltZy9OZXdEcmFnb24uanNvbicpXG4gICAgICAgICAgICAubG9hZChmdW5jdGlvbihsb2FkZXIsIHJlcykge1xuICAgICAgICAgICAgICAgIHZhciBkcmFnb24gPSBuZXcgUElYSS5zcGluZS5TcGluZShyZXMuZHJhZ29uLnNwaW5lRGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgIGRyYWdvbi54ID0gYXBwLnJlbmRlcmVyLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBkcmFnb24ueSA9IGFwcC5yZW5kZXJlci5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBkcmFnb24uc2NhbGUuc2V0KDAuOCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgdGhlIG1peGVzIVxuXG4gICAgICAgICAgICAgICAgLy8gcGxheSBhbmltYXRpb25cblxuXG4gICAgICAgICAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKGRyYWdvbik7XG5cbiAgICAgICAgICAgICAgICBkcmFnb24uc3RhdGUuc2V0QW5pbWF0aW9uKDAsICdzdGFuZCcsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgYXBwLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBhcHAuc3RhZ2UuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uQXNzZXRzTG9hZGVkKGxvYWRlciwgcmVzKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBzcGluZSBib3lcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyB3aW5kb3cuaDUuY3NzSW5pdCgpLmV2ZW50SW5pdCgpO1xud2luZG93Lmg1LmluaXRQaXhpKCk7XG4vLyB3aW5kb3cuaDUuaW5pdFBoYXNlcigpO1xuXG5cbmZ1bmN0aW9uIHNob3dTdGF0cygpIHtcbiAgICB2YXIgc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICBzdGF0cy5zaG93UGFuZWwoMCk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG4gICAgdmFyIGZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGZzLnN0eWxlLmxlZnQgPSAwO1xuICAgIGZzLnN0eWxlLnRvcCA9IDA7XG4gICAgZnMuc3R5bGUuekluZGV4ID0gOTk5O1xuICAgIGZzLmFwcGVuZENoaWxkKHN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnMpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgc3RhdHMuYmVnaW4oKTtcbiAgICAgICAgLy8gbW9uaXRvcmVkIGNvZGUgZ29lcyBoZXJlXG4gICAgICAgIHN0YXRzLmVuZCgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cbnNob3dTdGF0cygpOyJdfQ==
