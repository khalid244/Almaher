import React, { Component } from 'react';
import { View, Text, Button } from "react-native";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ayah: 5,
    };
  }
  
  componentDidMount() {
    console.log("componentDidMount");
  }

  connection() {

    const newAyah = this.state.ayah + 1;
    this.state.ayah = newAyah;
    var d = new Date();
    var s = d.getTime();
    console.log("Start Time:", s);
    fetch(`http://localhost:9000/quran/2/${newAyah}/15/0/`)
    .then(res => res.json())
    .then(
      (result) => {
        var d = new Date();
        var e = d.getTime();
        console.log("End Time:", e);
        console.log("Diff Time:", e-s);
        console.log(result);
        this.setState({
          isLoaded: true,
          sorah: result.Sorah,
          ayah: result.Ayah,
          length: result.RealLength,
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
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
        <View>
          <Button title="Connect" onPress={() => this.connection() } />
          <View style={{marginTop: 16}}>
            <Text>Sorah: {sorah}</Text>
            <Text>Ayah: {ayah}</Text>
            <Text>Length: {length}</Text>
          
          </View>
        </View>
      );
    // }
  }

}
