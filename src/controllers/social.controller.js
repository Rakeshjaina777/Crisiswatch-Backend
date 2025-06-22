// src/controllers/social.controller.js
import { SocialService } from "../services/social.service.js";

export const ingestSocial = async (req, res, next) => {
  try {
    const { platform, keyword } = req.body;
    const posts = await SocialService.ingest(platform, keyword);
    res.status(201).json(posts);
  } catch (err) {
    next(err);
  }
};

export const getSocialPosts = async (req, res, next) => {
  try {
    const posts = await SocialService.getAll();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};
