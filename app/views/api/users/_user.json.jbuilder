  
  json.extract! user, :id, :username, :full_name, :bio
  json.profile_pic url_for(user.profile_pic)
  

  json.set! :posts do 
   user.posts.each do |post|
      json.set! post.id do 
         json.extract! post, :id, :body, :author_id, :created_at
         json.photo url_for(post.photo)
      end 
   end 
end
 