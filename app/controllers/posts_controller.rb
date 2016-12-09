class PostsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def get_posts
    user = User.find(params[:id])
    posts = user.posts.all.map do |el|
      post = {}
      post[:title]=el.title
      post[:id]=el.id
      post[:body]=el.body
      post[:photo]=el.photo.url
      has_video?(el.body) ? post[:video] = get_url(el.body) : nil
      post
    end
    render json: posts.to_json
  end

  def create_post
    post = current_user.posts.new(post_params)
    if post.save
      current_user.photos.create(url:post.photo.url)
      render json: post.to_json
    else
      render json: post.to_json
    end
  end

  def post_params
     post_args = params.require(:post).permit(:title, :body, :photo)
  end
end
