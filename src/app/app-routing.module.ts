import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'xmas_app',
    loadChildren: () => import('./xmas-app/xmas.module').then(m => m.XmasModule)
  },
  {
    path:'',
    redirectTo:'xmas_app',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
