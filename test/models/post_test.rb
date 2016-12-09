require "test_helper"

class PostTest < ActiveSupport::TestCase

  def setup
    super
    @post = create(:post)
  end

  def test_title_should_be_less_than_50_symbols
    assert_not @post.update_attributes(title: "a"*51)
  end

  def test_title_should_be_present_when_post_has_no_photo
    assert_not @post.update_attributes(title: "",photo:nil)
  end

  def test_body_should_be_present_when_post_has_no_photo
    assert_not @post.update_attributes(body: "",photo:nil)
  end

  def test_photo_should_be_present_when_post_has_no_title_and_body
    assert_not @post.update_attributes(body: "",title: "",photo:nil)
  end

  def test_body_should_not_contain_not_youtube_urls
    assert_not @post.update_attributes(body: "https://www.youtube.com/ https://maxfarseer.gitbooks.io/ ")
  end

  def test_body_can_contain__youtube_urls
    assert @post.update_attributes(body: "https://www.youtube.com/")
  end

  def test_body_should_be_bigger_less_than_200_symbols
    assert_not @post.update_attributes(body: "a"*201)
  end

  def test_user_id_should_be_present
    assert_not @post.update_attributes(user_id: nil),"Post without user id has been created"
  end
end
