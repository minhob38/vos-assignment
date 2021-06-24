# 공간의 가치 백엔드 과제
## 🔎 개요
**서울시 구별 공시지가 순위**를 조회하는 API 서버입니다. 아래 URI를 통해 해당 지역의 **상위 20개 (공시지가 내림차순, pnu 올림차순)** 항목을 조회할 수 있습니다.  
`http://localhost:3000/api/land-value?area-code={시군구코드}&base-year={기준연도}&base-month={기준월}`

❗️ ⚠️ 공시지가 순위를 계산할 때, 기준은 2020년 1월입니다. 따라서 클라이언트에서 Query String을 ***base-year=2020&base-month=01***로 요청해야합니다. 만일 아니라면 서버는 400(Bad Request) 상태코드를 응답합니다.

## 📝 설치 및 실행
### 설치
```
git clone https://github.com/minhob38/vos-assignment.git
cd vos-assignment
npm install
```

### 서버 실행
서버는 localhost 3000 포트에서 실행됩니다.
```
npm start
```

### 서버 테스트
```
npm test
```

## 👷🏻 Stack
koa (express 차이)
postgreSQL (MongoDB 차이)
sequelize  
csv-parser  
event-stream  
super-test  
chai  
google clould sql  

## Lesson
### Indexing에 의한 Database 조회 속도 차이
- Indexing 없을 경우
6498ms

- Indexing 있는 경우

### 대용량 파일 처리