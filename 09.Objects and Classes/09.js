function jukebox(input){
    let songs = []

    class Song{
        constructor(type,name,time){
        this.type = type
        this.name = name
        this.time = time
        }
    }

    let num = input.shift()
    let searchedType = input.pop()

    for (const info of input) {
        let splittedInfo = info.split("_")
        songs.push(new Song(splittedInfo[0],splittedInfo[1],splittedInfo[2]))
    }



    for (const song of songs) {
        if (searchedType === "all"){
            console.log(song.name)
        } else {
            if (song.type === searchedType){
                console.log(song.name)
            }
        }   
    }
}

jukebox([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )

jukebox([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )
jukebox([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )