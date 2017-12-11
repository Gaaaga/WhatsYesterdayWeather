import {StyleSheet} from 'react-native';
import V from './variable';

const styles = {
    //page
    pgWidth: {
        width: V.pgWidth
    },
    pgHeight: {
        height: V.pgHeight
    },
    // bg
    bgDefault: {
        backgroundColor: V.bgDefaultColor
    },
    bgWhite: {
        backgroundColor: V.whiteColor
    },

    // text
    //color
    textcoin: {
        color: V.coinColor
    },
    textsuccess: {
        color: V.successColor
    },
    textWarning: {
        color: V.warnColor
    },
    textColor1: {
        color: V.textColor1
    },
    textColor1_5: {
        color: V.textColor1_5
    },
    textColor2: {
        color: V.textColor2
    },
    textColor3: {
        color: V.textColor3
    },
    textWhite: {
        color: 'white'
    },

    //fontSize
    text24: {
        fontSize: V.fontSize24
    },
    text20: {
        fontSize: V.fontSize20
    },
    text18: {
        fontSize: V.fontSize18
    },
    text15: {
        fontSize: V.fontSize15
    },
    text14: {
        fontSize: V.fontSize14
    },

    textLeft: {
        textAlign: 'left'
    },
    textRight: {
        textAlign: 'right'
    },
    textCenter: {
        textAlign: 'center'
    },

    //image
    resizeStretch: {
        resizeMode: 'stretch'
    },
    resizeCover: {
        resizeMode: 'cover'
    },
    resizeContain: {
        resizeMode: 'contain'
    },
    resizeRepeat: {
        resizeMode: 'repeat'
    },
    resizeCenter: {
        resizeMode: 'center'
    },


    border: {
        borderColor: V.borderColor,
        borderWidth: StyleSheet.hairlineWidth
    },
    borderLeft: {
        borderLeftColor: V.borderColor,
        borderLeftWidth: StyleSheet.hairlineWidth
    },
    borderTop: {
        borderTopColor: V.borderColor,
        borderTopWidth: StyleSheet.hairlineWidth
    },
    borderRight: {
        borderRightColor: V.borderColor,
        borderRightWidth: StyleSheet.hairlineWidth
    },
    borderBottom: {
        borderBottomColor: V.borderColor,
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    borderRadius5: {
        borderRadius: V.borderRadius5
    },
    borderRadius10: {
        borderRadius: V.borderRadius10
    },
    borderRadius15: {
        borderRadius: V.borderRadius15
    },

    positionAbsolute: {
        position: 'absolute'
    },
    positionRelative: {
        position: 'relative'
    },

    overflowVisible: {
        overflow: 'visible'
    },
    overflowHidden: {
        overflow: 'hidden'
    },

    // flex
    flex: {
        flex: 1
    },
    flexZero: {
        flex: 0
    },
    flexB1: {
        flex: -1
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexRowReverse: {
        flexDirection: 'row-reverse'
    },
    flexColumnReverse: {
        flexDirection: 'column-reverse'
    },
    flexWrap: {
        flexWrap: 'wrap'
    },
    flexNoWrap: {
        flexWrap: 'nowrap'
    },
    flexJustifyStart: {
        justifyContent: 'flex-start'
    },
    flexJustifyEnd: {
        justifyContent: 'flex-end'
    },
    flexJustifyCenter: {
        justifyContent: 'center'
    },
    flexJustifyBetween: {
        justifyContent: 'space-between'
    },
    flexJustifyAround: {
        justifyContent: 'space-around'
    },
    flexAlignStart: {
        alignItems: 'flex-start'
    },
    flexAlignCenter: {
        alignItems: 'center'
    },
    flexAlignEnd: {
        alignItems: 'flex-end'
    },
    flexAlignStretch: {
        alignItems: 'stretch'
    },
    flexAlignSelfAuto: {
        alignSelf: 'auto'
    },
    flexAlignSelfStart: {
        alignSelf: 'flex-start'
    },
    flexAlignSelfEnd: {
        alignSelf: 'flex-end'
    },
    flexAlignSelfCenter: {
        alignSelf: 'center'
    },
    flexAlignSelfStretch: {
        alignSelf: 'stretch'
    },


    // gap
    padding0: {
        padding: V.gap0
    },
    padding5: {
        padding: V.gap5
    },
    padding10: {
        padding: V.gap10
    },
    padding15: {
        padding: V.gap15
    },

    paddingLeft0: {
        paddingLeft: V.gap0
    },
    paddingLeft5: {
        paddingLeft: V.gap5
    },
    paddingLeft10: {
        paddingLeft: V.gap10
    },
    paddingLeft15: {
        paddingLeft: V.gap15
    },
    paddingLeft20: {
        paddingLeft: V.gap20
    },
    paddingLeft40: {
        paddingLeft: V.gap40
    },

    paddingRight0: {
        paddingRight: V.gap0
    },
    paddingRight5: {
        paddingRight: V.gap5
    },
    paddingRight10: {
        paddingRight: V.gap10
    },
    paddingRight15: {
        paddingRight: V.gap15
    },
    paddingRight20: {
        paddingRight: V.gap20
    },
    paddingRight40: {
        paddingRight: V.gap40
    },

    paddingTop0: {
        paddingTop: V.gap0
    },
    paddingTop5: {
        paddingTop: V.gap5
    },
    paddingTop10: {
        paddingTop: V.gap10
    },
    paddingTop15: {
        paddingTop: V.gap15
    },
    paddingTop20: {
        paddingTop: V.gap20
    },
    paddingTop40: {
        paddingTop: V.gap40
    },

    paddingBottom0: {
        paddingBottom: V.gap0
    },
    paddingBottom5: {
        paddingBottom: V.gap5
    },
    paddingBottom10: {
        paddingBottom: V.gap10
    },
    paddingBottom15: {
        paddingBottom: V.gap15
    },
    paddingBottom20: {
        paddingBottom: V.gap20
    },
    paddingBottom40: {
        paddingBottom: V.gap40
    },

    paddingVertical0: {
        paddingVertical: V.gap0
    },
    paddingVertical5: {
        paddingVertical: V.gap5
    },
    paddingVertical10: {
        paddingVertical: V.gap10
    },
    paddingVertical15: {
        paddingVertical: V.gap15
    },
    paddingVertical20: {
        paddingVertical: V.gap20
    },
    paddingVertical40: {
        paddingVertical: V.gap40
    },

    paddingHorizontal0: {
        paddingHorizontal: V.gap0
    },
    paddingHorizontal5: {
        paddingHorizontal: V.gap5
    },
    paddingHorizontal10: {
        paddingHorizontal: V.gap10
    },
    paddingHorizontal15: {
        paddingHorizontal: V.gap15
    },
    paddingHorizontal20: {
        paddingHorizontal: V.gap20
    },
    paddingHorizontal40: {
        paddingHorizontal: V.gap40
    },

    margin0: {
        margin: V.gap0
    },
    margin5: {
        margin: V.gap5
    },
    margin10: {
        margin: V.gap10
    },
    margin15: {
        margin: V.gap15
    },
    margin20: {
        margin: V.gap20
    },
    margin40: {
        margin: V.gap40
    },

    marginLeft0: {
        marginLeft: V.gap0
    },
    marginLeft5: {
        marginLeft: V.gap5
    },
    marginLeft10: {
        marginLeft: V.gap10
    },
    marginLeft15: {
        marginLeft: V.gap15
    },
    marginLeft20: {
        marginLeft: V.gap20
    },
    marginLeft40: {
        marginLeft: V.gap40
    },

    marginRight0: {
        marginRight: V.gap0
    },
    marginRight5: {
        marginRight: V.gap5
    },
    marginRight10: {
        marginRight: V.gap10
    },
    marginRight15: {
        marginRight: V.gap15
    },
    marginRight20: {
        marginRight: V.gap20
    },
    marginRight40: {
        marginRight: V.gap40
    },

    marginTop0: {
        marginTop: V.gap0
    },
    marginTop5: {
        marginTop: V.gap5
    },
    marginTop10: {
        marginTop: V.gap10
    },
    marginTop15: {
        marginTop: V.gap15
    },
    marginTop20: {
        marginTop: V.gap20
    },
    marginTop40: {
        marginTop: V.gap40
    },

    marginBottom0: {
        marginBottom: V.gap0
    },
    marginBottom5: {
        marginBottom: V.gap5
    },
    marginBottom10: {
        marginBottom: V.gap10
    },
    marginBottom15: {
        marginBottom: V.gap15
    },
    marginBottom20: {
        marginBottom: V.gap20
    },
    marginBottom40: {
        marginBottom: V.gap40
    },

    marginVertical0: {
        marginVertical: V.gap0
    },
    marginVertical5: {
        marginVertical: V.gap5
    },
    marginVertical10: {
        marginVertical: V.gap10
    },
    marginVertical15: {
        marginVertical: V.gap15
    },
    marginVertical20: {
        marginVertical: V.gap20
    },
    marginVertical40: {
        marginVertical: V.gap40
    },

    marginHorizontal0: {
        marginHorizontal: V.gap0
    },
    marginHorizontal5: {
        marginHorizontal: V.gap5
    },
    marginHorizontal10: {
        marginHorizontal: V.gap10
    },
    marginHorizontal15: {
        marginHorizontal: V.gap15
    },
    marginHorizontal20: {
        marginHorizontal: V.gap20
    },
    marginHorizontal40: {
        marginHorizontal: V.gap40
    }
};

export default styles;
