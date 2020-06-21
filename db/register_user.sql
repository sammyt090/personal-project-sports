insert into users (username, password, first_name, last_name, profile_pic)
values
($1, $2, $3, $4, $5)
returning *;