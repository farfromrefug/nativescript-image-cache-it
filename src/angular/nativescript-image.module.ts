import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular/element-registry';

import { ImgDirective, NSIMG_DIRECTIVES } from './nativescript-image-directives';
import { Img } from '@nativescript-community/ui-image';
export { ImgDirective };
@NgModule({
    declarations: [NSIMG_DIRECTIVES],
    exports: [NSIMG_DIRECTIVES],
})
export class TNSImageModule {}

registerElement('NSImg', () => Img);
