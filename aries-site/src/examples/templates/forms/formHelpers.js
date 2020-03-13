export const emailMask = [
  {
    regexp: /^[\w\-_.]+$/,
    placeholder: 'jane.smith',
  },
  { fixed: '@' },
  {
    regexp: /^[\w]+$/,
    placeholder: 'hpe',
  },
  { fixed: '.' },
  {
    regexp: /^[\w]+$/,
    placeholder: 'com',
  },
];

const currentDate = new Date();
export const dateValidation = [
  date => {
    const expireDate = date.split('/').reverse();
    expireDate.splice(0, 0, '20');
    const newYear = expireDate[0] + expireDate[1];
    expireDate.splice(0, 2, newYear);
    const expires = new Date(expireDate);
    if (expires <= currentDate)
      return { message: 'invalid date', status: 'error' };
    return undefined;
  },
];

export const dateMask = [
  {
    length: [1, 2],
    options: Array.from({ length: 12 }, (v, k) => k + 1),
    regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
    placeholder: 'MM',
  },
  { fixed: '/' },
  {
    length: 2,
    options: Array.from({ length: 6 }, (v, k) => 20 + k),
    regexp: /^2[0,1-5]$|^2?$/,
    placeholder: 'YY',
  },
];

export const cvvMask = [
  {
    length: 3,
    regexp: /^[0-9]{1,3}$/,
    placeholder: '123',
  },
];

const creditCardRegExp = /^[0-9]{1,4}$/;

export const creditCardMask = [
  {
    length: 4,
    regexp: creditCardRegExp,
    placeholder: '0000',
  },
  { fixed: ' ' },
  {
    length: 4,
    regexp: creditCardRegExp,
    placeholder: '0000',
  },
  { fixed: ' ' },
  {
    length: 4,
    regexp: creditCardRegExp,
    placeholder: '0000',
  },
  { fixed: ' ' },
  {
    length: 4,
    regexp: creditCardRegExp,
    placeholder: '0000',
  },
];

export const emailValidation = [
  {
    regexp: new RegExp('[^@ \\t\\r\\n]+@'),
    message: 'Missing an @?',
    status: 'info',
  },
  {
    regexp: new RegExp('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+'),
    message: 'Missing an .?',
    status: 'info',
  },
  {
    regexp: new RegExp('[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+'),
    message: "Email address doesn't look quite right",
    status: 'error',
  },
];

export const passwordRulesStrong = [
  {
    regexp: new RegExp('(?=.*?[A-Z])'),
    message: 'At least one uppercase English letter',
    status: 'error',
  },
  {
    regexp: new RegExp('(?=.*?[a-z])'),
    message: 'At least one lowercase English letter',
    status: 'error',
  },
  {
    regexp: new RegExp('(?=.*?[0-9])'),
    message: 'At least one number',
    status: 'error',
  },
  {
    regexp: new RegExp('(?=.*?[#?!@$ %^&*-])'),
    message: 'At least one special character or space',
    status: 'error',
  },
  {
    regexp: new RegExp('.{8,}'),
    message: 'At least eight characters',
    status: 'error',
  },
];

export const passwordRulesWeak = [
  {
    regexp: new RegExp('.{4,}'),
    message: 'At least four characters',
    status: 'error',
  },
  {
    regexp: new RegExp('(?=.*?[#?!@$ %^&*-])'),
    message: 'At least one special character or space',
    status: 'error',
  },
];