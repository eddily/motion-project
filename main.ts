while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) > -40) {
        music.pewPew.playUntilDone()
        light.photonForward(1)
    } else {
        light.clear()
        music.stopAllSounds()
    }
    
}
