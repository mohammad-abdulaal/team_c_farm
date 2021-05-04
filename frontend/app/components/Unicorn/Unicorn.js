import React, { Component } from "react";
import {
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { Card } from "react-native-elements";
import Axios from "axios";

// We are pretending to be Bob Smith until the backend is linked
export class Unicorn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUnicorn: null,
      modIndex: null,
      editmode: false,
      input: "",
      user: {
        id: 1,
        first_name: "bob",
        last_name: "smith",
      },
      data: [],
    };
  }

  // Prepare to receive data from backend
  componentDidMount() {
    this.getAll();
  }

  // Call getAll api and set data in state
  getAll() {
    Axios.get("http://localhost:8000/api/getAll").then((res) => {
      console.log("get all", res.data);
      this.setState({
        data: res.data.all,
      });
      // console.log(res)
    });
  }

  render() {
    // Loop over all unicorns and create a card for each
    // Start reading at line 87
    const entries = this.state.data.map((entry, i) => {
      return (
        <Card key={i}>
          <Card.Title>{entry.name}</Card.Title>
          <Card.Divider />
          {/* Check if we have an owner, otherwise display N/A */}
          <Text>
            owner:{" "}
            {entry.owner
              ? entry.owner.first_name + " " + entry.owner.last_name
              : "N/A"}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Button
              disabled={
                entry.owner == null || entry.owner.id != this.state.user.id
              }
              onPress={() => this.handleDelete(i)}
              title="delete"
              color="#841584"
            />
            <Button
              // Check if we have an owner or if the owner is not the current user
              disabled={
                entry.owner == null || entry.owner.id != this.state.user.id
              }
              onPress={() => this.handleEdit(i)}
              title="edit"
              color="#841584"
            />
          </View>
        </Card>
      );
    });

    return (
      // Main view
      <View>
        {this.state.user.id ? (
          <View>
            <Text>Hi {this.state.user.first_name}</Text>
            <TextInput
              onChange={this.handleInput}
              autoCompleteType="off"
              value={this.state.input}
              placeholder="unicorn name"
            />
            {/* Am I in edit mode? */}
            {this.state.editmode ? (
              <Button onPress={this.updateUnicorn} title="update" />
            ) : (
              <Button
                // Prevent blank user input
                disabled={this.state.input.length == 0}
                onPress={this.handleAdd}
                title="+"
              />
            )}
          </View>
        ) : (
          <Text> View Unicorns to the farm</Text>
        )}
        <ScrollView>{entries}</ScrollView>
      </View>
    );
  }

  // Member functions
  handleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleAdd = () => {
    // Get last id to create new one
    let currentData = this.state.data;
    if (currentData.length > 0) {
      var newid = currentData[currentData.length - 1].id + 1;
    } else {
      var newid = 0;
    }

    // Create new unicorn object
    let newUnicorn = {
      id: newid,
      name: this.state.input,
      owner: {
        id: this.state.user.id,
        first_name: this.state.user.first_name,
        last_name: this.state.user.last_name,
      },
    };

    // Add new unicorn object to data then clear input
    this.setState((state) => ({
      newUnicorn: newUnicorn,
      data: [...state.data, newUnicorn],
      input: "",
    }));

    // Update backend
    Axios.post("http://localhost:8000/api/unicorns", newUnicorn);
  };

  // Edit an existing unicorn
  handleEdit = (index) => {
    // Switch to edit mode then send selected index to modify
    this.setState((state) => ({
      editmode: !state.editmode,
      input: state.data[index].name,
      modIndex: index,
    }));
  };

  updateUnicorn = () => {
    var updatedUnicorn = {
      id: this.state.data[this.state.modIndex].id,
      name: this.state.input,
      owner: this.state.user,
    };

    // Copy data, edit at modIndex and send back
    this.setState((state) => {
      const data = [...state.data];
      data[this.state.modIndex] = updatedUnicorn;
      // data[this.state.modIndex].name = state.input;
      return { data };
    });

    /*
     * console.log("The updated unicorn obejct\n",  updatedUnicorn)
     * console.log("The updated unicorn id\n", this.state.data[this.state.modIndex].id)
     */

    // Update backend
    Axios.post(
      `http://localhost:8000/api/updatebyid/${this.state.data[this.state.modIndex].id
      }`,
      updatedUnicorn
    ),
      // Clear input and disable edit mode
      this.setState((state) => ({
        input: "",
        editmode: !state.editmode,
        modIndex: null,
      }));
  };

  // Handle delete unicorn from view
  handleDelete = (index) => {
    this.setState((state) => {
      // Copy old data and remove current index
      const data = [...state.data];
      data.splice(index, 1);
      return { data };
    });

    // Update backend
    Axios.delete(
      `http://localhost:8000/api/deletebyid/${this.state.data[index].id}`
    );
  };
}
