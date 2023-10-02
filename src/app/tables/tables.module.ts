import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TableshomeComponent } from './tableshome/tableshome.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { CertificateComponent } from './certificate/certificate.component';
import { LanguageComponent } from './language/language.component';
import { SchoolComponent } from './school/school.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [TableshomeComponent, TableComponent, CertificateComponent, LanguageComponent, SchoolComponent, TabsComponent],
  imports: [CommonModule, TablesRoutingModule, SharedModule],
})
export class TablesModule {}
