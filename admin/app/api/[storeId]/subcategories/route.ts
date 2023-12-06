import { Router } from 'express';
import { getSubcategories, getSubcategory, createSubcategory, updateSubcategory, deleteSubcategory } from './controller';

const router = Router({ mergeParams: true });

router.get('/', getSubcategories);
router.get('/:subcategoryId', getSubcategory);
router.post('/', createSubcategory);
router.put('/:subcategoryId', updateSubcategory);
router.delete('/:subcategoryId', deleteSubcategory);

export default router;