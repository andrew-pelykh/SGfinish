class Post < ActiveRecord::Base
  default_scope -> {   order(created_at: :desc) }

  belongs_to :user

  validates_presence_of :user_id
end
