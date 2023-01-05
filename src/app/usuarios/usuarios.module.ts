import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { Content1Component } from './content1/content1.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    ContentComponent,
    Content1Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    ContentComponent,
    Content1Component
  ]
})
export class UsuariosModule { }
