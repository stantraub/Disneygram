  json.extract! user, :id, :username, :full_name, :bio
  json.profile_pic url_for(user.profile_pic)
 