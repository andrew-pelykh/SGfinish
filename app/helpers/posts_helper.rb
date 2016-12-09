module PostsHelper

  def has_video?(body)
    body =~ /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
  end

  def get_url(body)
    youtube_embed(body.slice(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/))
  end

  def youtube_embed(youtube_url)
    if youtube_url[/youtu\.be\/([^\?]*)/]
      youtube_id = $1
    else
      youtube_url[/^.*((v\/)|(embed\/)|(watch\?))\??v?=?([^\&\?]*).*/]
      youtube_id = $5
    end
    "http://www.youtube.com/embed/#{ youtube_id }"
  end

  def map_posts(posts)
    mapped_posts = posts.map do |el|
      post = {}
      post[:title]= el.title
      post[:id] = el.id
      post[:body] = el.body
      post[:photo] = el.photo.url
      has_video?(el.body) ? post[:video] = get_url(el.body) : nil
      post
    end
  end
end
