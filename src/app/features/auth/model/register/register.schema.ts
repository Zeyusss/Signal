import { customError, email, pattern, required, schema, validate } from '@angular/forms/signals';
import { Register } from './register.interface';

export const registerSchema = schema<Register>((rootPath) => {
  required(rootPath.name, { message: 'Name is required!' }),
    required(rootPath.email, { message: 'Email is required!' }),
    required(rootPath.gender, { message: 'Gender is required!' }),
    required(rootPath.password, { message: 'Password is required!' }),
    required(rootPath.rePassword, { message: 'rePassword is required!' }),
    email(rootPath.email, { message: 'Email is incorrect' }),
    pattern(rootPath.password, /^(?=.*[A-Z])(?=.*\d).{8,}$/, {
      message:
        'Password must be at least 8 characters, include one uppercase letter and one number',
    }),
    validate(rootPath.rePassword, (ctx) => {
      const password: string = ctx.valueOf(rootPath.password);
      const rePassword: string = ctx.value();

      return password === rePassword
        ? undefined
        : customError({
            message: 'Password do not match',
            kind: 'passwordMismatch',
          });
    });
});
