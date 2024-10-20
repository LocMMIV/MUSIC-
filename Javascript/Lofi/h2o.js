let art_left = document.getElementById('art_left');
let art_right = document.getElementById('art_right');
let art_bx = document.getElementsByClassName('art_bx')[0];

art_right.addEventListener('click', () => {
    art_bx.scrollLeft += 500;
});
art_left.addEventListener('click', () => {
    art_bx.scrollLeft -= 500;
});

//---------- Playlist
const music = new Audio('../../Media/Lofi/H2O/Audio/1.mp3');
// music.play();

const song = [
    {
        id: 1,
        songName: `CHẮC AI ĐÓ SẼ VỀ<br>
                   <div class="subtitle">H2O</div>`,
        poster: "../../Media/Lofi/H2O/Img/1.jpg"
    },
    {
        id: 2,
        songName: `NGỠ<br>
                   <div class="subtitle">H2O</div>`,
        poster: "../../Media/Lofi/H2O/Img/2.jpg"
    },
    {
        id: 3,
        songName: `THƯƠNG THẦM<br>
                   <div class="subtitle">H2O</div>`,
        poster: "../../Media/Lofi/H2O/Img/3.jpg"
    },
    {
        id: 4,
        songName: `YÊU ĐƯƠNG NẶNG LÒNG<br>
                   <div class="subtitle">H2O</div>`,
        poster: "../../Media/Lofi/H2O/Img/4.jpg"
    },
    {
        id: 5,
        songName: `PHAI DẤU CUỘC TÌNH<br>
                   <div class="subtitle">H2O</div>`,
        poster: "../../Media/Lofi/H2O/Img/5.jpg"
    },
    {
        id: 6,
        songName: `KHUẤT LỐI<br>
                   <div class="subtitle">H2O</div>`,
        poster: "../../Media/Lofi/H2O/Img/6.jpg"
    },
    {
        id: 7,
        songName: `EM NGÀY GẶP LẠI<br>
                   <div class="subtitle">H2O</div>`,
        poster: "../../Media/Lofi/H2O/Img/7.jpg"
    },
    {
        id: 8,
        songName: `SUỐT ĐỜI KHÔNG XỨNG<br>
                   <div class="subtitle">H2O</div>`,
        poster: "../../Media/Lofi/H2O/Img/8.jpg"
    },
    {
        id: 9,
        songName: `CÁNH HỒNG PHAI<br>
                   <div class="subtitle">H2O</div>`,
        poster: "../../Media/Lofi/H2O/Img/9.jpg"
    },
    {
        id: 10,
        songName: `LỆ TÌNH<br>
                   <div class="subtitle">H2O</div>`,
        poster: "../../Media/Lofi/H2O/Img/10.jpg"
    },
]

//---------- Phát nhạc
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
});


// Menu search
let menu_search = document.getElementsByClassName('menu_search')[0];

song.forEach(Element => {
    const {id, songName, poster} = Element;
    // console.log(poster);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML =`
        <img src="${poster}" alt"">
        <div class="content">
            ${songName}
        </div>`;
    menu_search.appendChild(card);
});


let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = menu_search.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            menu_search.style.display = "none";
        } else {
            menu_search.style.display = "";
        }
    }
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play');
        masterPlay.classList.remove('bi-pause');
    }
});


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('bi-play-circle');
        el.classList.remove('bi-pause-circle');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}


let index = 0;
let poster = document.getElementById('poster');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');



Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `../../Media/Lofi/H2O/Audio/${index}.mp3`;
        poster.src =`../../Media/Lofi/H2O/Img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
        download_music.href = `../../Media/Lofi/H2O/Audio/${index}.mp3`;
        let songTitles = song.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');
        wave.classList.add('active1');
    });
})

//---------- Bar
let Start = document.getElementById('Start');
let End = document.getElementById('End');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    End.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    Start.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.add('bi-volume-mute');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.add('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.remove('bi-volume-mute');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

//---------- Back, next
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `../../Media/Lofi/H2O/Audio/${index}.mp3`;
    poster.src =`../../Media/Lofi/H2O/Img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');

    let songTitles = song.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle');
    el.target.classList.add('bi-pause-circle');
    wave.classList.add('active1');
});

next.addEventListener('click', () => {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `../../Media/Lofi/H2O/Audio/${index}.mp3`;
    poster.src =`../../Media/Lofi/H2O/Img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');

    let songTitles = song.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle');
    el.target.classList.add('bi-pause-circle');
    wave.classList.add('active1');
});



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;  
        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});



const next_music = () => {
    if (index == song.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `../../Media/Lofi/H2O/Audio/${index}.mp3`;
    poster.src =`../../Media/Lofi/H2O/Img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');
    download_music.href = `../../Media/Lofi/H2O/Audio/${index}.mp3`;
    let songTitles = song.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle');
    el.target.classList.add('bi-pause-circle');
    wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `../../Media/Lofi/H2O/Audio/${index}.mp3`;
    poster.src =`../../Media/Lofi/H2O/Img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');
    download_music.href = `../../Media/Lofi/H2O/Audio/${index}.mp3`;
    let songTitles = song.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle');
    el.target.classList.add('bi-pause-circle');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == song.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * song.length) + 1);
    }
    music.src = `../../Media/Lofi/H2O/Audio/${index}.mp3`;
    poster.src =`../../Media/Lofi/H2O/Img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');
    download_music.href = `../../Media/Lofi/H2O/Audio/${index}.mp3`;
    let songTitles = song.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle');
    el.target.classList.add('bi-pause-circle');
    wave.classList.add('active1');
}


music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch(b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})