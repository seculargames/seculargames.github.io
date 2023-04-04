---
layout: null
---

(function() {
    let type = "WebGL"
    if (!PIXI.utils.isWebGLSupported()){
        type = "canvas"
    }

    let app = new PIXI.Application({
        width: 800,
        height: 600,
        antialias: true,
        transparent: false,
        resolution: 1
    })

    document.getElementById("game").appendChild(app.view)
})();
