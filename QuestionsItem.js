import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

class QuestionsItem extends Component {

	state = {
		text: '',
		width: 0,
		bgText: '#fff',
		colorText: '#3e4a59'
	}

    _handleSizeChange = event => {
        this.setState({
            width: event.nativeEvent.contentSize.width
        });
    };

	render(){
			return (
                <View>
                    <View style={[styles.question, {width: 220}]}>
                        <Text style={styles.questionText}>{this.props.data.title}</Text>
                    </View>
                    <View style={{alignSelf: 'flex-end'}}>
                        <TextInput
                            value={this.state.text}
                            style={[{
                                color: this.state.colorText,
                                width: Math.max(35, this.state.inputHeight),
                                borderWidth: 1,
                                borderColor: '#000000',
                                backgroundColor: this.state.bgText
                            }, styles.inputFound]}
                            onChangeText={(text) => this.setState({text})}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholder="Digite aqui"
                            placeholderTextColor="#CCC"
                            blurOnSubmit={false}
                            onContentSizeChange={(event) => this._handleSizeChange(event)}
                            onSubmitEditing={() => {
                            	let array = [];
                            	array.push({
                            		id:this.props.data.id, 
                            		title:this.props.data.title, 
                            		text:this.state.text
                            	});
          						this.props.sendText(array);
          						this.setState({colorText: '#fff', bgText: '#3e4a59'})
                            }}
                            returnKeyType={"next"}
                        />
                    </View>
                </View>
			);
		}
}

const styles = StyleSheet.create({
    question: {
        backgroundColor: '#445ee9',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 10
    },
    questionText: {
        color: '#FFF',
        fontWeight: '300',
        fontSize: 12,
        padding: 10
    },
    formArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
    },
    tagItem: {
        width: 99,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#b5bbdf',
        marginRight: 4,
        marginBottom: 10
    },
    tagItemBig: {
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#b5bbdf',
        marginRight: 4,
        marginBottom: 10
    },
    tagText: {
        fontWeight: '300',
        fontSize: 12,
        paddingBottom: 10,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 10

    },
     answer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20
    },
    inputFound: {
        fontWeight: '300',
        fontSize: 15,
        alignSelf: 'flex-end',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderWidth: 1,
        borderColor: '#3e4a59'
    }         
});

export default QuestionsItem;
