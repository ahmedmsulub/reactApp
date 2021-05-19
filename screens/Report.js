import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CheckBox } from 'react-native-elements'
// Components
import Header from '../components/Header';
import UserMenu from '../components/UserMenu';
import WhiteWrapper from '../components/WhiteWrapper';
// Images and Icons
import returnpic from '../media/return.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Report = (props) => {

    return (
        <KeyboardAwareScrollView>
            <Header {...props} />
            <View style={{ flex: 1 }}>

                <WhiteWrapper>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                            <Image source={returnpic} style={{ width: 25, height: 25, top: 2 }} />
                        </TouchableOpacity>
                        <View style={{ /* position:'relative', top: -8, */ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={styles.userName}>USERNAME</Text>
                            <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: 'grey', marginLeft: 20 }}></View>
                        </View>
                    </View>
                </WhiteWrapper>

                <Text style={styles.text}>Report reason</Text>

                <CheckBox
                    title='Threats'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                // checked={this.state.checked}
                />
                <CheckBox
                    title='Harassment'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                // checked={this.state.checked}
                />
                <CheckBox
                    title='Hatespeech or graphic violence'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                // checked={this.state.checked}
                />
                <CheckBox
                    title='Sexually explicit material'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                // checked={this.state.checked}
                />

                <Text style={styles.text}>Other</Text>
                <View style={styles.textarea}>
                    <TextInput
                        multiline={true}
                        numberOfLines={9}
                    // onChangeText={(text) => this.setState({ text })}
                    // value={this.state.text} 
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: 'white' }}>Submit</Text>
                </TouchableOpacity>

            </View>
            <UserMenu {...props} />
        </KeyboardAwareScrollView>
    )
}

export default Report;

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
    },
    textarea: {
        backgroundColor: 'white',
        width: '80%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4
    },
    button: {
        backgroundColor: "purple",
        width: 200,
        marginVertical: 40,
        alignSelf: 'center',
        alignItems: "center",
        padding: 10,
        borderRadius: 4,
    },

})
