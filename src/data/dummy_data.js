import bannerLogo from '../assets/banner-logo.png'

const dummyData = [
  {
    id: "1",
    title: '신입 프론트엔드 개발자로 3개월 살아남기',
    summary:
      'styled-components부터 라우터까지 어떠셨나요?',
    content:
      '입사 첫날부터 지금까지의 3개월을 돌아보면 정말 많은 일이 있었습니다.\n\n처음에는 코드베이스를 파악하는 것부터 막막했지만, 팀 문서와 선배 개발자들의 도움으로 점차 적응해 나갔습니다. 특히 컴포넌트 단위로 코드를 쪼개는 습관이 왜 중요한지 실무를 통해 체감할 수 있었습니다.\n\n앞으로도 꾸준히 배우고 기록하며 성장하는 개발자가 되고 싶습니다.',
    author: {
      name: '머쨍이사자',
      avatar: '',
    },
    date: '2026년 7월 2일',
    likes: 23,
    comments: 4,
    thumbnail: bannerLogo,
  },
  {
    id: "2",
    title: '리액트 상태관리, useState부터 시작해도 될까?',
    summary:
      '[회고] 심바톤 회고하기',
    content:
      '프로젝트 초반에는 상태관리 라이브러리 없이 useState와 props drilling만으로도 충분한 경우가 많습니다.\n\n다만 컴포넌트 트리가 깊어지고 여러 컴포넌트가 같은 상태를 공유해야 할 때는 Context API나 별도 라이브러리 도입을 고려하게 됩니다.\n\n결론적으로 처음부터 무거운 도구를 들고 오기보다는, 필요해지는 시점을 캐치하는 감각을 기르는 게 더 중요하다고 생각합니다.',
    author: {
      name: '멋사랑해',
      avatar: '',
    },
    date: '2026년 7월 9일',
    likes: 9,
    comments: 2,
    thumbnail: bannerLogo,
  },
  {
    id: "3",
    title: 'useParams, useNavigate 알아보기',
    summary:
      '중커톤 기대돼 ~~',
    content:
      '처음 라우터를 배울 때는 useParams랑 useNavigate가 뭐가 다른지도 헷갈렸습니다.\n\nuseParams는 URL에 담긴 값을 꺼내오는 용도고, useNavigate는 버튼 클릭 같은 이벤트로 다른 페이지로 이동시키는 용도라는 걸 직접 코드를 짜보면서 감을 잡았습니다. 특히 상세페이지에서 id로 게시글을 찾아오는 부분을 만들면서 라우팅의 흐름이 눈에 보이기 시작했습니다.\n\n처음엔 낯설었지만 한 번 익히고 나니 이제 페이지 이동은 자신 있게 구현할 수 있을 것 같습니다.',
    author: {
      name: '콩',
      avatar: '',
    },
    date: '2026년 7월 14일',
    likes: 11,
    comments: 3,
    thumbnail: bannerLogo,
  },
]

export default dummyData
