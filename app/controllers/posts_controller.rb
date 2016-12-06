class PostsController < ApplicationController
  before_filter :find_post,      only: [:edit, :show, :update, :destroy]
end
