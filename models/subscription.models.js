import {mongoose} from 'mongoose'

const subscriptionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, ' subscriptionName is required'],
        trim: true,
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [100, 'Name must be at most 100 characters long']
    },
    price:{
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
    currency:{
        type: String,
        enum: ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'], // Add more currencies as needed
        default: 'USD'
    },
    frequency:{
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
        default: 'monthly'
    },
    category:{
        type: String,
        enum: ['entertainment', 'utilities', 'software', 'education', 'health', 'other'], // Add more categories as needed
        default: 'other',
        required: [true, 'Category is required']
    },
    paymentMethod:{
        type: String,
        required: [true, 'Payment method is required'],
        trim: true,
    },
    status:{
        type: String,
        enum: ['active', 'expired', 'cancelled'],
        default: 'active'
    },
    startDate:{
        type: Date,
        required: [true, 'Start date is required'],
        validate: {
            validator: function(value) {
                return value <= new Date();
            },
            message: 'Start date cannot be in the future'
        }
    },
    renewalDate:{
        type: Date,
        validate: {
            validator: function(value) {
                return value >= this.startDate;
            },
            message: 'Renewal date cannot be before the start date'
        }
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required'],
        index: true
    }
},options = {timestamps: true});
//auto calculate renewalDate based on frequency and startDate if not provided
subscriptionSchema.pre('save', function(next) {
    if (!this.renewalDate) {
        const renewalPeriods={
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
    //auto update status
    if(this.renewalDate < new Date()){
        this.status = 'expired';
    }
    next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;