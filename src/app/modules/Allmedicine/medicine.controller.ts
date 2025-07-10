// controllers/medicine.controller.ts
import { Request, Response } from 'express';
import { MedicineService } from './medicine.service';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';

const createMedicine = catchAsync(async (req: Request, res: Response) => {
  const result = await MedicineService.createMedicine(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Medicine created successfully',
    data: result,
  });
});

const getAllMedicines = catchAsync(async (req: Request, res: Response) => {
  const result = await MedicineService.getAllNonExpiredMedicines();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All medicines fetched successfully',
    data: result,
  });
});
const updateMedicines = catchAsync(async (req: Request, res: Response) => {
  const { _id } = req.params;
  const payload = req.body;
  const result = await MedicineService.updateMedicineIntDB(_id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'update medicine successfully',
    data: result,
  });
});
const deleteMedicines = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await MedicineService.deleteMedicineImtoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'delete medicine successfully',
    data: result,
  });
});

const markExpiredMedicineController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MedicineService.markExpiredMedicines();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Expired medicines updated successfully',
      data: result,
    });
  },
);

export const MedicineController = {
  createMedicine,
  getAllMedicines,
  markExpiredMedicineController,
  updateMedicines,
  deleteMedicines,
};
