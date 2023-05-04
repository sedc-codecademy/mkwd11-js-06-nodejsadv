import { ValidationOptions, registerDecorator } from "class-validator";

export function IsNotEmptyArray(validationOptions?: ValidationOptions) {
  return (object: unknown, propertyName: string): void => {
    registerDecorator({
      name: "IsNotEmptyArray",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: unknown): boolean {
          return Array.isArray(value) && value.length > 0;

          // // check if it's an array
          // if (!Array.isArray(value)) {
          //     //if not an array, return false
          //     return false;
          // }

          // // check if array has items inside
          // if (value.length > 0) {
          //     return true
          // } else {
          //     return false
          // }
        },
        defaultMessage(): string {
          return `Array ${propertyName} should not be empty`;
        },
      },
    });
  };
}
