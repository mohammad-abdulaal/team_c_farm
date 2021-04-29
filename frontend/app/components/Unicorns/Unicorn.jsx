import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View, Button} from 'react-native'
import { Card } from 'react-native-elements'

export class MasterUnicorn extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          id:1,
          name: "bellatrix",
          owner: {
            id: 111,
            first_name: "alice",
            last_name: ""
          }
        },
        {
          id: 2,
          name: "arcturus",
          owner: {
            id: 111,
            first_name: "bob",
            last_name: ""
          }
        },
        {
          id: 3,
          name: "vega",
          owner: {
            id: "none",
            first_name: "charlie",
            last_name: ""
          },
        }
      ]
    }
  }

  render(){
    const entries = this.state.data.map((e, i) => {
      return(
        <Card key={i}>
          <Card.Title>
            {e.name}
          </Card.Title>
          <Card.Divider />
          <Text>owner: {e.owner.first_name}</Text>
          <View style={{flexDirection: 'row'}}>
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
      )
    })

    return(
      <ScrollView>
        {entries}
      </ScrollView>
    )
  }

  // Functions
  // Handle delete unicorn from view
  handleDelete = (index) => {
    this.setState(state => {
      const data = [...state.data]
      data.splice(index, 1)
      return { data }
    })
  }

  // TODO
  handleEdit = (index) => {
    this.setState(state => {
      const data = [...state.data]
    })
  }


}
