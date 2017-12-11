import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ActivityIndicator,
    Image,
    StatusBar,
    AsyncStorage,
    TouchableWithoutFeedback
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import {S, V} from './stylessheets';
import {IconMap, ColorMap} from './iconMap';
// 去掉黄条
console.disableYellowBox = true;

// const yesterdaydata = {"basic":{"cid":"CN101280605","location":"宝安","parent_city":"深圳","admin_area":"广东","cnty":"中国","lat":"22.56007767","lon":"113.90102386","tz":"+8.0"},"update":{"loc":"2017-12-10 23:54","utc":"2017-12-10 15:54"},"status":"ok","daily_forecast":[{"cond_code_d":"103","cond_code_n":"101","cond_txt_d":"晴间多云","cond_txt_n":"多云","date":"2017-12-10","hum":"32","mr":"14:49","ms":"12:35","pcpn":"0.0","pop":"0","pres":"1019","sr":"06:53","ss":"17:40","tmp_max":"21","tmp_min":"13","uv_index":"6","vis":"16","wind_deg":"0","wind_dir":"无持续风向","wind_sc":"微风","wind_spd":"6"},{"cond_code_d":"101","cond_code_n":"104","cond_txt_d":"多云","cond_txt_n":"阴","date":"2017-12-11","hum":"36","mr":"00:38","ms":"13:15","pcpn":"0.0","pop":"0","pres":"1019","sr":"06:54","ss":"17:41","tmp_max":"22","tmp_min":"13","uv_index":"6","vis":"20","wind_deg":"0","wind_dir":"无持续风向","wind_sc":"微风","wind_spd":"3"},{"cond_code_d":"104","cond_code_n":"104","cond_txt_d":"阴","cond_txt_n":"阴","date":"2017-12-12","hum":"59","mr":"01:32","ms":"13:53","pcpn":"0.2","pop":"83","pres":"1019","sr":"06:54","ss":"17:41","tmp_max":"18","tmp_min":"13","uv_index":"6","vis":"18","wind_deg":"0","wind_dir":"无持续风向","wind_sc":"微风","wind_spd":"6"}]}
export default class App extends Component<{}> {
    constructor() {
        super();
        this.state = {
            loading: true,
            today: null,
            yesterday: null,
            yesterdayLoading: true
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const location = {latitude: position.coords.latitude, longitude: position.coords.longitude};
                axios.get('https://free-api.heweather.com/s6/weather/forecast', {
                    params: {
                        location: `${location.latitude},${location.longitude}`,
                        key: '8e099637b3184045ae7b5d532538865b'
                    }
                }).then((response) => {
                    const todayDate = response.data.HeWeather6[0].update.loc;
                    this.setState({
                        loading: false,
                        today: response.data.HeWeather6[0]
                    });
                    AsyncStorage.getItem(moment(todayDate).subtract(1, 'days').format('YYYY-MM-DD'))
                        .then((data) => {
                        if (data) {
                            this.setState({
                                yesterday: JSON.parse(data),
                                yesterdayLoading: false
                            })
                        }
                    })
                        .catch(
                            this.setState({
                                yesterday: null,
                                yesterdayLoading: false
                            })
                        )
                    AsyncStorage.setItem(moment(todayDate).format('YYYY-MM-DD'), JSON.stringify(response.data.HeWeather6[0]));
                }).catch(error => {
                    console.log(error)
                })
            },
            (error) => console.log(error.message),
            {timeout: 20000, maximumAge: 1000}
        );
    }

    refresh = () => {
        this.setState({
            loading: true,
            yesterdayLoading: true
        });
        this.getData();
    }

    render() {
        const {loading, today, yesterday, yesterdayLoading} = this.state;
        const todayData = !loading && today.daily_forecast[0],
            yesterdayData = !loading && yesterday && yesterday.daily_forecast[0];
        return (
            <View style={S.flex}>
                <StatusBar
                    backgroundColor="#bbb"
                    barStyle="dark-content"
                />
                <View style={[
                    S.flexRow,
                    S.flexJustifyBetween,
                    S.paddingHorizontal10,
                    S.borderBottom,
                    S.flexJustifyBetween,
                    S.flexAlignCenter,
                    {
                        backgroundColor:'#fff',
                        height:V.headerHeight,
                        paddingTop:V.statusHeight
                    }
                ]}>
                    <Text style={[S.textWhite,{fontSize:22,color:'#815FC0'}]}>昨日天气</Text>
                    <TouchableWithoutFeedback onPress={this.refresh}>
                        <View>
                            <Text style={[S.textWhite,{fontSize:16,color:'#815FC0'}]}>刷新</Text>
                        </View>

                    </TouchableWithoutFeedback>

                </View>
                {loading === true ?
                    <View style={{marginTop:80}}>
                        <ActivityIndicator size="large" color={'#815FC0'}/>
                    </View>
                    :
                    <ScrollView
                        style={[
                                S.flex,
                                S.bgDefault
                            ]}>
                        {yesterdayLoading ?
                            <View style={{marginTop:40}}>
                                <ActivityIndicator size="large" color={'#FDB53E'}/>
                            </View>
                            : yesterday ?
                                <View style={[SS.cardBox,{backgroundColor:'#FDB53E'}]}>
                                    <View style={[S.flex,S.flexJustifyBetween]}>
                                        <Text style={[S.textWhite,{fontSize:22}]}>昨日</Text>
                                        <Text
                                            style={[S.textWhite,S.text15]}>{yesterday.basic.location}/{yesterday.basic.parent_city}</Text>
                                        <Text
                                            style={[S.textWhite,{fontSize:28}]}>{yesterdayData.tmp_min}℃ ~ {yesterdayData.tmp_max}℃</Text>
                                        <Text
                                            style={[S.textWhite,S.text15]}>{yesterdayData.cond_txt_d}/{yesterdayData.cond_txt_n}</Text>
                                    </View>
                                    <View style={[S.flexJustifyCenter]}>
                                        <Image source={IconMap[yesterdayData.cond_code_d]}
                                               style={[S.flex,S.flexAlignSelfCenter,{width:90,height:90}]}
                                               resizeMode={'contain'}/>
                                        <Text
                                            style={[SS.dateText]}>最后更新:{moment(yesterday.update.loc).format(('MM月DD日HH:mm'))}</Text>
                                    </View>

                                </View> :
                                <View style={[SS.cardBox,{backgroundColor:'#815FC0',height:90}]}>
                                    <Text
                                        style={[S.flex,S.flexAlignSelfCenter,S.textWhite,{lineHeight:26,fontSize:15},S.textCenter]}>{`哎呀,没有找到昨天的天气(＞﹏＜)\n明天再来试试看ヾ(≧▽≦*)o!!`}﻿</Text>
                                </View>
                        }
                        <View style={[SS.cardBox,{backgroundColor:'#666DBC'}]}>
                            <View style={[S.flex,S.flexJustifyBetween]}>
                                <Text style={[S.textWhite,{fontSize:22}]}>今日</Text>
                                <Text
                                    style={[S.textWhite,S.text15]}>{today.basic.location}/{today.basic.parent_city}</Text>
                                <Text
                                    style={[S.textWhite,{fontSize:28}]}>{todayData.tmp_min}℃ ~ {todayData.tmp_max}℃</Text>
                                <Text
                                    style={[S.textWhite,S.text15]}>{todayData.cond_txt_d}/{todayData.cond_txt_n}</Text>
                            </View>
                            <View style={[S.flexJustifyCenter]}>
                                <Image source={IconMap[todayData.cond_code_d]}
                                       style={[S.flex,S.flexAlignSelfCenter,{width:90,height:90}]}
                                       resizeMode={'contain'}/>
                                <Text
                                    style={[SS.dateText]}>最后更新:{moment(today.update.loc).format(('MM月DD日HH:mm'))}</Text>
                            </View>

                        </View>
                    </ScrollView>
                }
                {!loading && !yesterdayLoading &&
                <Text style={[{fontSize:9,marginBottom:3},S.bgDefault,S.textCenter,S.textColor3,S.marginLeft5]}>Authored by GaaPill | Data from Heweather{`\n`} Logo by Freepik.com | Icon from Dovora Interactive</Text>
                }
            </View>
        )
    }
}

const SS = {
    cardBox: [
        S.marginTop10,
        S.marginHorizontal10,
        S.flexRow,
        S.borderRadius10,
        S.paddingVertical15,
        S.paddingHorizontal15
    ],
    dateText: [S.textRight, S.textWhite, S.marginRight5, S.marginTop5, {fontSize: 12}]
}
// 数据来源:和风天气|Logo by Freepik.com & Dovora Interactive