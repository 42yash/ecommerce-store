import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getSubcategories(req, res) {
    const { storeId } = req.params;
    const subcategories = await prisma.subcategory.findMany({ where: { storeId } });
    res.json(subcategories);
}

export async function getSubcategory(req, res) {
    const { storeId, subcategoryId } = req.params;
    const subcategory = await prisma.subcategory.findFirst({ where: { id: subcategoryId, storeId } });
    res.json(subcategory);
}

export async function createSubcategory(req, res) {
    const { storeId } = req.params;
    const newSubcategory = await prisma.subcategory.create({ data: { ...req.body, storeId } });
    res.json(newSubcategory);
}

export async function updateSubcategory(req, res) {
    const { storeId, subcategoryId } = req.params;
    const updatedSubcategory = await prisma.subcategory.update({ where: { id: subcategoryId, storeId }, data: req.body });
    res.json(updatedSubcategory);
}

export async function deleteSubcategory(req, res) {
    const { storeId, subcategoryId } = req.params;
    const deletedSubcategory = await prisma.subcategory.delete({ where: { id: subcategoryId, storeId } });
    res.json(deletedSubcategory);
}