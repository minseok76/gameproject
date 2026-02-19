namespace SpriteKind {
    export const key = SpriteKind.create()
    export const door = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`level 1-1`)) {
        mySprite.vy = jumpPower
    } else if (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles8)) {
        mySprite.vy = jumpPower
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        mySprite.vy = -350
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    if (totalkey == haskey) {
        sprites.destroy(otherSprite)
        level += 1
        info.changeScoreBy(1)
        info.startCountdown(3)
    } else {
        sprites.destroy(otherSprite)
        mySprite.sayText("키가 부족합니다", 2000, false)
        scene.cameraShake(4, 500)
        timer.after(500, function () {
            fail()
        })
    }
})
function level_3 () {
	
}
function stage () {
    sprites.destroyAllSpritesOfKind(SpriteKind.key)
    sprites.destroyAllSpritesOfKind(SpriteKind.door)
    haskey = 0
    totalkey = 0
    moveSpeed = 0
    jumpPower = 0
    gravity = 0
    if (level == 1) {
        level_1()
    } else if (level == 2) {
        level_2()
    } else if (level == 3) {
        level_4()
    } else if (level == 4) {
        level_3()
    } else if (level == 5) {
    	
    } else if (level == 6) {
    	
    } else if (level == 7) {
    	
    } else if (level == 8) {
    	
    } else if (level == 9) {
    	
    }
}
function level_2 () {
    totalkey = 4
    moveSpeed = 100
    jumpPower = -180
    gravity = 400
    scene.setBackgroundColor(13)
    tiles.setCurrentTilemap(tilemap`level 2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 25))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(11, 21))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(20, 21))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(18, 26))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(22, 3))
    door = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f 5 f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        `, SpriteKind.door)
    tiles.placeOnTile(door, tiles.getTileLocation(1, 7))
    mySprite.ay = gravity
    controller.moveSprite(mySprite, moveSpeed, 0)
    mySprite.sayText("열쇠를 4개 찾아 탈출하세요", 2000, false)
}
function level_1 () {
    totalkey = 2
    moveSpeed = 70
    gravity = 400
    jumpPower = -170
    scene.setBackgroundColor(1)
    tiles.setCurrentTilemap(tilemap`수준2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(2, 4))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(9, 2))
    door = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f 5 f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        `, SpriteKind.door)
    tiles.placeOnTile(door, tiles.getTileLocation(9, 6))
    mySprite.ay = gravity
    controller.moveSprite(mySprite, moveSpeed, 0)
    mySprite.sayText("열쇠를 2개를 찾아 탈출하세요", 2000, false)
}
info.onCountdownEnd(function () {
    stage()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hazardLava1`, function (sprite, location) {
    mySprite.sayText("으악", 2000, false)
    scene.cameraShake(4, 500)
    timer.after(500, function () {
        fail()
    })
})
function level_4 () {
    totalkey = 5
    gravity = 300
    jumpPower = -200
    moveSpeed = 120
    scene.setBackgroundColor(10)
    tiles.setCurrentTilemap(tilemap`수준3`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 13))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(33, 4))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(55, 2))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(83, 8))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(115, 8))
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 5 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnTile(key, tiles.getTileLocation(135, 1))
    door = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f 5 f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        . . . f f f f f f f f f f f . . 
        `, SpriteKind.door)
    tiles.placeOnTile(door, tiles.getTileLocation(198, 4))
    mySprite.ay = gravity
    controller.moveSprite(mySprite, moveSpeed, 0)
    mySprite.sayText("열쇠를 5개 찾아 탈출하세요", 2000, false)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    mySprite.sayText("으악", 2000, false)
    scene.cameraShake(4, 500)
    timer.after(500, function () {
        fail()
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    haskey += 1
    mySprite.sayText(haskey, 1000, true)
})
function fail () {
    stage()
}
let door: Sprite = null
let key: Sprite = null
let gravity = 0
let moveSpeed = 0
let haskey = 0
let totalkey = 0
let jumpPower = 0
let mySprite: Sprite = null
let level = 0
level = 1
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f c c c c f f . . . 
    . f f c c c c c c f f . . 
    f f c c c c c c c c f f . 
    f f c c f c c c c c c f . 
    f f f f f c c c f c c f . 
    f f f f c c c f c c f f . 
    f f f f f f f f f f f f . 
    f f f f f f f f f f f f . 
    . f f f f f f f f f f . . 
    . f f f f f f f f f f . . 
    f e f f f f f f f f e f . 
    e 4 f 7 7 7 7 7 7 c 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
stage()
