  
json.extract! user, :id, :username, :full_name, :bio, :follows, :followers
json.profile_pic url_for(user.profile_pic)
  

json.set! :posts do 
   user.posts.each do |post|
      json.set! post.id do 
         json.extract! post, :id, :body, :author_id, :created_at, :likes
           json.comments post.comments do |comment|
            json.extract! comment, :id, :body, :post_id, :author_id
            json.username comment.user.username
            json.profile_pic url_for(comment.user.profile_pic)
            end
         json.photo url_for(post.photo)
      end 
   end 
end
 