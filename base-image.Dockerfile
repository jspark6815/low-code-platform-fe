# Base Image 설정 (예: Node.js)
FROM node:20

# 작업 디렉토리 설정
WORKDIR /app

# 기본 이미지 빌드 시점에 필요한 파일들 복사
COPY /lowcode-connect-platform/package*.json ./

# npm 설치
RUN npm install