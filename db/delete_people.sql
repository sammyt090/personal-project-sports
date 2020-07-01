update activity
set activity_id = 0,
user_activity_id = 0,
going = false

where id_activity = $1;
