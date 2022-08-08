let songs = [
    {
        name: 'Song 1',
        artist: 'artist 1',
        background: 'linear-gradient(#881d13, #a03248f5, rgb(121, 101, 101))',
        background2: 'linear-gradient(to right, #881d13, #a03248f5, rgb(121, 101, 101))',
        cover: 'cover 1.png'
    },
    {
        name: 'Song 2',
        artist: 'artist 2',
        background: 'linear-gradient( #57211f, #a05625,rgb(70, 47, 47))',
        background2: 'linear-gradient( to right, #57211f, #a05625,rgb(70, 47, 47))',
        cover: 'cover 2.png'
    },
    {
        name: 'Song 3',
        artist: 'artist 3',
        background: 'linear-gradient(#f60025e3 10%, #f84d53, rgb(207, 130, 130))',
        background2: 'linear-gradient(to right, #f60025e3 10%, #f84d53, rgb(207, 130, 130))',
        cover: 'cover 3.png'

    },
    {
        name: 'Song 4',
        artist: 'artist 4',
        background: 'linear-gradient(#e08403, #fe3f2d, rgb(223, 109, 89))',
        background2: 'linear-gradient(to right, #e08403, #fe3f2d, rgb(223, 109, 89))',
        cover: 'cover 4.png'
    },
    {
        name: 'Song 5',
        artist: 'artist 5',
        background: 'linear-gradient(#1e193b, rgb(126, 117, 151))',
        background2: 'linear-gradient(to right, #1e193b, rgb(126, 117, 151))',
        cover: 'cover 5.png'
    },
    {
        name: 'Song 6',
        artist: 'artist 6',
        background: 'linear-gradient(#1e193b,#322c4e 50%, rgb(96, 90, 110))',
        background2: 'linear-gradient(to right, #1e193b,#322c4e 50%, rgb(96, 90, 110))',
        cover: 'cover 6.png'
    },
    {
        name: 'Song 7',
        artist: 'artist 7',
        background: 'linear-gradient(#002737e8 30%, rgba(107, 130, 165, 0.993))',
        background2: 'linear-gradient(to right, #002737e8 30%, rgba(107, 130, 165, 0.993))',
        cover: 'cover 7.png'
    },
    {
        name: 'Song 8',
        artist: 'artist 8',
        background: 'linear-gradient(#333, #777, #999)',
        background2: 'linear-gradient(to right, #333, #777, #999)',
        cover: 'cover 8.png'
    }
]


// add audio element
let audioElement = new Audio('Song 1.mp3')


let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let play = document.querySelector('.play');
let gif = document.querySelector('.gif');
let songName = document.querySelector('.name')
let container = document.querySelector('.container');
let coverImg = document.querySelector('.coverImg');
let down = document.querySelector('.down');


songName.innerText = 'Song 1';
container.style.background = 'linear-gradient(#881d13, #a03248f5, rgb(121, 101, 101))'
let i = 1

let container2 = document.querySelector('.container2');
let play2 = document.querySelector('.play2');
let gif2 = document.querySelector('.gif2');
let nameBottom = document.querySelector('.nameBottom');
let imgBottom = document.querySelector('.imgBottom');
let bottom2 = document.querySelector('.bottom2');
let bottomBack = document.querySelector('.bottom-main')

nameBottom.innerText = 'Song 1'



// for play pause next and previous functions

play.addEventListener('click',function(){
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play()
        play.classList.remove('fa-circle-play')
        play.classList.add('fa-circle-pause')
        gif.style.opacity = "1";
        play2.classList.remove('fa-circle-play')
        play2.classList.add('fa-circle-pause')
        gif2.style.opacity = "1";
        
        
    }
    else{
        audioElement.pause()
        play.classList.add('fa-circle-play')
        play.classList.remove('fa-circle-pause')
        gif.style.opacity = "0"
        play2.classList.add('fa-circle-play')
        play2.classList.remove('fa-circle-pause')
        gif2.style.opacity = "0"
    }

})




next.addEventListener('click',function(){
    if (i == songs.length){
        i = 1
    }
    else{
        i = i+1
    }
    audioElement.src = `Song ${i}.mp3`
    audioElement.play();
    play.classList.remove('fa-circle-play')
    play.classList.add('fa-circle-pause')
    gif.style.opacity = "1"
    songName.innerText = songs[i-1].name;
    container.style.background = songs[i-1].background
    coverImg.src = songs[i-1].cover;
    play2.classList.remove('fa-circle-play')
    play2.classList.add('fa-circle-pause')
    gif2.style.opacity = "1"
    nameBottom.innerText = songs[i-1].name;
    bottom2.style.background = songs[i-1].background2
    imgBottom.src = songs[i-1].cover;
    
})

