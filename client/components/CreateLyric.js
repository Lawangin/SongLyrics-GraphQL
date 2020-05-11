import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import addLyricsToSong from '../queries/addLyrics'

class CreateLyric extends Component {
  constructor(props) {
    super(props)

    this.state = { content: '' }
  }

  onSubmit(event) {
    event.preventDefault()

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    })
      .then(() => this.setState({ content: '' }))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a lyric</label>
        <input
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
      </form>
    )
  }
}

export default graphql(addLyricsToSong)(CreateLyric)
