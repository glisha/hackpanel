$(function () {
  $('#tweets').tweets({query: 'skopjehacklab OR 2cmk', limit: 10, timeout: 20000});
  $('#slides').slides({slides: '1-5', timeout: 20000});
});
