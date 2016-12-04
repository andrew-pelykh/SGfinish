class User < ActiveRecord::Base
  before_save { self.email = email.downcase }

  validates_presence_of :name, :email, :password
  validates :name, length: {minimum: 3, maximum: 30}
  validates :email, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i },
                    uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 6 }

  has_secure_password
end
