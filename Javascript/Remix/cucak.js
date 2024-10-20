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
const music = new Audio('../../Media/Remix/Cucak/Audio/1.mp3');
// music.play();

const song = [
    {
        id: 1,
        songName: `RƯỢU MỪNG HÓA NGƯỜI DƯNG<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/1.jpg"
    },
    {
        id: 2,
        songName: `GIÓ x ĐOM ĐÓM<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/2.jpg"
    },
    {
        id: 3,
        songName: `BẢY NỔI BA CHÌM<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/3.jpg"
    },
    {
        id: 4,
        songName: `CÔ GÁI NÀY LÀ CỦA AI?<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/4.jpg"
    },
    {
        id: 5,
        songName: `KHÔNG YÊU TRẢ DÉP TÔI VỀ<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/5.jpg"
    },
    {
        id: 6,
        songName: `MANG CHỦNG (芒种)<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/6.jpg"
    },
    {
        id: 7,
        songName: `LÀM GÌ PHẢI HỐT<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/7.jpg"
    },
    {
        id: 8,
        songName: `NĂM QUA ĐÃ LÀM GÌ<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/8.jpg"
    },
    {
        id: 9,
        songName: `CHUYỆN CŨ BỎ QUA<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/9.jpg"
    },
    {
        id: 10,
        songName: `MỘT NĂM MỚI BÌNH AN<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/10.jpg"
    },
    {
        id: 11,
        songName: `VƯƠNG VẤN<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/11.jpg"
    },
    {
        id: 12,
        songName: `LAST CHRISTMAS<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/12.jpg"
    },
    {
        id: 13,
        songName: `KIẾP MÁ HỒNG<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/13.jpg"
    },
    {
        id: 14,
        songName: `KHÓC CÙNG EM<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/14.jpg"
    },
    {
        id: 15,
        songName: `LỖI TẠI MƯA x ẢO ẢNH<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/15.jpg"
    },
    {
        id: 16,
        songName: `LỬNG LƠ<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/16.jpg"
    },
    {
        id: 17,
        songName: `NẾU EM KHÔNG VỀ<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/17.jpg"
    },
    {
        id: 18,
        songName: `SÀI GÒN ĐẸP LẮM<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/18.jpg"
    },
    {
        id: 19,
        songName: `TÌNH YÊU MÀU HỒNG<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/19.jpg"
    },
    {
        id: 20,
        songName: `XÓA TÊN ANH ĐI<br>
                   <div class="subtitle">CUCAK REMIX</div>`,
        poster: "../../Media/Remix/Cucak/Img/20.jpg"
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
        music.src = `../../Media/Remix/Cucak/Audio/${index}.mp3`;
        poster.src =`../../Media/Remix/Cucak/Img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
        download_music.href = `../../Media/Remix/Cucak/Audio/${index}.mp3`;
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
    music.src = `../../Media/Remix/Cucak/Audio/${index}.mp3`;
    poster.src =`../../Media/Remix/Cucak/Img/${index}.jpg`;
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
    music.src = `../../Media/Remix/Cucak/Audio/${index}.mp3`;
    poster.src =`../../Media/Remix/Cucak/Img/${index}.jpg`;
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
    music.src = `../../Media/Remix/Cucak/Audio/${index}.mp3`;
    poster.src =`../../Media/Remix/Cucak/Img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');
    download_music.href = `../../Media/Remix/Cucak/Audio/${index}.mp3`;
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
    music.src = `../../Media/Remix/Cucak/Audio/${index}.mp3`;
    poster.src =`../../Media/Remix/Cucak/Img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');
    download_music.href = `../../Media/Remix/Cucak/Audio/${index}.mp3`;
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
    music.src = `../../Media/Remix/Cucak/Audio/${index}.mp3`;
    poster.src =`../../Media/Remix/Cucak/Img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');
    download_music.href = `../../Media/Remix/Cucak/Audio/${index}.mp3`;
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