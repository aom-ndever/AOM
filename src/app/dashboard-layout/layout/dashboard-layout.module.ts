import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      //   { path: '', component: DashboardComponent, data: { title: 'Dashboard' } }
    ])
  ],
  declarations: [DashboardLayoutComponent,HeaderComponent,FooterComponent],
  exports: [DashboardLayoutComponent],
})
export class DashboardLayoutModule { }
