import { Routes } from '@/routes/routes'

interface Visible {
  id: number
  name: string
}

export type CardType = {
  id: number
  img: string
  name: string
  desc: string
  author: string
  visible: Visible[]
  type: string[]
  src: string
}

export const arrCards: CardType[] = [
  {
    id: 1,
    img: 'https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg',
    name: 'Go Away',
    desc: 'Управляй автомобилем, избегая аварий и перепрыгивая препятствия на пути к следующему уровню.',
    author: 'Mahisto',
    visible: [
      {
        id: 1,
        name: 'hello@gmail.com',
      },
      {
        id: 2,
        name: 'oleg@gamil.com',
      },
    ],
    type: ['new', 'tds', 'runners'],
    src: 'https://code.s3.yandex.net/teens/pindie-games/go-away/game/index.html',
  },
  {
    id: 2,
    img: 'https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png',
    name: 'G.U.N.N.E.R.',
    desc: 'Продержись как можно дольше, отбиваясь от врагов, которых будет становиться всё больше.',
    author: 'IDKWIAm',
    visible: [
      {
        id: 1,
        name: 'hello@gmail.com',
      },
      {
        id: 2,
        name: 'oleg@gamil.com',
      },
    ],
    type: ['new', 'runners', 'shoters', 'tds'],
    src: 'https://code.s3.yandex.net/teens/pindie-games/gunner/game/index.html',
  },
  {
    id: 3,
    img: 'https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png',
    name: 'Space Terror',
    desc: 'Лети как можно дальше в космическом пространстве, уничтожая всё на своём пути.',
    author: 'IDKWIAm',
    visible: [
      {
        id: 1,
        name: 'hello@gmail.com',
      },
      {
        id: 2,
        name: 'oleg@gamil.com',
      },
    ],
    type: ['new', 'tds', 'pixel', 'runners'],
    src: 'https://code.s3.yandex.net/teens/pindie-games/space-terror/game/index.html',
  },
  {
    id: 4,
    img: 'https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png',
    name: 'Square Slayer',
    desc: `Уворачивайся и отстреливайся от озлобленных квадратов 
        и собирай жизни для перехода на следующий уровень.`,
    author: 'niclan',
    visible: [
      {
        id: 1,
        name: 'hello@gmail.com',
      },
      {
        id: 2,
        name: 'oleg@gamil.com',
      },
    ],
    type: ['new', 'pixel'],
    src: 'https://code.s3.yandex.net/teens/pindie-games/square-slayer/game/index.html',
  },
  {
    id: 5,
    img: 'https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png',
    name: 'Crystal Kepper',
    desc: 'Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.',
    author: 'Lonely Baobab',
    visible: [
      {
        id: 1,
        name: 'hello@gmail.com',
      },
      {
        id: 2,
        name: 'oleg@gamil.com',
      },
    ],
    type: ['popular', 'tds', 'shoters'],
    src: 'https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/game/index.html',
  },
  {
    id: 6,
    img: 'https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png',
    name: 'Dangeons n Caves. Prologue',
    desc: 'Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.',
    author: 'F-Style',
    visible: [
      {
        id: 1,
        name: 'hello@gmail.com',
      },
      {
        id: 2,
        name: 'oleg@gamil.com',
      },
    ],
    type: ['popular', 'pixel'],
    src: 'https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/game/index.html',
  },
  {
    id: 7,
    img: 'https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png',
    name: 'Defence of Crystal',
    desc: `Защищай магический кристалл от монстров и 
        уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.`,
    author: 'MastWe',
    visible: [
      {
        id: 1,
        name: 'hello@gmail.com',
      },
      {
        id: 2,
        name: 'oleg@gamil.com',
      },
    ],
    type: ['popular', 'runners'],
    src: 'https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/game/index.html',
  },
]

export const arrNavHeader = [
  {
    name: 'Новинки',
    route: Routes.newCards,
  },
  {
    name: 'Популярные',
    route: Routes.popularCards,
  },
  {
    name: 'Шутеры',
    route: Routes.shoterCards,
  },
  {
    name: 'Ранеры',
    route: Routes.runnerCards,
  },
  {
    name: 'Пиксельные',
    route: Routes.pixelCards,
  },
  {
    name: 'TDS',
    route: Routes.tdsCards,
  },
]
