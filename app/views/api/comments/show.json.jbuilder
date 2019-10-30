json.extract! @comment, :id, :body, :author_id, :post_id
json.username @comment.user.username
# json.profile_pic @comment.user.profile_pic
json.profile_pic url_for(@comment.user.profile_pic)