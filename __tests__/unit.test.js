// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('isPhoneNumber returns true for valid phone numbers - Test 1', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns true for valid phone numbers - Test 2', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns false for invalid phone numbers - Test 1', () => {
  expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber returns false for invalid phone numbers - Test 2', () => {
  expect(functions.isPhoneNumber('(123) 456-089')).toBe(false);
});

// Unit tests for isEmail
test('isEmail returns true for valid emails - Test 1', () => {
  expect(functions.isEmail('hiii@heyyyy.com')).toBe(true);
});

test('isEmail returns true for valid emails - Test 2', () => {
  expect(functions.isEmail('pchand@ucsd.edu')).toBe(true);
});

test('isEmail returns false for invalid emails - Test 1', () => {
  expect(functions.isEmail('hiii@heyyyy')).toBe(false);
});

test('isEmail returns false for invalid emails - Test 2', () => {
  expect(functions.isEmail('pchand.ucsd')).toBe(false);
});

// Unit tests for isStrongPassword
test('isStrongPassword returns true for strong passwords - Test 1', () => {
  expect(functions.isStrongPassword('Abcd1234')).toBe(true);
});

test('isStrongPassword returns true for strong passwords - Test 2', () => {
  expect(functions.isStrongPassword('Passes_123')).toBe(true);
});

test('isStrongPassword returns false for weak passwords - Test 1', () => {
  expect(functions.isStrongPassword('ab')).toBe(false);
});

test('isStrongPassword returns false for weak passwords - Test 2', () => {
  expect(functions.isStrongPassword('1234')).toBe(false);
});

// Unit tests for isDate
test('isDate returns true for valid dates - Test 1', () => {
  expect(functions.isDate('01/01/2022')).toBe(true);
});

test('isDate returns true for valid dates - Test 2', () => {
  expect(functions.isDate('01/18/2023')).toBe(true);
});

test('isDate returns false for invalid dates - Test 1', () => {
  expect(functions.isDate('12/01/20222')).toBe(false);
});

test('isDate returns false for invalid dates - Test 2', () => {
  expect(functions.isDate('2022/01/01')).toBe(false);
});

// Unit tests for isHexColor
test('isHexColor returns true for valid hex colors - Test 1', () => {
  expect(functions.isHexColor('#FF0000')).toBe(true);
});

test('isHexColor returns true for valid hex colors - Test 2', () => {
  expect(functions.isHexColor('#ABC123')).toBe(true);
});

test('isHexColor returns false for invalid hex colors - Test 1', () => {
  expect(functions.isHexColor('nothex')).toBe(false);
});

test('isHexColor returns false for invalid hex colors - Test 2', () => {
  expect(functions.isHexColor('?89723')).toBe(false);
});
