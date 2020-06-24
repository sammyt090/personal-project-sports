select u.first_name, u.profile_pic, u.id, p.sport, p.people, p.details, p.people_coming, p.location, p.id_posts from posts p
join users u on p.posts_id = u.id