window.addEventListener('keydown', (event) => {
    if(player.preventInput === true) return

    switch (event.key) {
        case 'w':
            for(let i = 0; i < doors.length; i++) {
                const door = doors[i]
                if(
                    player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width && // rigth
                    player.hitbox.position.x >= door.position.x && // left
                    player.hitbox.position.y + player.hitbox.height >= door.position.y && // bottom
                    player.hitbox.position.y <= door.position.y + door.height // top
                ) {
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('enterDoor')
                    door.play()
                    return
                }
            }

            if(player.velocity.y === 0) player.velocity.y = -15
            break

        case 'a':
            keys.a.pressed = true
            break

        case 'd':
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false
            break

        case 'd':
            keys.d.pressed = false
            break
    }
})