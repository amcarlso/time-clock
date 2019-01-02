UPDATE punch
SET m_d_year = ${date},
day_of_week = ${day},
hour_of_day = ${hour},
min_of_hour = ${minute},
am_pm = ${daynight},
punch_type = ${type}
WHERE id = ${id};
SELECT * FROM punch;