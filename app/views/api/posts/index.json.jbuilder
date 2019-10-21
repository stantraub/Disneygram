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
  json.comments do
      json.array!(post.comments) do |comment|
        json.id comment.id
            json.username comment.user.username
            json.body comment.body
            json.post_id comment.post_id
            json.user_id comment.user_id
      end
    end
end

