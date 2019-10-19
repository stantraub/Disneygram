# @posts.each do |post|
#   json.set! post.id do
#     json.extract! post, :id, :author_id, :body
#     json.photoUrl url_for(post.photo)
#     json.profile_pic url_for(post.user.profile_pic)
#     json.username post.user.username
#     json.likers post.likers.pluck(:id)
#   end
# end

json.array! @posts do |post|
  json.extract! post, :id, :author_id, :body, :user, :likes, :comments, :commenters
  json.photoUrl url_for(post.photo)
  json.profile_pic url_for(post.user.profile_pic)
end

