const trending_scroll = document.querySelector('.trending_scroll');
const today_trending = document.querySelector('.today_trending');
const Popular_scrolling = document.querySelector('.Popular_scrolling');
const Upcoming_scroll = document.querySelector('.Upcoming_scroll');
let api_key = '0a510b5e93ea7958c313edac7c6a2728';
let base_url = 'https://api.themoviedb.org/3';
let img_url = 'https://image.tmdb.org/t/p/w500';
const latest_movie = `https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=en-US&page=1`;
const now_playing = 'now_playing';
const top_rated = 'top_rated';
let upcoming = `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`;
const Latest_Trailers_bg = document.querySelector('.Latest_Trailers');
const trailer_yt = document.querySelector('.trailer_yt');
const top_rated_url = `${base_url}/trending/movie/day?api_key=${api_key}&page=1`
const top_rated_url_2 = `${base_url}/trending/movie/week?api_key=${api_key}&page=1`
const now_playing_url = `${base_url}/movie/${top_rated}?api_key=${api_key}&page=1`
const upcoming_url = `${base_url}/movie/${upcoming}?api_key=${api_key}`
const iframe_video =  document.querySelector('.iframe_video');
const card_img = document.querySelector('.card_img');
const card_title = document.querySelector('.card_title');
const close_me = document.querySelector('.cardclose');
const card_info = document.querySelector('.card_info');
const this_week_url =`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=en-US&page=1`; 
var search_section = document.querySelector('.search_section');

const  loading = document.querySelector('.loader');
function loadershow(){
    loading.style.display = 'block';
}
function loaderhide(){
    loading.style.display = 'none';
}
/* for now playing */
try {
    loadershow()
    fetch(top_rated_url).then((movie_data)=>{
        return movie_data.json();
    }).then((data)=>{
        const items = data.results;
        items.forEach(element => {
            const backdrop_path = element.backdrop_path ? `${img_url}${element.backdrop_path}` : null
            const poster_path = element.poster_path ? `${img_url}${element.poster_path}` : null
            const rat = element.vote_average;
            let firstTwoDigits = rat.toFixed(1);
            const box = document.createElement('div');
            box.classList.add('card');
            box.innerHTML = `<div class="img">
        <img src="${poster_path}" alt="">
        <div class="ratting">${firstTwoDigits}</div>
      </div>
      <div class="card_titile">
        <h4 class="title_poster">${element.title}</h4>
        <h5>${element.release_date}</h5>
      </div>`;
      loaderhide()
    //   console.log(element)
                box.onclick = function(){
                    document.body.classList.add('no-scroll');
                    card_info.style.display = 'block';
                    card_img.innerHTML = `<img src="${poster_path}" alt="">`;
                    card_title.innerHTML = `<h3 class="title_poster">${element.title}</h3> <br> <span>Overview: </span><br> <p>${element.overview}</p> <br> <span>Release Date  : </span>${element.release_date}`;
                }
                trending_scroll.appendChild(box)
        });
    })
    
} catch (error) {
    console.log(error);
    main_content.innerHTML = `${error}`;
}
/* for Top rated*/

try {
    loadershow()
    fetch(now_playing_url).then((movie_data)=>{
        return movie_data.json();
    }).then((data)=>{
        const items = data.results;
        items.forEach(element => {
            const backdrop_path = element.backdrop_path ? `${img_url}${element.backdrop_path}` : null
            const poster_path = element.poster_path ? `${img_url}${element.poster_path}` : null
            const rat = element.vote_average;
            let firstTwoDigits = rat.toFixed(1);
            const box = document.createElement('div');
            box.classList.add('card');
            box.innerHTML = `<div class="img">
        <img src="${poster_path}" alt="">
        <div class="ratting">${firstTwoDigits}</div>
      </div>
      <div class="card_titile">
        <h4 class="title_poster">${element.title}</h4>
        <h5>${element.release_date}</h5>
      </div>`;
      loaderhide()
    //   console.log(element)
                box.onclick = function(){
                    document.body.classList.add('no-scroll');
                    card_info.style.display = 'block';
                    card_img.innerHTML = `<img src="${poster_path}" alt="">`;
                    card_title.innerHTML = `<h3 class="title_poster">${element.title}</h3> <br> <span>Overview: </span><br> <p>${element.overview}</p> <br> <span>Release Date  : </span>${element.release_date}`;
                }
                Popular_scrolling.appendChild(box)
        });
    })
    
} catch (error) {
    console.log(error);
    main_content.innerHTML = `${error}`;
}

