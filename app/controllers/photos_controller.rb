class PhotosController < ApplicationController

  def get_photos
    if params[:limit] == "0"
      photos = User.find(params[:id]).photos
      p photos
      render json: photos.to_json
    else
      photos = User.find(params[:id]).photos.limit(params[:limit])
      render json: photos.to_json
    end
  end
end
