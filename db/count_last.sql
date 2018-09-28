select count(*) from helo
where users_id != $1
and last_name = $2