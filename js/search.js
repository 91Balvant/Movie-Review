
const input_user = document.querySelector('.input');
const btn_search = document.querySelector('.search_btn');
let search_section_1 = document.querySelector('.search_section');
let api_key_1 = '0a510b5e93ea7958c313edac7c6a2728';
let upcoming_1 = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key_1}`;
let base_url_1 = 'https://api.themoviedb.org/3';
let img_url_1 = 'https://image.tmdb.org/t/p/w500';
const card_img_s = document.querySelector('.card_img');
const card_title_s = document.querySelector('.card_title');
const close_me_s = document.querySelector('.close_me');
const card_info_s = document.querySelector('.card_info');



btn_search.addEventListener('click' , ()=>{
    const search_value = input_user.value;
    const keyword = sessionStorage.setItem('key_data' ,search_value );
    window.location.href = `search.html`;
})

try {
  loadershow()
    fetch(upcoming_1).then((movie_data)=>{
        return movie_data.json();
    }).then((data)=>{
      loaderhide()
        const items = data.results;
        items.forEach(element => {
            // console.log(element)
            var backdrop_path = element.backdrop_path ? `${img_url_1}${element.backdrop_path}` : null
            var poster_path = element.poster_path ? `${img_url_1}${element.poster_path}` : null
      search_section_1.style.backgroundImage = `URL('${poster_path}')`;
               
        });
    })
    
} catch (error) {
    console.log(error);
   }

const txt = document.querySelector('.txt');
const get_data = sessionStorage.getItem('key_data');
const option = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTUxMGI1ZTkzZWE3OTU4YzMxM2VkYWM3YzZhMjcyOCIsIm5iZiI6MTczMDE4Njc5NC44NTY5OTk5LCJzdWIiOiI2NzIwOGUyYWU4MzNkOTJlZjA2MGMyMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nXUIEeu4hAWwug4MObRf8Vc93kZ3MPThGwDarENH5g8'
    }
  };
console.log(get_data);

const search_card = document.querySelector('.search_card');

if(get_data !== null){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTUxMGI1ZTkzZWE3OTU4YzMxM2VkYWM3YzZhMjcyOCIsIm5iZiI6MTczMDE4Njc5NC44NTY5OTk5LCJzdWIiOiI2NzIwOGUyYWU4MzNkOTJlZjA2MGMyMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nXUIEeu4hAWwug4MObRf8Vc93kZ3MPThGwDarENH5g8'
        }
      };
      fetch(`https://api.themoviedb.org/3/search/movie?query=${get_data}&include_adult=false&language=en-US&page=1`, options)
      .then( search_json => {
        return search_json.json();
      }).then((search_data)=>
       search_data.results.forEach( (data) =>{
        console.log(data)
        var moviebox = document.createElement('div');
        moviebox.classList.add('movie_box');
        var backdrop = data.backdrop_path ? `${img_url_1}${data.backdrop_path}` : null
        var poster = data.poster_path ? `${img_url_1}${data.poster_path}` : null
        moviebox.innerHTML  = `<div class="img">
        <img src="${poster}" alt="">
        
      </div>
      <div class="s_title">
        <h4 class="title_poster">${data.title}</h4>
        <h5>${data.release_date}</h5>
      </div>`;
      moviebox.onclick = function(){
        card_info_s.style.display = 'block';
        card_img_s.innerHTML = `<img src="${poster}" alt="">`;
        card_title_s.innerHTML = `<h3 class="title_poster">${data.title}</h3> <br> <span>Overview: </span><br> <p>${data.overview}</p> <br> <span>Release Date  : </span>${data.release_date}`;
    }
        search_card.appendChild(moviebox);
        sessionStorage.removeItem('key_data');
        search_card.style.height = 'auto';
       })
      )
      
    }else{
        sessionStorage.removeItem('key_data');
        search_card.innerHTML = `somthing wents wrong with api .Try to re-load  or Search any movie to fix it.`
}

close_me_s.onclick = function(){
    card_info_s.style.display = 'none';
}