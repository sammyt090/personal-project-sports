update activity
set activity_id = $2,
user_activity_id = $3,
going = $4

where id_activity = $1
returning *