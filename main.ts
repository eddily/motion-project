while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) > 0 || input.rotation(Rotation.Pitch) < 0) {
        music.pewPew.playUntilDone()
        light.photonForward(1)
    } else {
        light.clear()
        music.stopAllSounds()
    }
    
}
