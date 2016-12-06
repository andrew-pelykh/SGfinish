class PostsController < ApplicationController
  before_filter :find_post,      only: [:edit, :show, :update, :destroy]

  def get_posts
    user = User.find(params[:id])
    render json: user.posts.all
  end
end
