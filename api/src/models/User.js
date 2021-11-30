const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

const user = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        isProfessional: {
            type: Boolean,
            default: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isActive: { //verificación con correo personal
            type: Boolean,
            default: true
        },
        isVerified: { //Verificación de profesional
            type: Boolean,
            default: true 
        },
        googleAccount: { //Saber si se logueó con google
            type: Boolean,
            default: false
        },
        country: {
            type: Schema.Types.ObjectId, ref: 'countries'
        },
        state: {
            type: String
        },
        city: {
            type: String
        },
        birthdate: {
            type: Date,
        },
        img: {
            type: String
        },
        professionalRegistration: { //número de matrícula
            type: String,
            unique: false,
            required: false
        },
        regUrl: { //link de registro de título o certificado
            type: String
        },
        biography: {
            type: String
        },
        title: {
            type: String
        },
        institute: {
            type:String
        },
        cost: {
            type: Number
        },
        category: {
            type: Schema.Types.ObjectId, ref: 'categories'
        },
        degree: {
            type: String
        },
        bankAccount: {
            type: String
        },
        appointments: [{
            type: Schema.Types.ObjectId, ref: 'appointments'
        }],
        schedule: [{
            type: Schema.Types.ObjectId, ref: 'schedules'
        }],
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        },
        session: {
            type: Number,
            default: 0
        },
        invoiceAsProf: [{
            type: Schema.Types.ObjectId, ref: 'profInvoices'
        }],
        invoiceAsClient: [{
            type: Schema.Types.ObjectId, ref: 'clientInvoices'
        }],
        meetingUrl:{
            type: mongoose.SchemaTypes.Url
        },
        memberSince: {
        type:Date,
        default: new Date()
        }
    },
    { timestamp: true }
)

user.pre('save', function (next) {
    this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
    this.lastname = this.lastname.charAt(0).toUpperCase() + this.lastname.slice(1).toLowerCase();
    next();
});

const User = mongoose.model('users', user);

module.exports = User;
