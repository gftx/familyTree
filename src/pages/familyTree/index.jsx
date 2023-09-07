import { styled } from '@mui/system';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'; // Импорт Link из React Router

const StyledTreeView = styled(TreeView)(() => ({
  flexGrow: 1,
  maxWidth: 400,
}));

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  '& .MuiTreeItem-content': {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '8px',
  },
  '& .MuiTreeItem-label': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .node-icon': {
    marginRight: theme.spacing(1),
  },
  // Добавляем стили для ссылок
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    width: '100%',
  },
}));

const FamilyTree = ({ familyData }) => {
  const renderTree = (nodes) => (
    <CustomTreeItem
      key={nodes.id}
      nodeId={nodes.id.toString()}
      label={
        <div className="MuiTreeItem-label">
          <span className="node-icon">
            {nodes.partner ? '🤝' : '👤'}
          </span>
          {/* Используем Link для создания ссылок */}
          <Link to={`/person/${nodes.id}`}>
            <Typography variant="body1">
              {nodes.name}
            </Typography>
          </Link>
          <Link to={`/person/${nodes.partnerId}`}>
            <Typography variant="body1">
              {nodes.partner ? ` (Партнер: ${nodes.partner})` : ''}
            </Typography>
          </Link>
        </div>
      }
    >
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </CustomTreeItem>
  );

  return (
    <StyledTreeView defaultCollapseIcon={<span>▼</span>} defaultExpandIcon={<span>►</span>}>
      {familyData.map((person) => renderTree(person))}
    </StyledTreeView>
  );
};

export default FamilyTree;
