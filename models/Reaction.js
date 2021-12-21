const {Schema, Types} = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema (
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
        },

        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        }

    }
)

module.exports = reactionSchema;