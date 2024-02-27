console.log("Start JavaScript")

let songIndex = 0;
let masterplay = document.getElementById('masterplay');
let progres = document.getElementById('progres');
let gif = document.getElementById('gif');
let songitem =  Array.from(document.getElementsByClassName('songname'));

let audioElement = new Audio('song.mp3');

let song = [
   // {  songName: "Dhundle Dhundle ", filePath:"   C:\Users\ishwa\OneDrive\Desktop\SCRIPT/295 Official.mp3",
   // coverPath:"OIP.jpg"},
     // {  songName: " 295", filePath:"C:\Users\ishwa\OneDrive\Desktop\SCRIPT\song.mp3",coverPath:"Download.jpg"},
     // {  songName: "Diljit Dosanjh ", filePath:"C:\Users\ishwa\OneDrive\Desktop\SCRIPT\Diljit Dosanjh.mp3",coverPath:"R.png"},
      {  songName: "OLd skool ", filePath:"C:\Users\ishwa\OneDrive\Desktop\SCRIPT\OLd Skool.mp3",coverPath:"spotify.jpg"},
     // {  songName: "The last ride ", filePath:"C:\Users\ishwa\OneDrive\Desktop\SCRIPT\THE LAST RIDE.mp3",coverPath:""}

    ];

  /*  songitem.forEach( (element ,i )=>{
   // console.log( element ,i);
   C:\Users\ishwa\OneDrive\Desktop\SCRIPT/295 Official.mp3" 
    element .getElementsByTagName('img').src=song[i].coverPath;
    element .getElementsByClassName('songname')[0].innerText = song[i].songName;

    });*/

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){

    
    audioElement.play();
masterplay .classList.remove('fa-play-circle');
masterplay .classList.add('fa-pause-circle' );
gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay .classList.remove( 'fa-pause-circle');
        masterplay .classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
});
audioElement.addEventListener('timeupdate',()=>{
//console.log('timeupdate');
progres = parseInt((audioElement.currentTime/audioElement.duration)*100);
//console.log(progres);
progres.value = progres;
});
//audioElement.play;
progres.addEventListener=('change', ()=> {
audioElement.currentTime = progres.value*audioElement.duration;
});
 Array.from (document.getElementsByClassName('songitemplay' )).forEach(element => {
    element.addEventListener('click',(e)=>{
 console.log(e.target);
    })

    
});
