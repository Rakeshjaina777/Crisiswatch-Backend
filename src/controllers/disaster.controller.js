// src/controllers/disaster.controller.js
import { DisasterService } from "../services/disaster.service.js";

export const createDisaster = async (req, res, next) => {
  try {
    const result = await DisasterService.createDisaster(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const getDisasters = async (req, res, next) => {
  try {
    const result = await DisasterService.getAllDisasters();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getDisasterById = async (req, res, next) => {
  try {
    const result = await DisasterService.getDisasterById(req.params.id);
    if (!result) return res.status(404).json({ message: "Not found" });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteDisaster = async (req, res, next) => {
  try {
    await DisasterService.deleteDisaster(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