/* for trending all tv ,  movies */

try {
    loadershow()
    fetch(upcoming).then((movie_data)=>{
        return movie_data.json();
    }).then((data)=>{
        const items = data.results;
        items.forEach(element => {
            // console.log(element)
            const backdrop_path = element.backdrop_path ? `${img_url}${element.backdrop_path}` : null
            const poster_path = element.poster_path ? `${img_url}${element.poster_path}` : null
            const rat = element.vote_average;
            let title = element.title;  
            let name = element.name;  
            let displayText = title || name ; 
            let date_1 = element.first_air_date;
            let date_2 = element.release_date;
            let final_date = date_1 || date_2;
            let firstTwoDigits = rat.toFixed(1);
            const box = document.createElement('div');
            box.classList.add('card');
            box.innerHTML = `<div class="img">
        <img src="${poster_path}" alt="">
        <div class="ratting">${firstTwoDigits}</div>
      </div>
      <div class="card_titile">
        <h4 class="title_poster">${displayText}</h4>
        <h5>${final_date}</h5>
      </div>`;
      loaderhide()
      search_section.style.backgroundImage = `URL('${poster_path}')`;
                box.onclick = function(){
                    document.body.classList.add('no-scroll');
                    card_info.style.display = 'block';
                    card_img.innerHTML = `<img src="${poster_path}" alt="">`;
                    card_title.innerHTML = `<h3 class="title_poster">${element.release_date}</h3> <br> <span>Overview: </span><br> <p>${element.overview}</p> <br> <span>Release Date  : </span>${element.release_date}`;
                }
                Upcoming_scroll.appendChild(box)
        });
    })
    
} catch (error) {
    console.log(error);
    main_content.innerHTML = `${error}`;
}

