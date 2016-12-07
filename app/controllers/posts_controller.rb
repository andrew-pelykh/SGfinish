class PostsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def get_posts
    user = User.find(params[:id])
    render json: user.posts.all
  end

  def create_post
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: post
    end
  end

  def post_params
     params.require(:post).permit(:title, :body)
  end
end
