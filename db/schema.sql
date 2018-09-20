create table helo (
	users_id SERIAL PRIMARY KEY,
	auth_id TEXT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	image VARCHAR(250),
	gender VARCHAR(50),
	hair_color VARCHAR(50),
	eye_color VARCHAR(20),
    hobby VARCHAR(20),
    birth_day INT,
    birth_month VARCHAR(20),
    birth_year INT
);


CREATE TABLE helo_friends (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES helo(users_id),
    friends_id INT REFERENCES helo(users_id)
);
