import React, { Component } from 'react';
import { View, Text, Button, TextInput } from "react-native";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "hello world !!!",
      onclick: {color: "#F00"},
      st: 0,
      sorah: "2",
      ayah: "6",
      line: "15",
      direction: "0"
    };
  }
  
  componentDidMount() {
    console.log("componentDidMount");
  }

  givensorah(intext) {
    this.setState({
      sorah: intext      
    })
  }

  givenayah(intext) {
    this.setState({
      ayah: intext
    })
  }

  givenline(intext) {
    this.setState({
      line: intext
    })
  }
  
  givendirection(intext) {
    this.setState({
      direction: intext
    })
  }

  connection() {

    // this.state.text = "Booo ...."
    // this.forceUpdate();

    if (this.state.st==0) {
      fetch(`http://localhost:9000/quran/findCloserAyah/${this.state.sorah}/${this.state.ayah}/${this.state.line}/${this.state.direction}/`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
          text: `${result.Ayah} ${result.Sorah}`,
          onclick: {color: "#00F"},
          });
        },
      (error) => {
        
      }
      )
    } else (
      this.setState({
      text: "hello world !!!",
      onclick: {color: "#F00"}
      })
    )

    // const newAyah = this.state.ayah + 1;
    // this.state.ayah = newAyah;
    // var d = new Date();
    // var s = d.getTime();
    // console.log("Start Time:", s);
  }


  render() {
    const { error, isLoaded, sorah, ayah, length } = this.state;
    console.log("error:",error);
    console.log("isLoaded:",isLoaded);
    // if (error) {
    //   return <Text>Error: {error.message}</Text>;
    // } else if (!isLoaded) {
    //   return <Text>Loading...</Text>;
    // } else {
      return (
        <View >
          <TextInput
           style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={intext => this.givensorah(intext)}
            placeholder="Enter Sorah's number" 
            value= {this.state.sorah}
          />
          <TextInput
           style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={intext => this.givenayah(intext)}
            placeholder="Enter ayah's number" 
            value= {this.state.ayah}
          />
          <TextInput
           style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={intext => this.givenline(intext)}
            placeholder="How many lines you want"
            value= {this.state.line}
          />
          <TextInput
           style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={intext => this.givendirection(intext)}
            placeholder="Which direction 0 or 1"
            value= {this.state.direction}
          />
          <Button title="Connect" onPress={() => this.connection() } />
          <View style={{marginTop: 16}}>
            {/* <Text>Sorah: {sorah}</Text>
            <Text>Ayah: {ayah}</Text>
            <Text>Length: {length}</Text>
           */}
           <Text style={this.state.onclick}> {this.state.text} </Text>
          </View>
        </View>
      );
    // }
  }

}
