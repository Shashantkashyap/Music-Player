let songIndex=0;
let audioElement = new Audio("songs/1.mp3")
let masterPlay = document.getElementById("masterPlay");
let myProgressBar= document.getElementById("myProgressBar")
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Banjara", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Dil Diya Gallan", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Hamdard", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Ek Mulakat Zaroori Hai", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Heeriye-Heeriye", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Banjara", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Dil Diya Gallan", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Ek Mulakat Zaroori Hai", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Hamdard", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Heeriye-Heeriye", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerHTML= songs[i].songName;

    
})


//
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity = 0
        
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        
        
        songIndex = parseInt(e.target.id);
        masterSongName.innerHTML= songs[songIndex].songName;
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")
        audioElement.src= `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
        
        
            
        
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex===0){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    masterSongName.innerHTML= songs[songIndex].songName;
    audioElement.src= `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-pause-circle")
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex===9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    masterSongName.innerHTML= songs[songIndex].songName;
    audioElement.src= `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-pause-circle")
})