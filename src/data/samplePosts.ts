export type Post = {
  id: number
  author: string
  content: string
  images: string[]
  created_at: string
}

const photo = (seed: string): string => `https://picsum.photos/seed/${seed}/600/600`

// 최신 글이 1번. created_at 은 ISO 8601 (한국 시간)
export const samplePosts: Post[] = [
  {
    id: 1,
    author: '서윤',
    content: '주말 아침 산책길. 빵집에 들렀다가 강가까지 천천히 걸었다 🍞',
    images: [photo('morningwalk'), photo('croissant'), photo('riverside')],
    created_at: '2026-10-10T14:20:00+09:00',
  },
  {
    id: 2,
    author: '민재',
    content: '오늘의 커피 ☕️ 창가 자리가 비어 있어서 운이 좋았던 날',
    images: [photo('windowseat')],
    created_at: '2026-10-10T11:05:00+09:00',
  },
  {
    id: 3,
    author: '하린',
    content:
      '비 오는 날엔 괜히 오래된 노트를 꺼내 보게 된다. 작년 이맘때 적어 둔 문장들을 읽다 보니, 그땐 그렇게 커 보이던 고민들이 지금은 기억도 잘 나지 않는다는 게 신기했다.\n\n그래서 오늘도 사소한 걸 적어 두기로 했다. 따뜻한 차 한 잔, 창문에 맺힌 빗방울, 퇴근길에 들은 노래 한 곡. 일 년 뒤의 내가 이 조각들을 보면서 오늘을 조금 더 다정하게 기억해 주면 좋겠다.',
    images: [photo('rainyday'), photo('oldnotebook')],
    created_at: '2026-10-10T08:40:00+09:00',
  },
  {
    id: 4,
    author: '도윤',
    content: '퇴근하고 친구들이랑 야시장. 떡볶이, 어묵, 붕어빵까지 하나씩 다 먹었다. 배불러서 한 정거장 걸어서 왔음',
    images: [photo('nightmarket'), photo('tteokbokki'), photo('streetlamp'), photo('lantern')],
    created_at: '2026-10-09T21:30:00+09:00',
  },
  {
    id: 5,
    author: '지우',
    content: '옥상에서 본 오늘 노을. 하늘이 분홍색이었다',
    images: [photo('sunsetroof')],
    created_at: '2026-10-09T18:10:00+09:00',
  },
  {
    id: 6,
    author: '은호',
    content: '도시락 싸서 공원 벤치에서 점심. 바람이 선선해서 딱 좋았다',
    images: [photo('lunchbox'), photo('parkbench')],
    created_at: '2026-10-09T12:45:00+09:00',
  },
  {
    id: 7,
    author: '수아',
    content: '동네 책방에서 산 소설을 다 읽었다. 마지막 장을 덮고 한참 멍하니 앉아 있었다',
    images: [photo('bookstore'), photo('bookmark'), photo('readinglamp')],
    created_at: '2026-10-08T22:15:00+09:00',
  },
  {
    id: 8,
    author: '태오',
    content: '자전거 바퀴에 바람 넣고 한강까지. 오랜만에 다리가 뻐근하다',
    images: [photo('bicycle')],
    created_at: '2026-10-08T16:30:00+09:00',
  },
  {
    id: 9,
    author: '서윤',
    content: '몬스테라에 새 잎이 났다 🌱 돌돌 말려 있던 게 하루 만에 펴졌다',
    images: [photo('houseplant'), photo('wateringcan')],
    created_at: '2026-10-08T09:20:00+09:00',
  },
  {
    id: 10,
    author: '민재',
    content: '처음으로 엄마 레시피대로 김치찌개를 끓였다. 맛이 비슷하게 나서 괜히 뿌듯했다. 반찬도 세 가지나 만들었다',
    images: [photo('homecooking'), photo('kimchistew'), photo('ricebowl'), photo('sidedish')],
    created_at: '2026-10-07T20:50:00+09:00',
  },
  {
    id: 11,
    author: '하린',
    content: '길에서 주운 단풍잎. 수첩 사이에 끼워 두었다 🍁',
    images: [photo('autumnleaf')],
    created_at: '2026-10-07T15:00:00+09:00',
  },
  {
    id: 12,
    author: '도윤',
    content: '아침 러닝 3km. 해 뜨는 걸 보면서 뛰니까 하나도 안 힘들었다 (거짓말)',
    images: [photo('sunrise'), photo('joggingtrack'), photo('sneakers')],
    created_at: '2026-10-07T07:30:00+09:00',
  },
  {
    id: 13,
    author: '지우',
    content: '햇빛 드는 자리만 골라 자는 우리 집 고양이 🐈',
    images: [photo('catnap'), photo('sunbeam')],
    created_at: '2026-10-06T19:40:00+09:00',
  },
  {
    id: 14,
    author: '은호',
    content: '10월인데 아이스크림. 아직은 괜찮은 날씨',
    images: [photo('icecream')],
    created_at: '2026-10-06T13:10:00+09:00',
  },
  {
    id: 15,
    author: '수아',
    content: '꽃시장에서 코스모스 한 단. 집에 와서 화병에 꽂으니 방이 환해졌다',
    images: [photo('flowermarket'), photo('cosmos'), photo('vase'), photo('ribbon')],
    created_at: '2026-10-05T17:25:00+09:00',
  },
  {
    id: 16,
    author: '태오',
    content: '빨래 널기 좋은 날. 베란다 가득 햇빛',
    images: [photo('laundry'), photo('balcony')],
    created_at: '2026-10-05T10:00:00+09:00',
  },
  {
    id: 17,
    author: '서윤',
    content: '달이 너무 밝아서 한참 올려다봤다. 내일은 보름이래',
    images: [photo('moonlight')],
    created_at: '2026-10-04T22:45:00+09:00',
  },
  {
    id: 18,
    author: '민재',
    content: '갑자기 바다가 보고 싶어서 첫차를 탔다. 모래사장에 앉아 파도 소리만 한 시간 들었다. 조개껍데기 하나 주워 왔다',
    images: [photo('seaside'), photo('seashell'), photo('wave')],
    created_at: '2026-10-04T14:35:00+09:00',
  },
  {
    id: 19,
    author: '하린',
    content: '캔들 켜고 따뜻한 보리차. 오늘은 일찍 자야지',
    images: [photo('candle'), photo('teacup')],
    created_at: '2026-10-03T20:05:00+09:00',
  },
  {
    id: 20,
    author: '도윤',
    content: '도서관 창가 자리 사수 성공. 오늘은 여기서 하루 종일',
    images: [photo('library')],
    created_at: '2026-10-03T11:50:00+09:00',
  },
  {
    id: 21,
    author: '지우',
    content: '친구들이랑 공원 피크닉. 샌드위치 만들고 돗자리 펴고 프리스비까지. 해가 질 때까지 놀았다',
    images: [photo('picnic'), photo('sandwich'), photo('blanket'), photo('frisbee')],
    created_at: '2026-10-02T18:55:00+09:00',
  },
  {
    id: 22,
    author: '은호',
    content: '출근길 버스 정류장. 오늘 플레이리스트가 유난히 좋다',
    images: [photo('busstop'), photo('earphones')],
    created_at: '2026-10-02T08:15:00+09:00',
  },
  {
    id: 23,
    author: '수아',
    content: '처음 구워 본 쿠키. 모양은 엉망인데 맛은 괜찮다 🍪',
    images: [photo('baking'), photo('cookies'), photo('oven')],
    created_at: '2026-10-01T21:20:00+09:00',
  },
  {
    id: 24,
    author: '태오',
    content: '처음 걸어 본 골목. 담벼락에 고양이 그림이 있었다',
    images: [photo('alleyway')],
    created_at: '2026-10-01T13:40:00+09:00',
  },
  {
    id: 25,
    author: '서윤',
    content: '여행지에서 나한테 보낸 엽서가 오늘 도착했다. 한 달 전의 내가 쓴 글씨',
    images: [photo('postcard'), photo('mailbox')],
    created_at: '2026-09-30T19:10:00+09:00',
  },
  {
    id: 26,
    author: '민재',
    content: '토요일 장터. 사과 한 바구니 사 왔다 🍎 올해 첫 햇사과',
    images: [photo('farmersmarket'), photo('apples'), photo('basket')],
    created_at: '2026-09-30T09:45:00+09:00',
  },
  {
    id: 27,
    author: '하린',
    content:
      '오늘의 기록.\n\n아침에 알람 없이 눈을 떴다. 창문을 열었더니 공기가 차가워져 있었다. 이제 정말 가을이구나 싶었다.\n\n점심은 혼자 국수를 먹었고, 오후엔 밀린 편지에 답장을 썼다. 별일 없는 하루였는데 이렇게 적어 두니 꽤 괜찮은 하루였던 것 같다.',
    images: [photo('diary')],
    created_at: '2026-09-29T22:30:00+09:00',
  },
  {
    id: 28,
    author: '도윤',
    content: '동네 뒷산 정상까지. 보온병에 싸 간 커피가 제일 맛있었다. 내려오는 길에 다람쥐도 봤다 🐿️',
    images: [photo('hiking'), photo('mountaintop'), photo('trail'), photo('thermos')],
    created_at: '2026-09-29T15:15:00+09:00',
  },
  {
    id: 29,
    author: '지우',
    content: '중고 가게에서 산 LP. 지지직거리는 소리마저 좋다',
    images: [photo('vinylrecord'), photo('turntable')],
    created_at: '2026-09-28T18:00:00+09:00',
  },
  {
    id: 30,
    author: '수아',
    content: '늦잠 자고 브런치. 팬케이크 위에 시럽 듬뿍',
    images: [photo('brunch'), photo('pancakes'), photo('orangejuice')],
    created_at: '2026-09-28T10:20:00+09:00',
  },
]
