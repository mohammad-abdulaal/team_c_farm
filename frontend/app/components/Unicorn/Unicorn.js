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
import CookieService from "../CookieService";
import api from "../api";
import Icon from "react-native-vector-icons/FontAwesome";

// We are pretending to be Bob Smith until the backend is linked
export class Unicorn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: "",
      owner: null,
      newUnicorn: null,
      modIndex: null,
      editmode: false,
      input: "",
      user_id: null,
      user_fname: "",
      user_lname: "",
      data: [],
    };
  }

  // Prepare to receive data from backend
  componentDidMount() {
    this.getAll();
    this.getDetails();
  }

  // Read details of the user currently logged in
  getDetails() {
    api.details().then((res) => {
      console.log("User details: ", res.data);
      console.log(res.data.id);
      this.setState({
        user_id: res.data.id,
        user_fname: res.data.first_name,
        user_lname: res.data.sure_name,
        user_email: res.data.email,
      });
    });
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
    // Stylehsheet
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },

      mainCard: {
        marginBottom: 20,
      },

      card: {
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 8,
        borderColor: "#ba55d3",
        width: 300,
        height: 150,
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
      },

      fixToText: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 10,
      },
    });

    // Loop over all unicorns and create a card for each
    // Start reading at line 87
    const entries = this.state.data.map((entry, i) => {
      return (
        <View style={styles.container}>
          <View style={styles.card} key={i}>
            <Card.Title>{entry.name}</Card.Title>
            <Card.Divider />
            {/* Check if we have an owner, otherwise display N/A */}
            <Text>owner: {entry.owner ? entry.owner : "N/A"}</Text>
            <Card.Divider />
            <View style={styles.fixToText}>
              <Button
                icon="delete"
                disabled={
                  entry.owner == null || entry.owner != this.state.user_email
                }
                onPress={() => this.handleDelete(i)}
                title="delete"
                color="#ba55d3"
              />
              <Button
                title="edit"
                // Check if we have an owner or if the owner is not the current user
                disabled={
                  entry.owner == null || entry.owner != this.state.user_email
                }
                onPress={() => this.handleEdit(i)}
                color="#ba55d3"
              />
            </View>
          </View>
        </View>
      );
    });

    return (
      // Main view
      <View style={styles.mainCard}>
        <Card>
          {/* {this.state.user_id ? ( */}
          <View>
            <Card.Title>Welcome {this.state.user_fname}</Card.Title>
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
          {/* ) : (
          <Text> View Unicorns to the farm</Text>
        )} */}
        </Card>
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
    var currentData = this.state.data;
    if (currentData.length > 0) {
      var newid = currentData[currentData.length - 1].id + 1;
    } else {
      var newid = 0;
    }

    // Create new unicorn object
    var newUnicorn = {
      // id: newid,
      name: this.state.input,
      owner: this.state.user_email,
      // owner: {
      //   first_name: this.state.user_fname,
      //   sure_name: this.state.user_lname,
      // },
      user_id: this.state.user_id,
    };
    console.log(newUnicorn);

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
      owner: this.state.user_email,
      // owner: {this.state.user},
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
      `http://localhost:8000/api/updatebyid/${
        this.state.data[this.state.modIndex].id
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
