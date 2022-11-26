import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleofertaComponent } from './detalleoferta/detalleoferta.component';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';
import { OfertasAplicadasComponent } from './ofertas-aplicadas/ofertas-aplicadas.component';

const routes: Routes = [
  { path: '', component: ListOfertasComponent },

  { path: 'ofertasAplicadas', component: OfertasAplicadasComponent },

  {path:'oferta/detalle/:id',component: DetalleofertaComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasRoutingModule { }
