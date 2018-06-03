/*    ICI PARTIE TEST
$..ajax({
        url: "https://www.prevision-meteo.ch/services/json/toulouse",
        beforeSend: function (xhr) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
    })
    .done(function (data) {
        if (console && console.log) {
            var result = JSON.parse(data);
            console.log("Son nom: ", result.name);
        }
    });

function (btntoulouse) {
    $json = file_get_contents('https://www.prevision-meteo.ch/services/json/toulouse');
    $json = json_decode($json, true);

}
console.log(btntoulouse)
function(infobtn){
    echo $json->city_info->name;
    echo $json->city_info->latitude;
    echo $json->city_info->longitude;
    echo $json->city_info->;
    <img src="<?php echo $json->current_condition->icon;?>" width="45" height="45" />
}
*/
$.getJSON("https://www.prevision-meteo.ch/services/json/toulouse", function (data) {
    $("#namecity").append(data.city_info.name);
    $("#long").append(data.city_info.longitude);
    $("#lat").append(data.city_info.latitude);
    $("#tmp").append(data.current_condition.tmp);
    $("#hour").append(data.current_condition.hour);
    $("#conditext").append(data.current_condition.condition);
    $("#condiimg").append("<img src=" + data.current_condition.icon_big + ">");

})

$.getJSON("https://www.prevision-meteo.ch/services/json/saint-gaudens", function (data) {
    $("#namecity1").append(data.city_info.name);
    $("#long1").append(data.city_info.longitude);
    $("#lat1").append(data.city_info.latitude);
    $("#tmp1").append(data.current_condition.tmp);
    $("#hour1").append(data.current_condition.hour);
    $("#conditext1").append(data.current_condition.condition);
    $("#condiimg1").append("<img src=" + data.current_condition.icon_big + ">");

})
