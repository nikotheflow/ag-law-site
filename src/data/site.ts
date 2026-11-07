// Единый источник контактов и реквизитов. Поменял здесь — поменялось на всех страницах.
// [УТОЧНИТЬ] помечено то, что ждёт ответа Саши.

export const site = {
  url: 'https://aglawstudio.ru', // [УТОЧНИТЬ: домен не куплен]
  brand: 'AG | юридическая студия', // латинские AG — как в логотипе
  brandShort: 'AG',
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

// Меню и карточки направлений. Порядок = порядок в шапке, подвале и на главной.
// main: true — пять главных направлений Саши, на главной выделены.
export const services = [
  { href: '/uslugi/arbitrazh/', label: 'Арбитражные споры', main: true,
    blurb: 'Взыскание задолженности, поставка, подряд, неустойка и убытки в Арбитражном суде Хакасии и апелляции.' },
  { href: '/uslugi/biznes/', label: 'Абонентское сопровождение бизнеса', main: true,
    blurb: 'Юрист на связи вместо штатного: договоры, претензии, проверки, суды. Для ИП и ООО.' },
  { href: '/uslugi/stroitelnye-spory/', label: 'Строительные споры', main: true,
    blurb: 'Сорванные сроки, брак, аванс, оплата работ. Для заказчиков и подрядчиков.' },
  { href: '/uslugi/tehprisoedinenie/', label: 'Техприсоединение', main: true,
    blurb: 'Россети не подключают по договору? Подключение через суд, неустойка и астрент.' },
  { href: '/uslugi/medicina/', label: 'Медицина и защита репутации', main: true,
    blurb: 'Споры с клиниками, возврат денег за лечение, честь, достоинство и деловая репутация.' },
  { href: '/uslugi/nedvizhimost/', label: 'Недвижимость и земля', main: false,
    blurb: 'Проверка перед покупкой, сопровождение сделок, земельные споры.' },
  { href: '/uslugi/dogovory/', label: 'Договоры', main: false,
    blurb: 'Составление и проверка: поставка, подряд, услуги, аренда.' },
  { href: '/uslugi/vzyskanie-dolgov/', label: 'Взыскание долгов', main: false,
    blurb: 'Претензия, судебный приказ, иск, работа с приставами.' },
  { href: '/uslugi/pretenzii-i-iski/', label: 'Претензии и иски', main: false,
    blurb: 'Составлю документ под вашу ситуацию, а не по шаблону.' },
  { href: '/uslugi/gosorgany/', label: 'Прокуратура и госорганы', main: false,
    blurb: 'Представления прокурора, проверки, штрафы, жалобы.' },
];

export const nav = [
  { href: '/konsultaciya/', label: 'Консультация' },
  { href: '/ceny/', label: 'Цены' },
  { href: '/o-yuriste/', label: 'О юристе' },
  { href: '/kontakty/', label: 'Контакты' },
];
