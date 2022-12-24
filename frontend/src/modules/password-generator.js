const allowed = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>/?'
}

export const generatePassword = (length = 8, hasLowercase = true, hasUppercase = true, hasNumbers = true, hasSymbols = true) => {
  let chars = hasLowercase ? allowed.lowercase : ''
  chars += hasUppercase ? allowed.uppercase : ''
  chars += hasNumbers ? allowed.numbers : ''
  chars += hasSymbols ? allowed.symbols : ''
  return generatePasswordFromChars(length, chars)
}

const generatePasswordFromChars = (length, chars) => {
  let password = ''
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}