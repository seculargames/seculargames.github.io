---
---

$ ->
    stage = new createjs.Stage "game"
    circle = new createjs.Shape()
    circle.graphics.beginFill("red").drawCircle(0, 0, 30)
    circle.x = 50
    circle.y = 50
    circle.addEventListener "click", (event) ->
        console.log "You clicked me"

    stage.addChild circle
    stage.update()

    createjs.Ticker.addEventListener "tick", () ->
        circle.x += 10
        type = $("#type").val()
        if type == 'sin'
            circle.y = Math.sin(circle.x/90) * 50 + 30
        else
            circle.y = Math.random() * 50 + 30
        circle.x = 0 if circle.x > stage.canvas.width
        stage.update()
