insert into helo
(auth_id, first_name, last_name, image)
values ($1, $2, $3, $4)

returning *;