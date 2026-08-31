# ITGO Front

> 위치를 기반으로 IT 기기 게시글을 탐색하고, 제품 정보와 사양을 비교하는 모바일 애플리케이션입니다.

![React Native](https://img.shields.io/badge/React_Native-0.72-61DAFB?logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-49-000020?logo=expo&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-FFCA28?logo=firebase&logoColor=black)
![Kakao](https://img.shields.io/badge/Kakao-Local_API-FFCD00?logo=kakao&logoColor=black)

## 프로젝트 소개

ITGO Front는 IT 기기 정보와 사용자 게시글을 모바일에서 탐색하기 위한 Expo·React Native 클라이언트입니다. 전화번호 인증과 위치 확인을 거쳐 최신 게시글, 카테고리, 즐겨찾기, 주변 게시글을 확인하고 제품 상세 정보와 사양을 비교할 수 있습니다.

## 주요 기능

- Firebase 기반 전화번호 인증
- GPS와 Kakao Local API를 이용한 현재 위치 확인
- 최신·인기·주변 게시글 조회
- 제조사와 기기 종류별 카테고리 탐색
- IT 기기 상세 정보 및 제품 사양 비교
- 게시글 검색과 검색 기록 저장
- 게시글 좋아요·즐겨찾기
- 알림 키워드 등록과 알림 목록 조회
- AsyncStorage 기반 사용자·검색·설정 정보 보관

## 화면 흐름

```text
Splash
  → Start
  → Phone Verification
  → Geolocation
  → Main
      ├─ Category
      ├─ Bookmark
      ├─ Home
      ├─ Near Me
      └─ My Page
```

상세 화면은 게시글, 검색 결과, 기기 정보, 기기 비교, 프로필과 알림 설정으로 구성되어 있습니다.

## 기술 스택

| 영역 | 기술 |
| --- | --- |
| Application | React Native 0.72, React 18 |
| Runtime | Expo SDK 49 |
| Navigation | React Navigation Stack, Bottom Tabs |
| Networking | Axios, Fetch API |
| Authentication | Firebase Authentication, SMS Verification |
| Location | Expo Location, Kakao Local API |
| Storage | AsyncStorage |

## 프로젝트 구조

```text
.
├─ App.js                     # Stack Navigation 진입점
├─ api/
│  └─ Verify.js               # SMS 인증 API
├─ assets/                    # 앱 아이콘과 화면 이미지
├─ screens/
│  ├─ tabs/                   # Bottom Tab 화면
│  ├─ Geolocation.js          # 위치 확인
│  ├─ SearchScreen.js         # 검색
│  ├─ DeviceInfo.js           # 기기 상세
│  ├─ DeviceCompare.js        # 기기 비교
│  └─ ...
├─ storage/
│  └─ AsyncStorageUtil.js     # 로컬 저장소 공통 함수
├─ app.json                   # Expo 설정
├─ babel.config.js
└─ package.json
```

## 실행 방법

### 1. 요구 사항

- Node.js 18 LTS 권장
- npm 또는 Yarn
- Android Studio, Xcode 또는 Expo 개발 환경

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경변수 설정

프로젝트 루트에 `.env` 파일을 만들고 연동할 서비스 주소와 API 키를 설정합니다.

```env
API_IP=http://your-backend
API_IPSSS=http://your-auth-backend
BASE_URL=http://your-sms-api
REST_API_KEY=your-kakao-rest-api-key
apiKey=your-firebase-api-key
```

환경변수 이름은 현재 코드에서 사용하는 대소문자를 그대로 유지해야 합니다. 실제 키와 내부 서버 주소는 저장소에 커밋하지 마세요.

### 4. 개발 서버 실행

```bash
npm start
```

플랫폼별 실행:

```bash
npm run android
npm run ios
npm run web
```

## 연동 참고

- 게시글·기기·프로필·알림 기능을 사용하려면 ITGO 백엔드 API가 필요합니다.
- 위치를 주소로 변환하려면 Kakao Local API 키가 필요합니다.
- 전화번호 인증을 사용하려면 Firebase와 SMS 인증 API 설정이 필요합니다.
- React Native Firebase 플러그인을 포함하므로 기능에 따라 네이티브 개발 빌드가 필요할 수 있습니다.

