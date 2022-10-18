
//Ocean mp4
//http://vjs.zencdn.net/v/oceans.mp4
//BLENDER STREAM
//https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8
//TwitchStream
//https://video-weaver.bue01.hls.ttvnw.net/v1/playlist/CqwFq2YKVFLsgigZS0qKFNby-GVkiq-MRoxv1wypkOc5GXuK9iF1Ag2_6a26gv6KZ0Z-5rGtpOMcYRuvu01e_PTQ-CdUXM8mMV0z4X8qhtxWFiFA4uaAv7F0N7a7Y5V7w41MMFf2JeMrQbNgKCf8zI4ljaNmdFaSdh1MeIT5xPA6kfdg7HwT0z7AFXxeLDKe2VETku4ziak3uvADjziyq0zInsJBWusTc8B-IKtsusVwzh2DF8JLuBZ4WkTVYglb60R2Zt3iOg5v3U7PI5UgnWNO0P2cLIRX_fzSkCnYxiyl-9QW2gkHylSCNu06L8rzsW8I8bGZHqkicPwkNRVuQXgDPP4w4ux_XTQxXoTuXd-a01uT89m-vW02GCPBRPFvA84hA91JrP54IlRFV45FYxlA8m1tJSriJ4U7u6CEFffWKYCPnz7jYvI2f7pbO8l9oRYrBtpkjjBz0vjV2iLIXLH7bhbHACAhbAQLlfvXHmxJqzggjb2PkQWUpgZaTBu6-FgbjclaJiy_RVFzd9D-BvHeaNmQPPsH7O07FPxUyNYdacocW5s_E4f0UWXMCr1y3Sby71KQS4-9h5C_Qy06_Zlkn93z5036ItBlcSdD9IS0RyAX0ZStV6AOBthzGbiD4PL8MU_nHW9jYHU64qHLpTSrndrfZBGaPMmjMPw6gkqhVyn9tlb_op8Lk3girfeSMvhsF3-T6i59BNVpoRRcPyelFfCrKHQ_fRSFiAgMI8KM27lRIb4PTZu8P9f478vQuv_b4Dy-D1OpYURtR3dX25GAsoQG3bvQvC9aJ_OVneWgOBTUYtdmgfG5jAJrK8nKuf9e4n4XqrOVa4GHDVFOSukBR4MiMc73gMhoFv89cfoaH8Fhr5IZ6EuwySjA77tdmxmUa7lmgJUmTAiVLCgzGgyOSPS2k8JmjkVYi8sgASoJdXMtZWFzdC0yMPUE.m3u8
//Intermissiong video
//https://player.vimeo.com/external/637531989.m3u8?s=0a75c635933b3588464fcbee094839bf08f9c252
//Artist video
//https://player.vimeo.com/external/616165133.m3u8?s=b904d959337c905551285b3fbd7325bc077638d7


const myVideoClip = new VideoClip(
    'https://player.vimeo.com/external/637531989.m3u8?s=0a75c635933b3588464fcbee094839bf08f9c252'
)

// #2
const myVideoTexture = new VideoTexture(myVideoClip)

// #3
const videoMaterial = new Material()
videoMaterial.albedoTexture = myVideoTexture
videoMaterial.roughness = 1
videoMaterial.specularIntensity = 0
videoMaterial.metallic = 0


// #4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
    new Transform({
        position: new Vector3(8, 3, 8),
        scale : new Vector3(9.6,5.4,1)
    })
)
screen.addComponent(videoMaterial)
screen.addComponent(
    new OnPointerDown(() => {
        myVideoTexture.playing = !myVideoTexture.playing
    })
)
engine.addEntity(screen)

const myVideoClip_a = new VideoClip(
    'https://player.vimeo.com/external/616165133.m3u8?s=b904d959337c905551285b3fbd7325bc077638d7'
)

// #2
const myVideoTexture_a = new VideoTexture(myVideoClip_a)

// #3
const videoMaterial_a = new Material()
videoMaterial_a.albedoTexture = myVideoTexture_a
videoMaterial_a.roughness = 1
videoMaterial_a.specularIntensity = 0
videoMaterial_a.metallic = 0


// #4
const screen_a = new Entity()
screen_a.addComponent(new PlaneShape())
screen_a.addComponent(
    new Transform({
        position: new Vector3(5, 3, 5),
        scale : new Vector3(9.6,5.4,1)
    })
)
screen_a.addComponent(videoMaterial_a)
screen_a.addComponent(
    new OnPointerDown(() => {
        myVideoTexture_a.playing = !myVideoTexture_a.playing
    })
)
engine.addEntity(screen_a)

