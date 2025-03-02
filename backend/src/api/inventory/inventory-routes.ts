import { Hono } from 'hono';
import { getProductById, addItem, updateStock, deleteItem, getAllItems } from './inventory-controller';

const inventoryRoutes = new Hono();

// Define Routes
inventoryRoutes.post('/add', addItem);
inventoryRoutes.get('/items', getAllItems);
inventoryRoutes.get('/:id', getProductById);
inventoryRoutes.put('/update-stock/:id', updateStock);
inventoryRoutes.delete('/delete-item/:id', deleteItem);

export { inventoryRoutes };
