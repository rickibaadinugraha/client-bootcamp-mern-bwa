// 1. kita udh tau role accessnya apa aja
// 2. kita belum tau role accessnya apa aj

import { add } from "date-fns";

export const accessCategories = {
  add: ["organizer"],
  edit: ["organizer"],
  read: ["organizer"],
  delete: ["organizer"],
};

export const accessTalents = {
  add: ["organizer"],
  edit: ["organizer"],
  read: ["organizer"],
  delete: ["organizer"],
};

export const accessEvents = {
  add: ["organizer"],
  edit: ["organizer"],
  read: ["organizer"],
  delete: ["organizer"],
};

export const accessParticipant = {
  add: ["organizer"],
  edit: ["organizer"],
  read: ["organizer"],
  delete: ["organizer"],
};

export const accessPayments = {
  add: ["organizer"],
  edit: ["organizer"],
  read: ["organizer"],
  delete: ["organizer"],
};

export const accessOrders = {
  add: ["organizer", "admin", "owner"],
  edit: ["organizer", "admin", "owner"],
  read: ["organizer", "admin", "owner"],
  delete: ["organizer", "admin", "owner"],
};

export const accessOrganizers = {
  add: ["owner"],
  edit: ["owner"],
  read: ["owner"],
  delete: ["owner"],
};

export const accessAdmin = {
  add: ["organizer"],
  edit: ["organizer"],
  read: ["organizer"],
  delete: ["organizer"],
};
