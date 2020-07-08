import mongoose from 'mongoose';
import gradeModels from './gradeModels.js';

const db = {};
db.mongoose = mongoose;
db.grades = gradeModels(mongoose);
db.url = process.env.MONGODB;

export { db };
