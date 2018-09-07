import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { CarouselService } from './carousel.service';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    NgxCarouselModule,
    RouterModule,
    LazyLoadImageModule
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
  providers : [CarouselService]
})
export class CarouselModule {

}
