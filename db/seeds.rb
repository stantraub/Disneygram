require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    User.destroy_all
    Post.destroy_all

    demo_user = User.create({username: "forky", full_name: "Forky", password: "123456", bio: 'Trash!?'})
    demo_profile_pic = open("https://disneygram-seeds.s3-us-west-1.amazonaws.com/demo_profile_pic.png")
    demo_user.profile_pic.attach(io: demo_profile_pic, filename: 'demo_profile_pic.png')

    olaf = User.create({username: "olaf", full_name: "Olaf the Snowman", password: "123456", bio: "I can't wait for summer!"})
    olaf_profile_pic = open('https://disneygram-seeds.s3-us-west-1.amazonaws.com/olaf-post1.png')
    olaf.profile_pic.attach(io: olaf_profile_pic, filename: 'olaf-post1.png')
    
    # moana = User.create({username: "moannnnaaa", full_name: "Moana", password: "123456", bio: "I am Moana of Motunui. You will board my boat, sail across the sea, and restore the heart of Te Fiti."})
    # moana_profile_pic = open('https://disneygram-seeds.s3-us-west-1.amazonaws.com/moana_profile_pic.png')
    # moana.profile_pic.attach(io: moana_profile_pic, filename: 'moana_profile_pic.png')
    
    post1 = Post.create!(body: "First post!", author_id: demo_user.id)
    post2 = Post.create!(body: "Summer's just around the corner!", author_id: olaf.id)
    post3 = Post.create!(body: "Date night!!", author_id: demo_user.id)
    post4 = Post.create!(body: "Some people are worth melting for.", author_id: olaf.id)
    post5 = Post.create!(body: "Carry me??", author_id: demo_user.id)

    # post6 = Post.create!(body: "Carry me??", author_id: moana.id)
    # post7 = Post.create!(body: "Carry me??", author_id: moana.id)

    file1 = open('https://disneygram-seeds.s3-us-west-1.amazonaws.com/demo-post1.png')
    post1.photo.attach(io: file1, filename: 'demo-post1.png')

    file2 = open('https://disneygram-seeds.s3-us-west-1.amazonaws.com/olaf-post2.png')
    post2.photo.attach(io: file2, filename: 'olaf-post2.png')

    file3 = open('https://disneygram-seeds.s3-us-west-1.amazonaws.com/demo-post2.png')
    post3.photo.attach(io: file3, filename: 'demo-post2.png')

    file4 = open('https://disneygram-seeds.s3-us-west-1.amazonaws.com/olaf-post1.png')
    post4.photo.attach(io: file4, filename: 'olaf-post1.png')

    file5 = open('https://disneygram-seeds.s3-us-west-1.amazonaws.com/forky-post-carryme.png')
    post5.photo.attach(io: file5, filename: 'forky-post-carryme.png')

end