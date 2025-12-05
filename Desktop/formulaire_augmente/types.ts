export enum MissionType {
  CONTACT = 'CONTACT',
  DONATION = 'DONATION',
  VOLUNTEER = 'VOLUNTEER',
  INFO = 'INFO',
  NUIT_INFO = 'NUIT_INFO',
}

export interface BaseFormData {
  username: string;
  email: string;
}

export interface ContactData extends BaseFormData {
  subject: string;
  message: string;
}

export interface DonationData extends BaseFormData {
  amount: number;
  frequency: 'once' | 'monthly' | 'yearly';
  isAnonymous: boolean;
}

export interface VolunteerData extends BaseFormData {
  skills: string;
  availability: string;
  motivation: string;
}

export interface InfoData extends BaseFormData {
  topic: string;
  question: string;
}

// Union type for all possible form data
export type NexusFormData = ContactData | DonationData | VolunteerData | InfoData;

export interface SubmissionResult {
  success: boolean;
  message: string; // The AI generated echo
  data: NexusFormData;
  mission: MissionType;
  timestamp: string;
  year: number;
}