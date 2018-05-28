import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(post: any): string {
    return (post.preview) ? post.preview.images[0].source.url : 'https://picsum.photos/300/300/?random';
  }

}
