import crypto from 'crypto'


export const hashPassword = (string: string) => {
  return crypto.createHash('sha256').update(string).digest('hex');
};

export const toStringDate = (date: Date) : string => {
  return date.toISOString().split('.')[0].replace(/[^\d]/gi,'')
};