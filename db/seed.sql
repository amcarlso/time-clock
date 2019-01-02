CREATE TABLE punch (
    id SERIAL PRIMARY KEY,
    m_d_year text,
    day_of_week varchar(9),
    hour_of_day text,
    min_of_hour text,
    am_pm varchar(2),
    punch_type text
)
-- add new punch
INSERT INTO punch(m_d_year, day_of_week, hour_of_day, min_of_hour, am_pm, punch_type)
VALUES(${date}, ${day}, ${hour}, ${minute}, ${ampm}, ${type});
select * from punch;

-- delete punch
DELETE FROM punch
where id = ${id};
select * from punch;