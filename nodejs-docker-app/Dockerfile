# 베이스 이미지 설정
FROM node:14

# working directory 설정
WORKDIR /usr/src/app

# 의존 라이브러리 중복 설치 방지
COPY package.json ./

# 의존 라이브러리 설치
RUN npm install

# 서버의 모든 파일을 이미지로 복사
COPY ./ ./

# 서버 실행 명령
CMD ["node", "server.js"]