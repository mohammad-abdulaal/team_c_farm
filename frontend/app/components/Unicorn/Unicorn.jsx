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
      user_id: 0,
      data: [
        {
          id: 1,
          name: "bellatrix",
          owner: {
            id: 111,
            first_name: "alice",
            last_name: "",
          },
        },
        {
          id: 2,
          name: "arcturus",
          owner: {
            id: 111,
            first_name: "bob",
            last_name: "",
          },
        },
        {
          id: 3,
          name: "vega",
          owner: {
            id: "none",
            first_name: "charlie",
            last_name: "",
          },
        },
      ],

      unicorn_id: 0,
      unicorn_name: "",
      unicorn_owner: "",
    };
  }

  render() {
    const entries = this.state.data.map((e, i) => {
      return (
        <Card key={i}>
          <Card.Title>{e.name}</Card.Title>
          <Card.Divider />
          <Text>owner: {e.owner.first_name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Button
              onPress={() => this.handleDelete(i)}
              title="delete"
              color="#841584"
            />
            <Button
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
