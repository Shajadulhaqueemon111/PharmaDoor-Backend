/* eslint-disable @typescript-eslint/no-explicit-any */

import MedicineModle from '../Allmedicine/medicine.modle';
import EquipmentModel from '../equipments/equipments.module';

export const modelMapper: Record<string, any> = {
  medicine: MedicineModle,

  equipment: EquipmentModel,
  // future a add korte paren: diagnostic: DiagnosticModel, surgical: SurgicalModel
};
console.log('Medicine Model:', MedicineModle);
