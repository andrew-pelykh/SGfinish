class PostsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def get_posts
    user = User.find(params[:id])
    posts = map_posts(user.posts.all)
    render json: posts.to_json
  end

  def create_post
    post = current_user.posts.new(post_params)
    if post.save
      current_user.photos.create(url:post.photo.url)
    end
     render json: post.to_json
  end

  def post_params
     post_args = params.require(:post).permit(:title, :body, :photo)
  end
end
