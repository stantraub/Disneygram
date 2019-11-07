json.extract! @comment, :id, :body, :author_id, :post_id
json.username @comment.user.username
json.profile_pic url_for(@comment.user.profile_pic)
json.post_author @comment.post.user.id