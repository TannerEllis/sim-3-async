select *
from helo
where first_name = $1
and users_id != $2
order by users_id
limit 12 offset $3