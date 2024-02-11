const mongoose=require("mongoose")

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})


// Schema for the taxpayer object
const taxpayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    SSN: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    email: {
        type: String
    }
});
// Schema for the spouse object
const spouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    SSN: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    email: {
        type: String
    }
});
// Schema for the address object
const addressSchema = new mongoose.Schema({
    streetNo: {
        type: String,
    },
    city: {
        type: String,
    },
    zip: {
        type: String,
    },
    county: {
        type: String
    },
    state: {
        type: String,
    },
    homePhone: {
        type: String
    }
});
const additionalQuestionsSchema = new mongoose.Schema({
    question1: {
        type: String,
    },
    question2a: 
    {
        type: String,
    },
    question2b: {
        type: String,
    },
    question3: {
        type: String,
    },
    question4: {
        type: String,
    },
    question5: {
        type: String,
    }
});
const dependentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    relationship: {
        type: String,
    },
    dob: {
        type: Date,
    },
    ssn: {
        type: String
    },
    residentStatus: {
        type: String
    },
    monthsLivedWithYou: {
        type: Number
    },
    disabled: {
        type: Boolean
    }
});

const bankDetailsSchema = new mongoose.Schema({
    bankName: {
        type: String,
    },
    accountType: {
        type: String,
    },
    routingNumber: {
        type: String,
    },
    accountNumber: {
        type: String,
    },
    hasForeignAccounts: {
        type: Boolean,
    }
});
// incomplete schema for the form object
// we need to add the rest of the fields
const formSchema=new mongoose.Schema({
    taxyear:{
        type:String,
    },
    taxpayer:{
        type:taxpayerSchema,
    },
    spouse:{
        type:spouseSchema,
    },
    address:{
        type:addressSchema,
    } ,
    additonal:{
        type:additionalQuestionsSchema
    },
    dependents: [dependentSchema] // Array of dependent objects
    ,
    bankdetail :{
        type:bankDetailsSchema,
    }
})





const FormCollection=new mongoose.model('FormCollection',formSchema)
module.exports=FormCollection