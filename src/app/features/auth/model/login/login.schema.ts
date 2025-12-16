import { email, pattern, required, schema } from '@angular/forms/signals';
import { Login } from './login.interface';

export const loginSchema = schema<Login>((rootPath) => {
  required(rootPath.email, { message: 'Email is Required' }),
    email(rootPath.email, { message: 'Email is incorrect' });
  required(rootPath.password, { message: 'Password is Required' }),
    pattern(rootPath.password, /^(?=.*[A-Z])(?=.*\d).{8,}$/, {
      message:
        'Password must be at least 8 characters, include one uppercase letter and one number',
    });
});
