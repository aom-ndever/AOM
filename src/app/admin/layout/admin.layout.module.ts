import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin_layout.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      //   { path: '', component: DashboardComponent, data: { title: 'Dashboard' } }
    ])
  ],
  declarations: [AdminLayoutComponent,SidebarComponent],
  exports: [AdminLayoutComponent],
})
export class LayoutModule { }
