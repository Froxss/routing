import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableshomeComponent } from './tableshome/tableshome.component';
import { CertificateComponent } from './certificate/certificate.component';
import { LanguageComponent } from './language/language.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
  {
    path: '',
    component: TableshomeComponent,
    children: [
      {
        path: '',
        component: CertificateComponent,
      },
      {
        path: 'language',
        component: LanguageComponent,
      },
      {
        path: 'school',
        component: SchoolComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}
