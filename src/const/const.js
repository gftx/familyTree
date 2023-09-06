// Структура данных для генеалогического древа (здесь предполагается, что у каждой записи есть ID и родительский ID)
export const genealogyData = [
  { id: 1, name: 'Петр', parent: null },
  { id: 2, name: 'Анна', parent: 1 },
  { id: 3, name: 'Иван', parent: 1 },
  { id: 4, name: 'Мария', parent: 2 },
  { id: 5, name: 'Николай', parent: 2 },
  // Добавьте свои данные здесь
];