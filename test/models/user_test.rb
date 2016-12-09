require "test_helper"

class UserTest < ActiveSupport::TestCase

  def setup
    super
    @user = create(:user)
  end

  def test_name_should_be_present
    assert_not @user.update_attributes(name: " ")
  end

  def test_name_should_be_to_30_symbols
    assert_not @user.update_attributes(name: "a"*31)
  end

  def test_name_should_be_more_than_3_symbols
    assert_not @user.update_attributes(name: "aa")
  end

  def test_email_should_be_present
    assert_not @user.update_attributes(email: " ")
  end

  def test_when_email_is_already_taken
    assert_not @user.dup.save
  end

  def test_when_email_is_already_taken_in_upcase
    user = @user.dup
    user.email = @user.email.upcase
    assert_not user.save
  end

  def test_when_email_with_mixed_case
    @user.email = "User@EmAIl.CoM"
    @user.save
    assert_equal  "user@email.com", @user.email
  end

  def test_when_password_is_not_present
    assert_not @user.update_attributes(password: " ",password_confirmation: " ")
  end

  def test_when_password_doesnt_match_confirmation
    assert_not @user.update_attributes(password_confirmation: "not_password")
  end

  def test_password_should_be_longer_than_5_symbols
    assert_not @user.update_attributes(password: "passw",password_confirmation: "passw")
  end

  def test_authenticate_with_valid_passport
    assert @user.authenticate("password")
  end

  def test_authenticate_with_invalid_passport
    assert_not @user.authenticate("not_password")
  end

  def test_remember_token_should_not_be_blank
    @user.save
    assert_not @user.remember_token.blank?
  end



  def test_posts_should_be_in_right_order
    second_post = create(:post, user: @user, created_at: 1.day.ago)
    first_post = create(:post, user: @user, created_at: 1.hour.ago)
    assert_equal [first_post, second_post], @user.posts.to_a
  end

  def test_posts_should_be_deleted_with_user
    create(:post , user: @user)
    @user.destroy
    assert Post.all
  end

  def test_friendships_should_be_deleted_with_user
    friendship = create(:friendship , user: @user)
    friendship.destroy
    assert Friendship.all
  end

  def test_photos_should_be_deleted_with_user
    photo = create(:photo , user: @user)
    photo.destroy
    assert Photo.all
  end

  def self.valid_emails
    %w[user@foo.COM A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn]
  end

  def self.invalid_emails
    %w[user@foo,com user_at_foo.org example.user@foo.
                   foo@bar_baz.com foo@bar+baz.com,foo@bar..com]
  end

  valid_emails.each do |email|
    define_method("test_when_body_has_valid_email_#{email}") do
      assert @user.update_attributes(email: email)
    end
  end

  invalid_emails.each do |email|
    define_method("test_when_body_has_invalid_email_#{email}") do
      assert_not @user.update_attributes(email: email)
    end
  end
end
