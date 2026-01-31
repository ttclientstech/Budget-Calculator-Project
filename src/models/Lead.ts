import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILead extends Document {
    name: string;
    email: string;
    phone?: string;
    projectDescription: string;
    domain?: string;
    country: string;
    source?: string;
    status: string; // 'New', 'Contacted', 'Converted', 'Lost'
    createdAt: Date;
    updatedAt: Date;
}

const LeadSchema: Schema = new Schema(
    {
        name: { type: String, required: [true, 'Please provide a name'] },
        email: { type: String, required: [true, 'Please provide an email'] },
        phone: { type: String },
        projectDescription: { type: String, required: true },
        domain: { type: String },
        country: { type: String, required: true },
        source: { type: String, default: 'Website Funnel' },
        status: {
            type: String,
            enum: ['New', 'Contacted', 'Converted', 'Lost'],
            default: 'New',
        },
    },
    {
        timestamps: true,
    }
);

// Prevent overwriting the model if it's already compiled
const Lead: Model<ILead> = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);

export default Lead;
