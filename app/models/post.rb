class Post < ActiveRecord::Base
  default_scope -> {   order(created_at: :desc) }

  belongs_to :user

  mount_uploader :photo, PhotoUploader
  validates_presence_of :user_id
end
