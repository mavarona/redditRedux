import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(post: any): string {
    return (post.selftext) ? post.selftext : post.title;
  }

}
