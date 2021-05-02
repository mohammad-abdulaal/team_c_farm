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

export class Unicorn extends Component {
  constructor(props) {
    super(props);
    this.last_id = 56;
    this.state = {
      user: null,
      user_id: 55,
      data: [
        {
          id: 1,
          name: "bellatrix",
          owner: {
            id: 111,
            first_name: "alice",
            last_name: "grace",
          },
        },
        {
          id: 2,
          name: "arcturus",
          owner: {
            id: 55,
            first_name: "bob",
            last_name: "mcdonald",
          },
        },
        {
          id: 3,
          name: "vega",
        },
      ],
      unicorn_id: 0,
      unicorn_name: "",
      unicorn_owner: "",
    };
  }

  render() {
    const entries = this.state.data.map((entry, i) => {
      return (
        <Card key={i}>
          <Card.Title>{entry.name}</Card.Title>
          <Card.Divider />
          {/* Check if we have an owner, otherwise display N/A */}
          <Text>owner: {entry.owner ? entry.owner.first_name + " " + entry.owner.last_name : "N/A"}</Text>
          <View style={{ flexDirection: "row" }}>
            <Button
              onPress={() => this.handleDelete(i)}
              title="delete"
              color="#841584"
            />
            <Button
            // Check if we have an owner or if the owner is not the current user
              disabled={entry.owner == null || entry.owner.id != this.state.user_id }
              onPress={() => this.handleEdit(i)}
              title="edit"
              color="#841584"
            />
          </View>
        </Card>
      );
    });

    return <ScrollView>{entries}</ScrollView>;
  }

  // Member functions

  handleAdd = (e, id) => {
    if (id === 0) {
      // Add new unicorn
      this.last_id = this.last_id + 1;
      let newUnicorn = {
        id: this.last_id,
        name: this.state.unicorn_name,
        owner: this.props.user,
      };

      this.setState((state) => ({
        data: [...state.data, { newUnicorn }],
      }));
    } else {
      let unicorns_new = [];
      for (let i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].id === id) {
          let updatedObject = {
            id: id,
            name: this.state.unicorn_name,
            owner: this.state.data[i].owner,
          };
          unicorns_new.push(updatedObject);
        } else {
          unicorns_new.push(this.state.unicorns[i]);
        }
      }

      this.setState({
        unicorns: unicorns_new,
      });
    }
  };

  // Handle delete unicorn from view
  handleDelete = (index) => {
    this.setState((state) => {
      const data = [...state.data];
      data.splice(index, 1);
      return { data };
    });
  };

  getOne = (unicorn) => {
    this.setState({
      unicorn_id: unicorn.id,
      unicorn_name: unicorn.name,
      unicorn_owner: unicorn.owner,
    });
  };

  nameChange = (e) => {
    this.setState({
      unicorn_name: e.target.value,
    });
  };
}
