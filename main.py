while True:
    print (input.rotation(Rotation.PITCH))

    if input.rotation(Rotation.PITCH) > -40:
        music.pew_pew.play_until_done()
        light.photon_forward(1)
        
    else:
        light.clear()
        music.stop_all_sounds()

        