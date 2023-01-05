import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './usuarios/content/content.component';
import { Content1Component } from './usuarios/content1/content1.component';

const routes: Routes = [  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'content1',
    component: Content1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
