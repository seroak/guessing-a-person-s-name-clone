# guessing-a-person-s-name-clone
## 만들게 된 계기

---

웹 게임인 인물퀴즈를 자주 플레이를 했는데 제가 원하는 인물을 넣어서 게임을 만들 수 있는 기능이 있으면 좋겠다는 생각으로 프로젝트를 시작했습니다

![스크린샷 2024-03-08 121243.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/bda322a3-79e5-4331-ac1a-08a516a320ba/62c20279-a3ac-430d-8bd6-8e085b18e9e4/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-03-08_121243.png)

## 프로그램 기능 소개

---

문제를 생성하지 않고 로그인 없이 바로 게임을 플레이를 하길 원하는 사람들을 위해 미리 만들어 놓은 문제들을 플레이 해볼 수 있습니다

한 문제를 푸는 시간을 정할 수 있고 정해진 문제를 다 풀거나 중간에 틀리거나 제한 시간이 종료된다면 이때까지 푼 문제의 수가 나타납니다

![스크린샷 2024-03-08 121203.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/bda322a3-79e5-4331-ac1a-08a516a320ba/af2ac3f1-d9de-4cca-936e-5fe5883df47a/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-03-08_121203.png)

자신이 원하는 인물 사진으로 문제를 만들 수 있는 페이지 입니다

문제를 만들고 지우고 데이터베이스에 저장하는 기능이 있습니다

사람 이름이 성을 붙일 수도 있고 아닐 수도 있고 연예인 같은 경우에는 예명도 있을 수 있으니 정답으로 인정할 수 있는 4개의 이름 후보를 만들 수 있게 만들었습니다

![스크린샷 2024-03-08 121706.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/bda322a3-79e5-4331-ac1a-08a516a320ba/23d2e188-c30e-46a9-ac52-0a5a8b64acf2/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-03-08_121706.png)

자기가 원하는 인물 사진으로 문제를 만들고 그 문제를 플레이 할 수 있는 페이지입니다

자신 만든 문제를 플레이 할 수 있다는 기능 말고는 모든 기능이 인물 퀴즈 기능하고 똑같습니다 

![스크린샷 2024-03-08 131103.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/bda322a3-79e5-4331-ac1a-08a516a320ba/b4968807-bf62-4988-a0db-f111025042ef/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2024-03-08_131103.png)

이 프로그램은 기능 개발은 완료된 상태로 배포를 준비하고 있습니다

## 📒경험

---

게임을 만드는 과정이 생각보다 코드가 많이 더러워질 수 있다는 걸 알게 된 프로젝트였습니다

지속적으로 화면이 계속 바뀌는 페이지를 만들다 보니 컴포넌트가 많이 사용되었고 이를 구분하기 위해 주석의 중요성을 다시 한번 확인하게 된 프로젝트였습니다

## 🛠️Architecture

---

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/bda322a3-79e5-4331-ac1a-08a516a320ba/25155900-4158-4f35-ba87-7ca01bdbfad7/Untitled.png)
# front-End 설치 및 실행
cd front</br>
npm i</br>
npm run dev</br>

# back-End 설치 및 실행
cd back</br>
npm i</br>
npm run dev</br>
