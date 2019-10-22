@comments.each do |comment|
  json.extract! comment, :id, :body, :author_id, :post_id
end