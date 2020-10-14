import React, { Component } from 'react';
import { View, Text, Button } from "react-native";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }
  
  componentDidMount() {
    console.log("componentDidMount");
    fetch("http://localhost:9000/quran/2/6/15/0/")
    .then(res => res.json())
    .then(
      (result) => {
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

  connection() {
    console.log("connection", this.state.contacts);
    // this.setState({
    //   contacts: this.state.contacts + 1
    // });

  }


  render() {
    const { error, isLoaded, sorah, ayah, length } = this.state;
    console.log("error:",error);
    console.log("isLoaded:",isLoaded);
    if (error) {
      return <Text>Error: {error.message}</Text>;
    } else if (!isLoaded) {
      return <Text>Loading...</Text>;
    } else {
      return (
        <View>
          <Text>Sorah: {sorah}</Text>
          <Text>Ayah: {ayah}</Text>
          <Text>Length: {length}</Text>

        </View>
      );
    }
  }

}
