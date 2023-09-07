// Структура данных для генеалогического древа (здесь предполагается, что у каждой записи есть ID и родительский ID)
export const familyData = [
  {
    id: 1,
    name: 'Дедушка',
    partner: 'Бабушка',
    partnerId: 8,
    children: [
      {
        id: 2,
        name: 'Мама',
        partner: 'Папа',
        partnerId: 9,
        children: [
          {
            id: 3,
            name: 'Родион',
          },
          {
            id: 4,
            name: 'Брат',
          },
          {
            id: 5,
            name: 'Сестра',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Дядя',
    partner: 'Тётя',
    children: [
      {
        id: 7,
        name: 'Племянник',
      },
    ],
  },
];
