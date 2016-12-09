require "test_helper"

class PostTest < ActiveSupport::TestCase

  def setup
    super
    @post = create(:post)
  end

  def test_title_should_be_less_than_50_symbols
    assert_not @post.update_attributes(title: "a"*51)
  end

  def test_body_should_be_bigger_less_than_200_symbols
    assert_not @post.update_attributes(body: "a"*201)
  end

  def test_user_id_should_be_present
    assert_not @post.update_attributes(user_id: nil),"Post without user id has been created"
  end
end
