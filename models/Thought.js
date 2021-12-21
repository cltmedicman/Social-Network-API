const {Schema, model} = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },

        username: {
            type: String,
            required: true,
            ref: 'User'
        },

        reactions: [reactionSchema]
    }
)

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;