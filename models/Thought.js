const {Schema, model} = require('mongoose');
const moment = require('moment');

// const ReactionSchema = new Schema (
//     {

//         reactionBody: {
//             type: String,
//             required: true,
//             trim: true,
//             maxlength: 280
//         },

//         username: {
//             type: String,
//             required: true,
//         },

//         createdAt: {
//             type: Date,
//             default: Date.now,
//             get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
//         }        

//     }
// )

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

        reactions: ['Reaction']
    }
)

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;