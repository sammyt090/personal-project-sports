drop table posts;
drop table favorites;
drop table users;


create table users (
    id serial primary key,
    first_name varChar(50),
    last_name varChar(50),
    username varChar(50),
    password varChar(100),
    profile_pic text
);

create table favorites (
    id serial primary key,
    sport varChar(20),
    favorites_id integer references users(id)
);

create table posts (
    id serial primary key,
    sport varChar(30),
    location varChar(100),
    details varChar(500),
    maxLimit integer,
    posts_id integer references users(id)

);