import React , {useEffect} from 'react'
import { connect } from 'react-redux'
import { create } from 'lodash';
import { Dimensions, TouchableOpacity, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RedCashStyle from './RedCashStyle';
import Actions from './RedCashAction'

const { height, width } = Dimensions.get('screen')

export const RedCash = (props) => {

    useEffect(() => {
        props.getRedCashDetails(props.token)
    }, [])

    console.log(props?.RedcashDetails , "Red cash details")

    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={styles.secCon}>
                    <TouchableOpacity >
                        <View style={styles.arrowCon}>
                            <MaterialCommunityIcons
                                onPress={(e) => { props.navigation.goBack() }}
                                style={{ fontSize: 25 }}
                                name="arrow-left"
                                backgroundColor="#3b5998"
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.headCon}>
                        <Text style={styles.txtHead}>My Redcash</Text>
                    </View>
                </View>
                <View style={styles.redCashCon}>
                    <View style={styles.txtDirect}>
                        <Text style={styles.fontSize}>RedCash</Text>
                        <View style={styles.priceCon}>
                            <Text style={styles.fontSize}>Balance:</Text>
                            <Text style={styles.txtPrice}>₹250.0</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.boxSpace}>
                    <View style={styles.boxCon}>
                        <View style={styles.headDirect}>
                            <View style={styles.titleCon}>
                                <Text style={styles.headTxt}>Details</Text>
                            </View>
                            <View style={styles.titleCon}>
                                <Text style={styles.headTxt}>Status</Text>
                            </View>
                            <View style={styles.titleCon}>
                                <Text style={styles.headTxt}>Validity</Text>
                            </View>
                            <View style={styles.titleCon}>
                                <Text style={styles.headTxt}>Current Value</Text>
                            </View>
                            <View style={styles.titleCon}>
                                <Text style={styles.headTxt}>Used Value</Text>
                            </View>
                            <View style={styles.titleCon}>
                                <Text style={styles.headTxt}>Used Date</Text>
                            </View>
                            <View style={styles.titleCon}>
                                <Text style={styles.headTxt}>Used With</Text>
                            </View>
                        </View>


                        <View style={styles.headDirects}>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                        </View>
                        <View style={styles.headDirects}>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                        </View>
                        <View style={styles.headDirects}>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                        </View>
                        <View style={styles.headDirects}>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                            <View style={styles.titleCons}>
                                <TextInput style={styles.headTxts}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = create(RedCashStyle)

const mapStateToProps = (state) => ({
    UserDetails: state.userprofile?.userProfile,
    token: state.user.userData?.token,
    RedcashDetails : state.MyRedCashDetailsReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        getRedCashDetails: (token) => dispatch(Actions.getRedCashDetails(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedCash)
