create table users (
    id serial primary key,
    first_name varChar(50),
    last_name varChar(50),
    username varChar(50),
    password varChar(100),
    profile_pic text
);

create table favorites (
    id_favorites serial primary key,
    sport varChar(20),
    favorites_id integer references users(id)
);

create table posts (
    id_posts serial primary key,
    sport varChar(30),
    location varChar(100),
    details varChar(500),
    people integer,
    posts_id integer references users(id)

);

create table activity (
    id_activity serial primary key,
    activity_id integer references posts(id_posts),
    user_activity_id integer references users(id),
    going boolean
);