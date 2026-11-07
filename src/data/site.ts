// Единый источник контактов и реквизитов. Поменял здесь — поменялось на всех страницах.
// [УТОЧНИТЬ] помечено то, что ждёт ответа Саши.

export const site = {
  url: 'https://aglawstudio.ru', // [УТОЧНИТЬ: домен не куплен]
  brand: 'АГ | юридическая студия',
  brandShort: 'АГ',
  brandSub: 'юридическая студия · Абакан',
  person: {
    name: 'Гришанин Александр Юрьевич',
    shortName: 'Александр Гришанин',
    jobTitle: 'Юрист',
    alumniOf: 'Уральский государственный юридический университет им. В. Ф. Яковлева',
  },
  // Звонки и MAX
  phone: '+7 (923) 212-66-83',
  phoneHref: '+79232126683',
  // Telegram и WhatsApp
  phoneMessengers: '+7 (923) 584-29-43',
  phoneMessengersHref: '+79235842943',
  email: 'ag_law_studio@mail.ru',
  messengers: {
    telegram: 'https://t.me/+79235842943', // [УТОЧНИТЬ: @ник надёжнее ссылки по номеру]
    whatsapp: 'https://wa.me/79235842943',
    max: '', // [УТОЧНИТЬ: ссылка на MAX для номера +7 923 212-66-83]
  },
  address: {
    street: 'ул. Советская, 48',
    note: '1 этаж, табличка у кабинета, у входа вывеска. Есть парковка. Приём по записи.',
    city: 'Абакан',
    region: 'Республика Хакасия',
    postalCode: '', // [УТОЧНИТЬ]
    country: 'RU',
    // координаты для разметки и карты [УТОЧНИТЬ: снять точку с Яндекс Карт]; пока null — в разметку не идут
    lat: null as number | null,
    lon: null as number | null,
  },
  hours: 'Круглосуточно, без выходных',
  areaServed: ['Абакан', 'Черногорск', 'Саяногорск', 'Республика Хакасия', 'Минусинск', 'Красноярск', 'Кызыл'],
  priceRange: 'от 1 000 ₽',
  legal: {
    entity: 'ИП Гришанин Александр Юрьевич',
    ogrnip: '326190000016239',
    inn: '190302944703',
  },
  social: {
    telegramChannel: 'https://t.me/ag_law_studio',
    dzen: 'https://dzen.ru/aglawstudio',
    vc: 'https://vc.ru/id5959380',
    harant: 'https://harant.ru/lawyers/abakan/grishanin-aleksandr-yurevich/',
    tj: 'https://t-j.ru/user6425474/',
    // [УТОЧНИТЬ: MAX-канал, VK, Яндекс Карты, 2ГИС, Профи, Авито]
  },
};

// Меню. Порядок = порядок в шапке и подвале. Сначала направления Саши для бизнеса.
export const services = [
  { href: '/uslugi/arbitrazh/', label: 'Арбитражные споры' },
  { href: '/uslugi/biznes/', label: 'Абонентское сопровождение бизнеса' },
  { href: '/uslugi/stroitelnye-spory/', label: 'Строительные споры' },
  { href: '/uslugi/tehprisoedinenie/', label: 'Техприсоединение' },
  { href: '/uslugi/medicina/', label: 'Споры с медорганизациями, защита репутации' },
  { href: '/uslugi/nedvizhimost/', label: 'Недвижимость и земля' },
  { href: '/uslugi/dogovory/', label: 'Договоры' },
  { href: '/uslugi/vzyskanie-dolgov/', label: 'Взыскание долгов' },
  { href: '/uslugi/pretenzii-i-iski/', label: 'Претензии и иски' },
  { href: '/uslugi/gosorgany/', label: 'Прокуратура и госорганы' },
];

export const nav = [
  { href: '/konsultaciya/', label: 'Консультация' },
  { href: '/ceny/', label: 'Цены' },
  { href: '/o-yuriste/', label: 'О юристе' },
  { href: '/kontakty/', label: 'Контакты' },
];
