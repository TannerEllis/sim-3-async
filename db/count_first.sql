select count(*) from helo
where users_id != $1
and first_name = $2