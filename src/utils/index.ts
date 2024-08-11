import { v4 as uuidv4 } from "uuid";
import { DESCRIPTIONS, NAMES } from "../constants";

export const generateRandomUsersList = () => {
  return Array.from({ length: 1000 }).map((_) => ({
    name: NAMES[Math.floor(Math.random() * 30)],
    description: DESCRIPTIONS[Math.floor(Math.random() * 30)],
    id: uuidv4(),
  }));
};
