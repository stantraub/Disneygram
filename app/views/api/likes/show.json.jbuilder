json.extract! @like, :user_id, :post_id, :id
json.author_id @like.post.user.id