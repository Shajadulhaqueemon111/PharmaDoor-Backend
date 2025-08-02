/* eslint-disable @typescript-eslint/no-explicit-any */

import MedicineModle from '../Allmedicine/medicine.modle';
import EquipmentModel from '../equipments/equipments.module';
import OfferProductModel from '../specialoffer/offer.modle';

export const modelMapper: Record<string, any> = {
  medicine: MedicineModle,

  equipment: EquipmentModel,
  product: OfferProductModel,
};
