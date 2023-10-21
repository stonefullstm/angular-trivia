import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodetext'
})
export class DecodetextPipe implements PipeTransform {

  transform(str: string): string {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

}
