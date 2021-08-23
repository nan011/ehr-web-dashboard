import { useReducer, useEffect } from "react";

import { isNone } from "@helpers/utilities";

const FORM_MANIPULATOR_TYPES = {
  UDPATE: "update",
};

const FIELD_PATTERNS = {
  TEXT: /^[a-zA-Z ]+$/,
  TEXTAREA: /^[a-zA-Z .]+$/,
  EMAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
  PASSWORD: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
  NUMBER: /^[0-9]+$/,
  PHONE: /^[0-9]{12,14}$/,
  FILE: /^.*$/,
  ANY: () => true,
  DATE: (value) => value instanceof Date,
};

function validate(form) {
  const newForm = { ...form };
  newForm.isValid = Object.keys(newForm.fields).reduce((isValid, label) => {
    const field = newForm.fields[label];
    const value = field.value;
    const validators = field.validators;

    field.isValid = validators.reduce((isValid, validator) => {
      return isValid && validator(value);
    }, true);

    return isValid && field.isValid;
  }, true);

  return newForm;
}

function formManipulator(form, action) {
  const newForm = { ...form };
  if (!isNone(action)) {
    switch (action.type) {
      case FORM_MANIPULATOR_TYPES.UPDATE:
        newForm.fields[action.field.label].value = action.field.value;
        break;
      default:
        break;
    }
  }

  return validate(newForm);
}

export default function useForm(fields) {
  const [form, dispatchForm] = useReducer(formManipulator, {
    isValid: false,
    fields: fields.reduce((oldFields, field) => {
      const newFields = { ...oldFields };
      const label = field.label;
      const value = "";
      const type = field.type;

      let validators = (field.validators || []).map((validator) => {
        if (!isNone(validator)) {
          validator = validator;
        }

        return validator;
      }, []);

      if (
        !isNone(type) &&
        Object.keys(FIELD_PATTERNS).includes(type.toUpperCase())
      ) {
        const patternOrFunction = FIELD_PATTERNS[type.toUpperCase()];
        let typeValidator;
        if (patternOrFunction instanceof RegExp) {
          typeValidator = createRegexValidator(patternOrFunction);
        } else {
          typeValidator = patternOrFunction;
        }

        validators = [...validators, typeValidator];
      }

      newFields[label] = {
        label,
        validators: validators,
        isValid: false,
        value,
      };
      return newFields;
    }, {}),
  });

  // Validate a form at the beginning
  useEffect(() => {
    dispatchForm();
  }, []);

  return [
    form,
    (label, value) =>
      dispatchForm({
        type: FORM_MANIPULATOR_TYPES.UPDATE,
        field: { label, value },
      }),
  ];
}

export function createRegexValidator(regex) {
  return (value) => regex.test(value);
}
