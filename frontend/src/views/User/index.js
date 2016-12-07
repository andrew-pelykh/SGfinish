import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getUser, getCurrentUser } from '../../actions/UserActions'
import { getPosts } from '../../actions/PostActions'
import PostsList from '../../components/Posts/PostsList'

class User extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurrentUser())
    dispatch(getUser(this.props.params.id))
    dispatch(getPosts(this.props.params.id))
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.params.id !== this.props.params.id) {
      const { dispatch } = this.props
      dispatch(getCurrentUser())
      dispatch(getUser(nextProps.params.id))
      dispatch(getPosts(nextProps.params.id))
    }
  }

  render() {


    return (
      <div>
        <p>{this.props.user.name}</p>
        <PostsList posts={Object.keys(this.props.posts).map(key => this.props.posts[key])} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    current_user: state.current_user,
    posts: state.posts
  }
}

export default connect(mapStateToProps)(User)
