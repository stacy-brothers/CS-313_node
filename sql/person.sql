drop index parent_idx;
drop index child_idx;
drop table person_xref;
drop table person;

create table person (
    id serial primary key,
    first varchar(30) not null,
    last varchar(30) not null,
    dob varchar(10) not null
);

insert into person ( first, last, dob ) values 
('Stacy','Bro','1969-01-01'),
('Kath','Bro','1970-07-07'), 
('Jean','Moon','1942-03-03'),
('Rich', 'Bro','1941-11-11'), 
('Kort','Bro','1993-02-02'),
('Seth','Bro','1995-04-04'),
('Spence','Bro','2001-06-06');


create table person_xref (
    parent_id integer references person(id),
    child_id integer references person(id)
);

create index parent_idx on person_xref(parent_id);
create index child_idx on person_xref(child_id);

insert into person_xref (parent_id, child_id) values
((select id from person where first = 'Stacy'), (select id from person where first = 'Kort')),
((select id from person where first = 'Stacy'), (select id from person where first = 'Seth')),
((select id from person where first = 'Stacy'), (select id from person where first = 'Spence')),
((select id from person where first = 'Kath'), (select id from person where first = 'Kort')),
((select id from person where first = 'Kath'), (select id from person where first = 'Seth')),
((select id from person where first = 'Kath'), (select id from person where first = 'Spence')),
((select id from person where first = 'Rich'), (select id from person where first = 'Stacy')),
((select id from person where first = 'Jean'), (select id from person where first = 'Stacy'));

select * from person;

select * from person_xref;

select id, first, last, dob from person where id in ( select parent_id from person_xref where child_id = 1);
