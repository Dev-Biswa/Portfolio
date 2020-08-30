import { eInventoryStatus } from "../Enums/eInventoryStatus";

export class Product {
  name: string;
  price: number;
  image?: string;
  inventoryStatus?: eInventoryStatus;
}
