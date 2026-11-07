// Единый источник контактов и реквизитов. Поменял здесь — поменялось на всех страницах.
// [УТОЧНИТЬ] помечено то, что ждёт ответа Саши.

export const site = {
  url: 'https://grishanin-law.ru', // [УТОЧНИТЬ: домен не куплен]
  brand: 'Юрист Александр Гришанин', // [УТОЧНИТЬ: или «АГ | юридическая студия»]
  person: {
    name: 'Гришанин Александр Юрьевич',
    shortName: 'Александр Гришанин',
    jobTitle: 'Юрист',
    alumniOf: 'Уральский государственный юридический университет им. В. Ф. Яковлева',
  },
  phone: '+7 (923) 212-66-83',
  phoneHref: '+79232126683',
  email: 'ag_law_studio@mail.ru',
  messengers: {
    telegram: 'https://t.me/AleksandrFortune', // [УТОЧНИТЬ: ник из канала, подтвердить]
    whatsapp: 'https://wa.me/79232126683',
    max: '', // [УТОЧНИТЬ: ссылка на MAX]
  },
  address: {
    street: 'ул. Советская, 48', // [УТОЧНИТЬ: этаж, кабинет]
    city: 'Абакан',
    region: 'Республика Хакасия',
    postalCode: '', // [УТОЧНИТЬ]
    country: 'RU',
    // координаты для разметки и карты [УТОЧНИТЬ: снять точку с Яндекс Карт]; пока null — в разметку не идут
    lat: null as number | null,
    lon: null as number | null,
  },
  hours: '', // [УТОЧНИТЬ: например «Пн–Пт 9:00–19:00»]
  areaServed: ['Абакан', 'Черногорск', 'Саяногорск', 'Республика Хакасия', 'Минусинск', 'Красноярск', 'Кызыл'],
  priceRange: 'от 1 000 ₽',
  legal: {
    entity: 'ИП Гришанин Александр Юрьевич',
    ogrnip: '326190000016239',
    inn: '', // [УТОЧНИТЬ: показывать ли]
  },
  social: {
    telegramChannel: 'https://t.me/ag_law_studio',
    dzen: 'https://dzen.ru/aglawstudio',
    vc: 'https://vc.ru/id5959380',
    harant: 'https://harant.ru/lawyers/abakan/grishanin-aleksandr-yurevich/',
  },
};

// Меню. Порядок = порядок в шапке и подвале.
export const services = [
  { href: '/uslugi/tehprisoedinenie/', label: 'Техприсоединение' },
  { href: '/uslugi/biznes/', label: 'Юрист для бизнеса' },
  { href: '/uslugi/dogovory/', label: 'Договоры' },
  { href: '/uslugi/pretenzii-i-iski/', label: 'Претензии и иски' },
  { href: '/uslugi/vzyskanie-dolgov/', label: 'Взыскание долгов' },
  { href: '/uslugi/stroitelnye-spory/', label: 'Строительные споры' },
  { href: '/uslugi/gosorgany/', label: 'Прокуратура и госорганы' },
];

export const nav = [
  { href: '/konsultaciya/', label: 'Консультация' },
  { href: '/ceny/', label: 'Цены' },
  { href: '/o-yuriste/', label: 'О юристе' },
  { href: '/kontakty/', label: 'Контакты' },
];
