// fetch the post
var configProfile = {
    "profile": {"screenName": 'Harperrrrr96'},
    "domId": 'twitter-carousel',
    "maxTweets": 10,
    "enableLinks": true,
    "showUser": true,
    "showTime": true,
    "showInteraction": false,
    "lang": 'en'
  };
  
  twitterFetcher.fetch(configProfile);
  
  // Slick Carousel
  $(document).ready(function(){
    $('.twitter-carousel').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false
    });
  });
  