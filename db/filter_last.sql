select *
from helo
where last_name = $1
and users_id != $2
order by users_id
limit 12 offset $3