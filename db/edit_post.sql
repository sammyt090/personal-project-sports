update posts
set sport = $2,
location = $3,
details = $4,
people = $5
where id_posts = $1
returning id_posts