prev.addEventListener('click',function(){
    if (i == 1){
        i = songs.length
    }
    else{
        i = i-1
    }
    audioElement.src = `Song ${i}.mp3`
    audioElement.play();
    play.classList.remove('fa-circle-play')
    play.classList.add('fa-circle-pause')
    gif.style.opacity = "1"
    songName.innerText = songs[i-1].name;
    container.style.background = songs[i-1].background
    coverImg.src = songs[i-1].cover;
    play2.classList.remove('fa-circle-play')
    play2.classList.add('fa-circle-pause')
    gif2.style.opacity = "1"
    nameBottom.innerText = songs[i-1].name;
    bottom2.style.background = songs[i-1].background2
    imgBottom.src = songs[i-1].cover;
    
})

// function for progress bar

let progress = document.querySelector('.progress');

audioElement.addEventListener('timeupdate',function(){
    progress.value = parseInt(audioElement.currentTime*100/audioElement.duration);
})

progress.addEventListener('change',function(){
    audioElement.currentTime = progress.value * audioElement.duration /100
})

//function for volume bar


let volumeBar = document.querySelector('.volumeBar')
audioElement.volume = 0.3
volumeBar.addEventListener('change',function(){
    audioElement.volume = volumeBar.value/100
})


// function to hide and show volume bar
let volumeIcon = document.querySelector('.volumeIcon');

volumeIcon.addEventListener('click',function(){
    volumeBar.classList.toggle('activeVol')
})


// function to change current time of song
let currenttime = document.querySelector('.current');



setInterval(() => {
    let minCurrent = Math.floor(parseInt(audioElement.currentTime)/60);
if(minCurrent < 10){
    minCurrent = `0${minCurrent}`
}

let secCurrent = Math.floor(parseInt(audioElement.currentTime)%60);
if(secCurrent < 10){
    secCurrent = `0${secCurrent}`
}
    currenttime.innerText = `${minCurrent}:${secCurrent}`
}, 1000);

// function to change song duration

let duration = document.querySelector('.duration');
audioElement.addEventListener('loadedmetadata',function(){
    let minDuration = Math.floor(parseInt(audioElement.duration)/60);
    if(minDuration < 10){
        minDuration = `0${minDuration}`
    }
    
    let secDuration = Math.floor(parseInt(audioElement.duration)%60);
    if(secDuration < 10){
        secDuration = `0${secDuration}`
    }

    duration.innerText = `${minDuration}:${secDuration}`
})

// function to show container 2
down.addEventListener('click',function(){
    container.style.display = "none"
    container2.style.display = "block"
})

// adding songs name in the play list

let songList = document.querySelector('.middle2')
let html = ""
songs.forEach(function(element,index){
    html += `<div class="list">
                <div class="songImg">
                    <img src="cover ${index+1}.png" alt="" class="image2">
                </div>
                <div class="songName2">
                    ${element.name}
                </div>
            </div>`
})
songList.innerHTML = html

// function to play and pause music uing play2 button

play2.addEventListener('click',function(){
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play()
        play2.classList.remove('fa-circle-play')
        play2.classList.add('fa-circle-pause')
        gif2.style.opacity = "1";
        play.classList.remove('fa-circle-play')
        play.classList.add('fa-circle-pause')
        gif.style.opacity = "1";
        
        
    }
    else{
        audioElement.pause()
        play2.classList.add('fa-circle-play')
        play2.classList.remove('fa-circle-pause')
        gif2.style.opacity = "0"
        play.classList.add('fa-circle-play')
        play.classList.remove('fa-circle-pause')
        gif.style.opacity = "0";
        
    }
})

//function to play song by clicking on song list

let list = document.querySelectorAll('.list');
list.forEach(function(element,index){
    element.addEventListener('click',function(){
        audioElement.src = `Song ${index+1}.mp3`
        audioElement.play()
        play2.classList.remove('fa-circle-play')
        play2.classList.add('fa-circle-pause')
        gif2.style.opacity = "1";
        nameBottom.innerText = songs[index].name;
        imgBottom.src = songs[index].cover;
        bottom2.style.background = songs[index].background2
        play.classList.remove('fa-circle-play')
        play.classList.add('fa-circle-pause')
        gif.style.opacity = "1"
        songName.innerText = songs[index].name;
        container.style.background = songs[index].background
        coverImg.src = songs[index].cover;

    })
})

//function to show original container

bottomBack.addEventListener('click',function(){
    container.style.display = "block"
    container2.style.display = "none"
})

