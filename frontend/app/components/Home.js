import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-elements'

class Unicorn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          id:1,
          name: "bellatrix",
          owner: {
            id: 111,
            first_name: "ess",
            last_name: ""
          }
        },
        {
          id: 2,
          name: "arcturus",
          owner: {
            id: 111,
            first_name: "ess",
            last_name: ""
          }
        },
        {
          id: 3,
          name: "vega",
          owner: {
            id: "none",
            first_name: "",
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
            unicorn {i}
          </Card.Title>
          <Card.Divider />
          <Text>{e.name}</Text>
          <Text>{e.owner.first_name}</Text>
        </Card>
      )
    })

    return(
      <ScrollView>
        {entries}
      </ScrollView>
    )
  }
}

const Home = () => {
    return (
        <View style={styles.appContainer}>
          {/* <Unicorn style={styles.text}/> */}
          <Unicorn />
        </View>
    )

}

const styles = StyleSheet.create({
    appContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
    }
})

export default Home