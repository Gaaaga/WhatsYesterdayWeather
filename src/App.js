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
            yesterdayData = !loading && yesterday && yesterday.daily_forecast[0],
            tomorrowData = !loading && today.daily_forecast[1];
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
                    <Text style={[S.textWhite,{fontSize:22,color:SS.titleColor}]}>昨日天气</Text>
                    <TouchableWithoutFeedback onPress={this.refresh}>
                        <View>
                            <Text style={[S.textWhite,{fontSize:16,color:SS.titleColor}]}>刷新</Text>
                        </View>

                    </TouchableWithoutFeedback>

                </View>
                {loading === true ?
                    <View style={{marginTop:80}}>
                        <ActivityIndicator size="large" color={SS.titleColor}/>
                    </View>
                    :
                    <ScrollView
                        style={[
                                S.flex,
                                S.bgDefault
                            ]}>
                        {yesterdayLoading ?
                            <View style={{marginTop:40}}>
                                <ActivityIndicator size="large" color={SS.yesterColor}/>
                            </View>
                            : yesterday ?
                                <View style={[SS.cardBox,{backgroundColor:SS.yesterColor}]}>
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
                                <View style={[SS.cardBox,{backgroundColor:SS.yesterColor,height:90}]}>
                                    <Text
                                        style={[S.flex,S.flexAlignSelfCenter,S.textWhite,{lineHeight:26,fontSize:17},S.textCenter]}>{`哎呀,没有找到昨天的天气\n明天再来试试看`}﻿</Text>
                                </View>
                        }
                        <View style={[SS.cardBox,{backgroundColor:SS.todayColor}]}>
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
                        <View style={[SS.cardBox,{backgroundColor:SS.tomorrowColor}]}>
                            <View style={[S.flex,S.flexJustifyBetween]}>
                                <Text style={[S.textWhite,{fontSize:22}]}>明日</Text>
                                <Text
                                    style={[S.textWhite,S.text15]}>{today.basic.location}/{today.basic.parent_city}</Text>
                                <Text
                                    style={[S.textWhite,{fontSize:28}]}>{tomorrowData.tmp_min}℃ ~ {tomorrowData.tmp_max}℃</Text>
                                <Text
                                    style={[S.textWhite,S.text15]}>{tomorrowData.cond_txt_d}/{tomorrowData.cond_txt_n}</Text>
                            </View>
                            <View style={[S.flexJustifyCenter]}>
                                <Image source={IconMap[tomorrowData.cond_code_d]}
                                       style={[S.flex,S.flexAlignSelfCenter,{width:90,height:90}]}
                                       resizeMode={'contain'}/>
                                <Text
                                    style={[SS.dateText]}>最后更新:{moment(today.update.loc).format(('MM月DD日HH:mm'))}</Text>
                            </View>
                        </View>

                    </ScrollView>
                }
                {!loading && !yesterdayLoading &&
                <View>
                    <Text style={[{fontSize:9,marginBottom:3},S.bgDefault,S.textCenter,S.textColor3,S.marginLeft5]}>Authored by GaaPill | Data from Heweather{`\n`} Logo by Freepik.com | Icon from Dovora Interactive</Text>
                </View>
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
    dateText: [S.textRight, S.textWhite, S.marginRight5, S.marginTop5, {fontSize: 12}],
    titleColor: '#7b3181',
    yesterColor: '#23BEAF',
    todayColor: '#76AAE5',
    tomorrowColor: '#FFB749'
}
// 数据来源:和风天气|Logo by Freepik.com & Dovora Interactive