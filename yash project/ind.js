var player = videojs('videoPlayer',{
    autoplay: 'muted',
    controls: true,
    loop: true,
    playbackRates: [0.5 , 1 , 1.5, 2, 2.5, 3],
    plugins:{
        hotkeys:{
            enableModifiersForNumbers: false,
            seekStep: 5,
        }
    }
});

    
    
