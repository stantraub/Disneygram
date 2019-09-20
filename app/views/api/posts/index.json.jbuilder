json.array! @posts do |post|
  json.extract! post, :id, :author_id, :body, :user, :likers
  json.photoUrl url_for(post.photo)
  json.profile_pic url_for(post.user.profile_pic)

end