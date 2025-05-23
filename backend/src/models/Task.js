const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { 
    type: String, 
    enum: ['active', 'review', 'completed', 'discarded'], 
    default: 'active' 
  },
  discardBy: String,
  discardReason: String,
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
