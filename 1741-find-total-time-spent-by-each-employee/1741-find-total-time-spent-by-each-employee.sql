# Write your MySQL query statement below
SELECT event_day as day, emp_id, sum(out_time - in_time) as total_time FROM employees GROUP BY day, emp_id ORDER BY total_time DESC;