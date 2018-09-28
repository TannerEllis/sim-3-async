select * from helo
where users_id not in (
    select friends_id
    from helo_friends
    where users_id = $1)
and users_id != $1;