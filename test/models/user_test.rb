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

  def test_when_email_is_valid
    addresses = %w[user@foo.COM A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn]
    addresses.each do |valid_address|
      assert @user.update_attributes(email: valid_address)
    end
  end

  def test_when_email_is_invalid
    addresses = %w[user@foo,com user_at_foo.org example.user@foo.
                   foo@bar_baz.com foo@bar+baz.com,foo@bar..com]
    addresses.each do |invalid_address|
      assert_not @user.update_attributes(email: invalid_address)
    end
  end

  def test_when_email_is_already_taken
    user = @user.dup
    assert_not user.save
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
end
