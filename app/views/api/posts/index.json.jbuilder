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
  json.extract! post, :id, :author_id, :body, :likes, :comments, :commenters
  json.user do
    json.id post.user.id
    json.username post.user.username
  end
  json.post_id post.id
  json.photoUrl url_for(post.photo)
  json.profile_pic url_for(post.user.profile_pic)
  json.comments post.comments do |comment|
    json.extract! comment, :id, :body, :post_id, :author_id
    json.username comment.user.username
  end
  # json.commenters post.commenters, :id, :username
  json.commenters post.commenters do |commenter|
    json.id commenter.id
    json.username commenter.username
    json.profile_pic url_for(commenter.profile_pic)
  end
  # json.comments do
  #     json.array!(post.comments) do |comment|
  #       json.id comment.id
        
  #           # json.username comment.user.username
  #           json.body comment.body
  #           json.post_id comment.post_id
  #           json.author_id comment.author_id
  #     end
  #   end
end

