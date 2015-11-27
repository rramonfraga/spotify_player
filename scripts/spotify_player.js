function fetchTrack (event) {
  event.preventDefault();
  var track = $('.js-search').val();
  var url = 'https://api.spotify.com/v1/search?type=track&query=' + track;
  var request = $.get(url);
 
  function handleTracks (tracks) {
    console.log(tracks);
    var track = tracks.tracks.items[0];

    $('.title').html(track.name);
    $('.author').html(track.artists[0].name);
      
    var html_cover = '<img class="js-artist-img" src="' + track.album.images[0].url + '">';
    $('.js-cover').html(html_cover);
    
    };
  

  function handleError (err1, err2, err3) {
    console.error('OH NO!!', err1, err2, err3);
  }

  request.done(handleTracks);
  request.fail(handleError);
}

$('.js-submit').on('click', fetchTrack);



/*
function showModal(bodyText){
  $('#js-modal-body, #js-modal-title').empty();
  $('.modal-body').text("");
  $('.modal-body').append(bodyText);
  $('#js-modal').modal('show');
}
*/


