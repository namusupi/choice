import React, { useState } from 'react';

export default function Home() {
  const [mainCategory, setMainCategory] = useState('food');
  const [foodType, setFoodType] = useState('korean');
  const [result, setResult] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = {
    food: {
      korean: [
        '김치찌개', '된장찌개', '순두부찌개', '부대찌개', '청국장찌개', '갈비찜', '삼겹살', '갈비', '불고기', '제육볶음',
        '닭갈비', '비빔밥', '물냉면', '비빔냉면', '잔치국수', '칼국수', '수제비', '감자탕', '삼계탕', '갈비탕',
        '설렁탕', '매운탕', '떡볶이', '순대', '튀김', '김밥', '떡갈비', '육개장', '곱창', '막창',
        '대창', '족발', '보쌈', '닭발', '찜닭', '백숙', '낙곱새', '아구찜', '조개구이', '회',
        '물회', '대게', '밀면', '국밥', '뼈해장국', '순대국', '내장탕', '돼지국밥', '콩나물국밥', '해물탕',
        '부추전', '동태찌개', '아귀찌개', '생선구이', '계란말이', '생선조림', '낙지볶음', '오징어볶음', '쭈꾸미볶음', '해물파전'
      ],
      chinese: [
        '짜장면', '짬뽕', '울면', '탕수육', '볶음밥', '마라탕', '마라샹궈', '양꼬치', '훠궈', '딤섬',
        '깐풍기', '유린기', '고추잡채', '팔보채', '양장피', '마파두부', '계란볶음밥', '칠리새우', '깐쇼새우', '라조기',
        '동파육', '난자완스', '유산슬', '토마토달걀면', '중국냉면', '하카우', '샤오롱바오', '춘권', '꿔바로우', '기스면',
        '상하이볶음면', '군만두', '유니짜장', '삼선짜장', '삼선짬뽕', '사천탕면', '고추잡채밥', '깐풍새우', '크림새우', '멘보샤'
      ],
      japanese: [
        '초밥', '사시미', '라멘', '우동', '소바', '돈카츠', '규동', '가츠동', '규카츠', '오니기리',
        '덴뿌라', '오코노미야키', '타코야키', '카레', '나베', '샤브샤브', '스키야키', '규니쿠', '가라아게', '교자',
        '텐동', '하이라이스', '멘치카츠', '야키니쿠', '야키소바', '차슈라멘', '미소라멘', '돈코츠라멘', '규동', '가츠동',
        '우나기동', '오야코동', '텐동', '카레우동', '카레라이스', '함바그', '타마고산도', '카츠산도', '돈부리', '오차즈케'
      ],
      western: [
        '스테이크', '파스타', '피자', '햄버거', '샌드위치', '리조또', '오믈렛', '브런치', '타코', '부리토',
        '샐러드', '또띠아', '퀘사디아', '치킨', '립', '감바스', '빠에야', '라자냐', '그라탕', '치즈버거',
        '시저샐러드', '크림파스타', '로제파스타', '알리오올리오', '봉골레', '까르보나라', '크림리조또', '해물리조또', '버팔로윙', '찹스테이크',
        '칠리', '베이컨에그', '클럽샌드위치', '프렌치토스트', '팬케이크', '애그베네딕트', '수프', '바게트', '크로크무슈', '시카고피자'
      ],
      dessert: [
        '케이크', '마카롱', '크로플', '와플', '빙수', '아이스크림', '타르트', '크레페', '도넛', '베이글',
        '초콜릿', '쿠키', '머핀', '브라우니', '푸딩', '젤라또', '티라미수', '슈크림', '크로와상', '스콘',
        '팬케이크', '에클레어', '다쿠아즈', '롤케이크', '파르페', '치즈케이크', '카스테라', '마들렌', '파운드케이크', '브리오슈',
        '몽블랑', '밀푀유', '마카다미아', '트뤼플', '프랄린', '바바루아', '샤르로트', '슈톨렌', '플랑', '패스트리'
      ]
    },
    date: ['영화관', '카페', '공원', '미술관', '쇼핑몰', '노래방', '당구장', '볼링장', '서점', '식물원'],
    exercise: ['조깅', '요가', '수영', '자전거', '헬스', '등산', '테니스', '배드민턴', '필라테스', '클라이밍']
  };
 

  const getRandomItem = () => {
    setIsAnimating(true);
    
    // 룰렛 효과
    let count = 0;
    const interval = setInterval(() => {
      if (mainCategory === 'food') {
        const items = categories.food[foodType];
        setResult(items[Math.floor(Math.random() * items.length)]);
      } else {
        const items = categories[mainCategory];
        setResult(items[Math.floor(Math.random() * items.length)]);
      }
      count++;
      
      if (count > 8) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          결정 룰렛
        </h1>
        
        <div className="flex gap-2 mb-6">
          {['food', 'date', 'exercise'].map((category) => (
            <button 
              key={category}
              className={`flex-1 px-4 py-3 rounded-lg transition-all duration-200 ${
                mainCategory === category 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'bg-slate-100 hover:bg-slate-200'
              }`}
              onClick={() => setMainCategory(category)}
            >
              {category === 'food' ? '음식' : category === 'date' ? '데이트' : '운동'}
            </button>
          ))}
        </div>

        {mainCategory === 'food' && (
          <div className="grid grid-cols-2 gap-2 mb-6">
            {Object.entries({
              korean: '한식',
              chinese: '중식',
              japanese: '일식',
              western: '양식',
              dessert: '디저트'
            }).map(([key, label]) => (
              <button 
                key={key}
                className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                  foodType === key 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'bg-slate-100 hover:bg-slate-200'
                }`}
                onClick={() => setFoodType(key)}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <button 
          className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold shadow-lg
            hover:from-blue-600 hover:to-teal-500 transition-all duration-200 mb-6"
          onClick={getRandomItem}
          disabled={isAnimating}
        >
          {isAnimating ? "선택 중..." : "랜덤 선택하기"}
        </button>

        {result && (
          <div className={`text-2xl font-bold text-center p-6 rounded-lg ${
            isAnimating 
            ? 'bg-slate-100 animate-pulse' 
            : 'bg-gradient-to-r from-blue-50 to-teal-50 animate-fadeIn'
          }`}>
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

// 글로벌 스타일 추가 (pages/_app.js에 추가)
const globalStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;