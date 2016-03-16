var channels = ["freecodecamp", "storbeck", "goldglove", "terakilobyte", "beohoff", "brunofin", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "syndicate", "riotgames", "comster404", "test_channel", "cretetion", "sheevergaming", "TR7K", "OgamingSC2"];

$(document).ready(function() {

  channels.forEach(function(channel) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + channel + '?callback=?', function(data) {
      var status = data.stream === null ? 'Offline' : data.stream === undefined ? 'Not Available' : 'Online';
      var order = data.stream === null ? 'two' : data.stream === undefined ? 'three' : 'one';

      var html = '<div class="row results" class=" '+ order +'"><div class="col-md-2"><a href="http://www.twitch.tv/' + channel + '" target="_blank" id="' + channel + '">' + channel + '</a></div><div class="col-md-2 status">' + status + '</div></div><br>';
      $("#list").append(html);
    });
  });

  channels.forEach(function(channel) {
    var self = "#" + channel;
    $.getJSON('https://api.twitch.tv/kraken/channels/' + channel + '?callback=?',
      function(info) {
        var detail = '<div class="detail"><img src="' + info.logo + '" class="logo"><br><br>Title - ' + info.game + '-' + info.status + '<hr>Followers - ' + info.followers + '<hr>Language - ' + info.language + '<hr>Mature Content - ' + info.mature + '</div>';
        $(self).append(detail);
      });
  });
  $('#popup').addClass('detail');
});