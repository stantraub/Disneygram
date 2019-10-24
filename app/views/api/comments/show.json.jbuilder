json.extract! @comment, :id, :body, :author_id, :post_id
json.username @comment.user.username