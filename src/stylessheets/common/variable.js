import { Platform, Dimensions } from 'react-native';

const variable = {
    baseLineHeight: (Platform.OS === 'ios' ? 1.90 : 2),

    //font size
    fontSize24: 24, //顶部标题
    fontSize20: 20,
    fontSize18: 18, //通用性最高
    fontSize15: 15,
    fontSize14: 14,

    pgWidth: Dimensions.get ('window').width,
    pgHeight: Platform.OS === 'ios' ? Dimensions.get ('window').height : Dimensions.get ('window').height - 18,
    navBarHeight: Platform.OS === 'ios' ? 64 : 45,
    navBarPaddingTop: Platform.OS === 'ios' ? 20 : 0,

    // gap
    gap0: 0,
    gap5: 5,
    gap10: 10,
    gap15: 15,
    gap20: 20,
    gap40: 40,


    // base color
    bgDefaultColor: '#f9f9f9', //用于页面背景颜色
    whiteColor: 'white', //白色
    primaryColor: '#feed75',
    coinColor: '#f4a21d',
    successColor: '#26b317',
    warnColor: '#ff3f3f',
    inputBgColor: '#f7f7f7',

    //text color
    textColor1: '#333', //文字颜色,等级一
    textColor1_5: '#666', //文字颜色,等级1.5
    textColor2: '#999', //文字颜色,等级二
    textColor3: '#ccc', //文字颜色,等级三

    // border
    borderColor: '#ccc',
    borderRadius5: 5,
    borderRadius10: 10,
    borderRadius15: 15,


    statusHeight: (Platform.OS === 'ios' ? 20 : 0),
    headerHeight: (Platform.OS === 'ios' ? 58 : 52)
};

export default variable;