/* for trailer section*/
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTUxMGI1ZTkzZWE3OTU4YzMxM2VkYWM3YzZhMjcyOCIsIm5iZiI6MTczMDE4Njc5NC44NTY5OTk5LCJzdWIiOiI2NzIwOGUyYWU4MzNkOTJlZjA2MGMyMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nXUIEeu4hAWwug4MObRf8Vc93kZ3MPThGwDarENH5g8'
    }
  };

  fetch('https://api.themoviedb.org/3/movie/upcoming', options)
    .then((upcoming) => upcoming.json())
    .then((upcoming_res) => {
        // console.log(upcoming_res)
        upcoming_res.results.forEach((up_m)=>{
            const up_m_id = up_m.id;
           const yt_thum = up_m.backdrop_path ? `${img_url}${up_m.backdrop_path}` : null;
           
           fetch(`https://api.themoviedb.org/3/movie/${up_m_id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then((res) => {
                
                const trailer_card = document.createElement('div');
                trailer_card.classList.add('trailer_video');
                const videoKey = res.results[0].key;
                const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;
                trailer_card.innerHTML = `<img src="${yt_thum}" alt=""> <h1>${up_m.title}</h1>`;
                Latest_Trailers_bg.style.backgroundImage = `url('${yt_thum}')`;
                trailer_card.onclick = function(){ 
                    document.body.classList.add('no-scroll');
                    document.querySelector('.i_left').innerHTML = `<h1>${up_m.title}</h1>`;
                    iframe_video.innerHTML = `<iframe id="player" type="text/html"  src="http://www.youtube.com/embed/${videoKey}?enablejsapi=1&origin=http://example.com" frameborder="0" allowfullscreen><h1>iframe not allowing by this website or maybe not supported by your browser.</h1></iframe>`;
                    document.querySelector('.outer-card').style.display = 'block';
                }

                    trailer_card.addEventListener('mouseover' , function(){
                    Latest_Trailers_bg.style.backgroundImage = `url('${yt_thum}')`;
                })
               
                trailer_yt.appendChild(trailer_card);
                
            })
            .catch(err => console.error(err));
            
        })
    })
    .catch(err => console.error(err));

    document.querySelector('.cardclose').addEventListener('click' , function(){
        document.querySelector('.outer-card').style.display = 'none';
        iframe_video.innerHTML = ``;
        document.body.classList.remove('no-scroll');
        
    })
   
    document.querySelector('.close').addEventListener('click' , function(){
        document.querySelector('.outer-card').style.display = 'none';
        document.body.classList.remove('no-scroll');
        
    })
   
    /* ----------------------end trailer section----------------*/

    close_me.onclick = function(){
    
    document.body.classList.remove('no-scroll');
   
}

// Get all elements with the class 'ui-button'
const buttons = document.querySelectorAll('.ui-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
         button.classList.add('active');
    });
});
const tren_button = document.querySelectorAll('.tren_button');

tren_button.forEach(button => {
    button.addEventListener('click', () => {
        tren_button.forEach(btn => btn.classList.remove('active'));
         button.classList.add('active');
    });
});
const trend_all = document.querySelectorAll('.trend_all');

trend_all.forEach(button => {
    button.addEventListener('click', () => {
        trend_all.forEach(btn => btn.classList.remove('active'));
         button.classList.add('active');
    });
});

/*for today and week click events */
const trending_today = document.getElementById('trending_today');
const trending_this = document.getElementById('trending_this');

trending_this.addEventListener('click' , ()=>{
    trending_scroll.innerHTML = ``;
    try {
        loadershow()
        fetch(top_rated_url_2).then((movie_data)=>{
            return movie_data.json();
        }).then((data)=>{
            const items = data.results;
            items.forEach(element => {
                const backdrop_path = element.backdrop_path ? `${img_url}${element.backdrop_path}` : null
                const poster_path = element.poster_path ? `${img_url}${element.poster_path}` : null
                const rat = element.vote_average;
                let firstTwoDigits = rat.toFixed(1);
                const box = document.createElement('div');
                box.classList.add('card');
                box.innerHTML = `<div class="img">
            <img src="${poster_path}" alt="">
            <div class="ratting">${firstTwoDigits}</div>
          </div>
          <div class="card_titile">
            <h4 class="title_poster">${element.title}</h4>
            <h5>${element.release_date}</h5>
          </div>`;
          loaderhide()
        //   console.log(element)
                    box.onclick = function(){
                        document.body.classList.add('no-scroll');
                        card_info.style.display = 'block';
                        card_img.innerHTML = `<img src="${poster_path}" alt="">`;
                        card_title.innerHTML = `<h3 class="title_poster">${element.title}</h3> <br> <span>Overview: </span><br> <p>${element.overview}</p> <br> <span>Release Date  : </span>${element.release_date}`;
                    }
                    trending_scroll.appendChild(box)
            });
        })
        
    } catch (error) {
        console.log(error);
        main_content.innerHTML = `${error}`;
    }

})
trending_today.addEventListener('click' , ()=>{
    trending_scroll.innerHTML = ``;
    try {
        loadershow()
        fetch(top_rated_url).then((movie_data)=>{
            return movie_data.json();
        }).then((data)=>{
            const items = data.results;
            items.forEach(element => {
                const backdrop_path = element.backdrop_path ? `${img_url}${element.backdrop_path}` : null
                const poster_path = element.poster_path ? `${img_url}${element.poster_path}` : null
                const rat = element.vote_average;
                let firstTwoDigits = rat.toFixed(1);
                const box = document.createElement('div');
                box.classList.add('card');
                box.innerHTML = `<div class="img">
            <img src="${poster_path}" alt="">
            <div class="ratting">${firstTwoDigits}</div>
          </div>
          <div class="card_titile">
            <h4 class="title_poster">${element.title}</h4>
            <h5>${element.release_date}</h5>
          </div>`;
          loaderhide()
        //   console.log(element)
                    box.onclick = function(){
                        document.body.classList.add('no-scroll');
                        card_info.style.display = 'block';
                        card_img.innerHTML = `<img src="${poster_path}" alt="">`;
                        card_title.innerHTML = `<h3 class="title_poster">${element.title}</h3> <br> <span>Overview: </span><br> <p>${element.overview}</p> <br> <span>Release Date  : </span>${element.release_date}`;
                    }
                    trending_scroll.appendChild(box)
            });
        })
        
    } catch (error) {
        console.log(error);
        main_content.innerHTML = `${error}`;
    }

})

/*---- trending ui end-----*/

/*for top today week*/
const top_week = document.getElementById('top_week');
const top_today = document.getElementById('top_today');
top_week.addEventListener('click' ,()=>{
 alert('There is no api for this week.')
})
top_today.addEventListener('click' , ()=>{
    loadershow()
    try {
        loadershow()
        fetch(now_playing_url).then((movie_data)=>{
            return movie_data.json();
        }).then((data)=>{
            const items = data.results;
            items.forEach(element => {
                const backdrop_path = element.backdrop_path ? `${img_url}${element.backdrop_path}` : null
                const poster_path = element.poster_path ? `${img_url}${element.poster_path}` : null
                const rat = element.vote_average;
                let firstTwoDigits = rat.toFixed(1);
                const box = document.createElement('div');
                box.classList.add('card');
                box.innerHTML = `<div class="img">
            <img src="${poster_path}" alt="">
            <div class="ratting">${firstTwoDigits}</div>
          </div>
          <div class="card_titile">
            <h4 class="title_poster">${element.title}</h4>
            <h5>${element.release_date}</h5>
          </div>`;
                    loaderhide()
                    box.onclick = function(){
                        document.body.classList.add('no-scroll');
                        card_info.style.display = 'block';
                        card_img.innerHTML = `<img src="${poster_path}" alt="">`;
                        card_title.innerHTML = `<h3 class="title_poster">${element.title}</h3> <br> <span>Overview: </span><br> <p>${element.overview}</p> <br> <span>Release Date  : </span>${element.release_date}`;
                    }
                    Popular_scrolling.appendChild(box)
            });
        })
        
    } catch (error) {
        console.log(error);
        main_content.innerHTML = `${error}`;
    }
})


/* for trending all ui movie , tv and all*/
const trending_movie_tv = document.getElementById('trending_movie_tv');
const trending_tv = document.getElementById('trending_tv');
const trending_movie = document.getElementById('trending_movie');

trending_movie_tv.addEventListener('click' , ()=>{
    Upcoming_scroll.innerHTML = ``;
    try {
        loadershow()
        fetch(upcoming).then((movie_data)=>{
            return movie_data.json();
        }).then((data)=>{
            const items = data.results;
            items.forEach(element => {
                // console.log(element)
                const backdrop_path = element.backdrop_path ? `${img_url}${element.backdrop_path}` : null
                const poster_path = element.poster_path ? `${img_url}${element.poster_path}` : null
                const rat = element.vote_average;
                let title = element.title;  
                let name = element.name;  
                let displayText = title || name ; 
                let date_1 = element.first_air_date;
                let date_2 = element.release_date;
                let final_date = date_1 || date_2;
                let firstTwoDigits = rat.toFixed(1);
                const box = document.createElement('div');
                box.classList.add('card');
                box.innerHTML = `<div class="img">
            <img src="${poster_path}" alt="">
            <div class="ratting">${firstTwoDigits}</div>
          </div>
          <div class="card_titile">
            <h4 class="title_poster">${displayText}</h4>
            <h5>${final_date}</h5>
          </div>`;
          loaderhide()
          search_section.style.backgroundImage = `URL('${poster_path}')`;
                    box.onclick = function(){
                        document.body.classList.add('no-scroll');
                        card_info.style.display = 'block';
                        card_img.innerHTML = `<img src="${poster_path}" alt="">`;
                        card_title.innerHTML = `<h3 class="title_poster">${displayText}</h3> <br> <span>Overview: </span><br> <p>${element.overview}</p> <br> <span>Release Date  : </span>${element.release_date}`;
                    }
                    Upcoming_scroll.appendChild(box)
            });
        })
        
    } catch (error) {
        console.log(error);
        main_content.innerHTML = `${error}`;
    }
    
})

trending_movie.addEventListener('click' , ()=>{
    Upcoming_scroll.innerHTML = ``;
    try {
        loadershow()
        fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US' , options).then((movie_data)=>{
            return movie_data.json();
        }).then((data)=>{
            
            const items = data.results;
            items.forEach(element => {
                const backdrop_path = element.backdrop_path ? `${img_url}${element.backdrop_path}` : null
                const poster_path = element.poster_path ? `${img_url}${element.poster_path}` : null
                const rat = element.vote_average;
                let title = element.title;  
                let name = element.name;  
                let displayText = title || name ; 
                let date_1 = element.first_air_date;
                let date_2 = element.release_date;
                let final_date = date_1 || date_2;
                let firstTwoDigits = rat.toFixed(1);
                const box = document.createElement('div');
                box.classList.add('card');
                box.innerHTML = `<div class="img">
            <img src="${poster_path}" alt="">
            <div class="ratting">${firstTwoDigits}</div>
          </div>
          <div class="card_titile">
            <h4 class="title_poster">${displayText}</h4>
            <h5>${final_date}</h5>
          </div>`;
          loaderhide()
          search_section.style.backgroundImage = `URL('${poster_path}')`;
                    box.onclick = function(){
                        document.body.classList.add('no-scroll');
                        card_info.style.display = 'block';
                        card_img.innerHTML = `<img src="${poster_path}" alt="">`;
                        card_title.innerHTML = `<h3 class="title_poster">${element.release_date}</h3> <br> <span>Overview: </span><br> <p>${element.overview}</p> <br> <span>Release Date  : </span>${element.release_date}`;
                    }
                    Upcoming_scroll.appendChild(box)
            });
        })
        
    } catch (error) {
        console.log(error);
        main_content.innerHTML = `${error}`;
    }
})
trending_tv.addEventListener('click' , ()=>{
    Upcoming_scroll.innerHTML = ``;
    try {
        loadershow()
        fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1' , options).then((movie_data)=>{
            return movie_data.json();
        }).then((data)=>{
            const items = data.results;
            // console.log(data)
            items.forEach(element => {
                const backdrop_path = element.backdrop_path ? `${img_url}${element.backdrop_path}` : null
                const poster_path = element.poster_path ? `${img_url}${element.poster_path}` : null
                const rat = element.vote_average;
                let title = element.title;  
                let name = element.name;  
                let displayText = title || name ; 
                let date_1 = element.first_air_date;
                let date_2 = element.release_date;
                let final_date = date_1 || date_2;
                let firstTwoDigits = rat.toFixed(1);
                const box = document.createElement('div');
                box.classList.add('card');
                box.innerHTML = `<div class="img">
            <img src="${poster_path}" alt="">
            <div class="ratting">${firstTwoDigits}</div>
          </div>
          <div class="card_titile">
            <h4 class="title_poster">${displayText}</h4>
            <h5>${final_date}</h5>
          </div>`;
          loaderhide()
          search_section.style.backgroundImage = `URL('${poster_path}')`;
                    box.onclick = function(){
                        document.body.classList.add('no-scroll');
                        card_info.style.display = 'block';
                        card_img.innerHTML = `<img src="${poster_path}" alt="">`;
                        card_title.innerHTML = `<h3 class="title_poster">${element.name}</h3> <br> <span>Overview: </span><br> <p>${element.overview}</p> <br> <span>Release Date  : </span>${element.first_air_date}`;
                    }
                    Upcoming_scroll.appendChild(box)
            });
        })
        
    } catch (error) {
        console.log(error);
        main_content.innerHTML = `${error}`;
    }
})
