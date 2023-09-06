// Import необходимых библиотек и стилей
import Tree from 'react-d3-tree';
import { genealogyData } from '../../const/const';

import './index.scss';


// Функция для преобразования данных в формат, подходящий для react-d3-tree
const transformData = (data) => {
  const treeData = {
    name: 'Петр', // Имя корневого элемента
    children: [],
  };

  const idToNodeMap = {};

  data.forEach((person) => {
    idToNodeMap[person.id] = {
      name: person.name,
    };
  });

  data.forEach((person) => {
    if (person.parent) {
      idToNodeMap[person.parent].children = idToNodeMap[person.parent].children || [];
      idToNodeMap[person.parent].children.push(idToNodeMap[person.id]);
    } else {
      treeData.children.push(idToNodeMap[person.id]);
    }
  });

  return [treeData];
};

// Создание React-компонента для генеалогического древа
const GenealogyTree = () => {
  const treeData = transformData(genealogyData);

  return (
    <div className="genealogy-tree">
      <Tree data={treeData} orientation="vertical" translate={{ x: 200, y: 50 }} />
    </div>
  );
};

export default GenealogyTree;
