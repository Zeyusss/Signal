import { pattern, required, schema } from '@angular/forms/signals';
import { Changepassword } from './changepassword.interface';

export const changePasswordSchema = schema<Changepassword>((rootPath) => {
  required(rootPath.password, { message: 'This input is Required~!' }),
    required(rootPath.newPassword, { message: 'This input is Required~!' }),
    pattern(rootPath.newPassword, /^(?=.*[A-Z])(?=.*\d).{8,}$/, {
      message:
        'Password must be at least 8 characters, include one uppercase letter and one number',
    });
});
