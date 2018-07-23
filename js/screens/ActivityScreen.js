import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Card, List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { list } from '../assets/data/User'
import * as actions from '../actions'

class ActivityScreen extends React.Component {
  renderActivity() {
    return (
      <List>
        {list.map((item, i) => (
          <ListItem
            key={i}
            title={item.name}
            subtitle={item.subtitle}
            avatar={{
              uri: item.avatar_url
            }}
            containerStyle={{ backgroundColor: '#fff' }}
            hideChevron={true}
          />
        ))}
      </List>
    )
  }
  render() {
    return <View>{this.renderActivity()}</View>
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
  return { activityData: state.review.allActivities }
}

export default ActivityScreen
