SELECT 
HISTORY_ID,
CAR_ID,
DATE_FORMAT(START_DATE, '%Y-%m-%d') as START_DATE,
DATE_FORMAT(END_DATE, '%Y-%m-%d') as END_DATE,
CASE 
    WHEN DATEDIFF(END_DATE, START_DATE) >= 29 THEN '장기 대여'
    ELSE '단기 대여'
END as RENT_TYPE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE DATE_FORMAT(START_DATE,'%Y-%m') = DATE_FORMAT(DATE('2022-09-01'), '%Y-%m')
ORDER BY HISTORY_ID DESC