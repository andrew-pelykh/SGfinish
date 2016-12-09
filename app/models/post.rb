class Post < ActiveRecord::Base
  default_scope -> {   order(created_at: :desc) }

  belongs_to :user

  mount_uploader :photo, PhotoUploader
  validates_presence_of :user_id
  validates :title, presence: true, if: :no_photo?
  validates :body, presence: true, if: :no_photo?
  validates :images, presence: true, if: :no_text?
  validates :title,  length: {maximum: 50}
  validates :body,  length: {maximum: 200}
  validates :body, format: { without: /(((https?)?:\057\057)|(www.))[a-z_.]+[a-z_]{2,3}/i},if: :not_only_youtube_link?

  def no_photo?
    photo == nil
  end

  def not_only_youtube_link?
    body.scan(/http(?:s?):\057\057(?:www\.)?[a-z_.]+[a-z_]{2,3}/i) !=
      body.scan(/http(?:s?):\057\057(?:www\.)?youtube.com/i)
  end

  def no_text?
    title == nil && body == nil
  end
end
