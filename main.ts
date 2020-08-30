tiles.setTilemap(tiles.createTilemap(hex`10001000010202080213020802030000000000000f0605070605060511090000000000000e05070705050507050a0000000000000e0705050706050505090000000000000f05060607070705050a0000000000000f0605070705070506090000000000000d0c0b0c0c0b0c0b0c04000000000000080210020808021002080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    2 2 2 2 2 2 2 2 2 2 . . . . . . 
    2 . . . . . . . . 2 . . . . . . 
    2 . . . . . . . . 2 . . . . . . 
    2 . . . . . . . . 2 . . . . . . 
    2 . . . . . . . . 2 . . . . . . 
    2 . . . . . . . . 2 . . . . . . 
    2 2 2 2 2 2 2 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.chestClosed,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedNorth], TileScale.Sixteen))
let hero = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hero)
let key = false
game.onUpdate(function () {
    if (hero.tileKindAt(TileDirection.Top, sprites.dungeon.doorClosedNorth)) {
        if (controller.A.isPressed()) {
            if (key) {
                game.showLongText("だっしゅつ せいこう", DialogLayout.Bottom)
            } else {
                game.showLongText("かぎ が かかっている", DialogLayout.Bottom)
            }
        }
    }
})
