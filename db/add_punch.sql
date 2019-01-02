INSERT INTO punch(m_d_year, day_of_week, hour_of_day, min_of_hour, am_pm, punch_type)
VALUES(${date}, ${day}, ${hour}, ${minute}, ${daynight}, ${type});
select * from punch;