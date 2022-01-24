import { Lesson1Component } from './components/courses/python/lesson1/lesson1.component';
import { HomeComponent } from './components/home/home.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'programacao', component: ProgramacaoComponent},
  {path: 'programacao/python/lesson1', component: Lesson1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
