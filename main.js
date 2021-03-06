$(document).ready(function() {
// 天気予報
$.ajax({
url: 'https://json2jsonp.com/?url=http://weather.livedoor.com/forecast/webservice/json/v1?city=400040',
type: 'GET',
dataType: 'jsonp'
})
.done(function(data) {
// 見出し
$('#weather-title').text(data.location.city + 'の天気');
// 天気予報
for (var i = 0; i < data.forecasts.length; i++) {
forecast = data.forecasts[i];
var $box = $('<div class="box">');
var $item = $('<dl>');
// 日付ラベル（今日、明日、等）
$('<dt>' + forecast.dateLabel + '</dt>').appendTo($item);
// 日付
$('<dt>' + forecast.date + '</dt>').appendTo($item);
// 天気画像
$('<dd><img src="' + forecast.image.url + '" alt="'
+ forecast.image.title + '"/></dd>').appendTo($item);
// 天気（晴れ、曇り、等）
$('<dd>' + forecast.telop + '</dd>').appendTo($item);
$item.appendTo($box);
$box.appendTo($('#weather'));
}
})
.fail(function() {
$('#weather').text('天気の取得に失敗しました');
});
});
