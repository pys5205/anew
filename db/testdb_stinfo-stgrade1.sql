create database testdb;
show databases;
use testdb;
show tables;

create table st_info(st_id int, name varchar(20), dept varchar(25)) default charset=utf8;
show tables;

create table st_grade(st_id int, Linux int, DB int);
show tables;

explain st_info;
explain st_grade;

alter table st_info add constraint pk_stinfo primary key(st_id);
alter table st_grade add constraint pk_stinfo primary key(st_id);

insert into st_info values (202201, 'LeeGilDong', 'Game');
insert into st_info values (202202, 'KimGilDong', 'Computer');
insert into st_info values (202203, 'HongGilDong', 'Game');

select * from st_info;

insert into st_grade values (202201, '80', '70');
insert into st_grade values (202202, '90', '75');
insert into st_grade values (202203, '95', '85');
select * from st_grade;
