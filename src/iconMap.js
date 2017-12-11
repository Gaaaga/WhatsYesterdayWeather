const IconMap = {
    100: require('./image/icons/day_clear.png'),
    101: require('./image/icons/cloudy.png'),
    102: require('./image/icons/day_partial_cloud.png'),
    103: require('./image/icons/day_partial_cloud.png'),
    104: require('./image/icons/overcast.png'),
    200: require('./image/icons/wind.png'),
    201: require('./image/icons/cloudy.png'),
    202: require('./image/icons/wind.png'),
    203: require('./image/icons/wind.png'),
    204: require('./image/icons/wind.png'),
    205: require('./image/icons/wind.png'),
    206: require('./image/icons/tornado.png'),
    207: require('./image/icons/tornado.png'),
    208: require('./image/icons/tornado.png'),
    209: require('./image/icons/tornado.png'),
    210: require('./image/icons/tornado.png'),
    211: require('./image/icons/tornado.png'),
    212: require('./image/icons/tornado.png'),
    213: require('./image/icons/tornado.png'),
    300: require('./image/icons/rain.png'),
    301: require('./image/icons/rain_thunder.png'),
    302: require('./image/icons/rain_thunder.png'),
    303: require('./image/icons/rain_thunder.png'),
    304: require('./image/icons/snow_thunder.png'),
    305: require('./image/icons/rain.png'),
    306: require('./image/icons/rain.png'),
    307: require('./image/icons/rain.png'),
    308: require('./image/icons/rain.png'),
    309: require('./image/icons/rain.png'),
    310: require('./image/icons/rain.png'),
    311: require('./image/icons/rain.png'),
    312: require('./image/icons/rain.png'),
    313: require('./image/icons/rain.png'),
    400: require('./image/icons/snow.png'),
    401: require('./image/icons/snow.png'),
    402: require('./image/icons/snow.png'),
    403: require('./image/icons/snow.png'),
    404: require('./image/icons/snow.png'),
    405: require('./image/icons/snow.png'),
    406: require('./image/icons/snow.png'),
    407: require('./image/icons/snow.png'),
    500: require('./image/icons/mist.png'),
    501: require('./image/icons/fog.png'),
    502: require('./image/icons/mist.png'),
    503: require('./image/icons/mist.png'),
    504: require('./image/icons/mist.png'),
    507: require('./image/icons/fog.png'),
    508: require('./image/icons/fog.png'),
    900: require('./image/icons/day_clear.png'),
    901: require('./image/icons/cloudy.png'),
    999: require('./image/icons/night_clear.png'),
}

const ColorMap = (code) => {
    if (code === '100' || code === '103' || code === '102' || code === '900') { //sunny
        return '#FDB53E';
    } else if (code === '101' || 104 <= code <= 213) {
        return '#666DBC';
    } else if (300 <= code <= 313) { //rain
        return '#4355AF';
    }
    else if (400 <= code <= 407) {  //snow
        return '#288273';
    }
    else if (500 <= code <= 508) {   //fog
        return '#634749';
    }
    else {
        return '#FDB53E';
    }
}

export {IconMap, ColorMap};