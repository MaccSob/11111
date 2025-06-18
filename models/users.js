
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },    password: { type: String, required: true },
    profilePicture: { type: String }


    
})