import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvedoresComponent } from './components/provedores/provedores.component';

const routes: Routes = [
  { path: '', component: ProvedoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
