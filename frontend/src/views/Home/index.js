import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getUser, getCurrentUser } from '../../actions/UserActions'
import { getPosts } from '../../actions/PostActions'
import PostsList from '../../components/Posts/PostsList'

class Home extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getCurrentUser())
  }
  componentWillReceiveProps(nextProps) {

    if (nextProps.user.name !== "" && this.props.posts ==[] ) {
      const { dispatch } = this.props
      dispatch(getCurrentUser())
      dispatch(getPosts(this.props.user.id))
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
    user: state.current_user,
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)
