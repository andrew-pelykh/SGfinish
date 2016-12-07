import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getUser, getCurrentUser } from '../../actions/UserActions'
import { getPosts } from '../../actions/PostActions'
import PostsList from '../../components/Posts/PostsList'

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurrentUser())
    if (this.props.current_user.name !== "") {
      dispatch(getPosts(this.props.current_user.id))
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("hasd")
    if (nextProps.current_user.name !== "" && this.props.posts ==[] ) {
      const { dispatch } = this.props
      dispatch(getPosts(nextProps.current_user.id))
    }
  }

  render() {


    return (
      <div>
        <p>{this.props.current_user.name}</p>
        <PostsList posts={Object.keys(this.props.posts).map(key => this.props.posts[key])} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    current_user: state.current_user,
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)
