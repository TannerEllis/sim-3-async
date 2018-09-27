select *
from helo
where users_id != $1
order by users_id
limit 12 offset $2