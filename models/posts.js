
const mongoose = require('mongoose');
let id = new ObjectID();

const blogSchema = new schema({
    _id: {
           type: id,
        default: id.toString()
       },
       title: { type: String, required: false },
       description: { type: String, required: true },
       tag: { type: String, required: true },
       author: { type: String, required: true },
       createdAt: { type: Date, required: true, default:Date.now },
       updatedAt:   { type: Date, default: Date.now },
       publishedAt:{type: Date},
   
       state: { type: String, 
       default: 'draft'},
       user_id:{type:mongoose.Schema.Types.String,
           ref:"users"
           },
       read_count: { type: Number, required: true, default: 0 },
       reading_time: { type: Number },
       body:{type:String, required: false}
   
   })