json.extract! post, :id, :author_id, :body, :created_at, :likes

json.user do
    json.id post.user.id
    json.username post.user.username
end


json.comments post.comments do |comment|
    json.author comment.user.username
    json.author_id comment.author_id
    json.body comment.body
    json.post_id comment.post_id
    json.id comment.id
end