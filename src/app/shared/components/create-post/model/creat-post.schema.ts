import { minLength, required, schema } from '@angular/forms/signals';
import { CreatePost } from './create-post.interface';

export const creatPostSchema = schema<CreatePost>((rootPath) => {
  required(rootPath.content, { message: 'Content Required' }),
    minLength(rootPath.content, 50, { message: 'Content must be atleast 50 characters.' });
});
