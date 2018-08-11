import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { CarouselService } from './carousel.service';

@NgModule({
  imports: [
    CommonModule,
    NgxCarouselModule
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  providers : [CarouselService]
})
export class CarouselModule {

}
