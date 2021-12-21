const {Schema, model} = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema (
    {

        reactionBody: {
            type: String,
            required: true,
            trim: true,
            maxlength: 280
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }        

    }
)

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;