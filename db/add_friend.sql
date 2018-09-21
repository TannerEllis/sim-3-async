insert into helo_friends (friends_id, users_id)
values ($1, $2);

select * from helo
where users_id not in (
    select friends_id
    from helo_friends
    where users_id = $1)
and users_id != $1