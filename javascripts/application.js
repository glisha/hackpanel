$(function () {
  $('#tweets').tweets({query: 'skopjehacklab OR 2cmk', limit: 10, timeout: 5000});
  $('#slides').slides({slides: '1-5', timeout: 5000});
});
