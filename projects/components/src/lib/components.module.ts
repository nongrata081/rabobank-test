import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FooterComponent } from './footer/footer.component';
import { InvalidRecordsComponent } from './invalid-records/invalid-records.component';
import { MatTableModule } from '@angular/material';
import { FetchRecordsService } from './fetch-records/fetch-records.service';

@NgModule({
	imports: [MDBBootstrapModule.forRoot(), MatTableModule],
	declarations: [HeaderComponent, FooterComponent, InvalidRecordsComponent],
	exports: [
		HeaderComponent,
		FooterComponent,
		InvalidRecordsComponent,
		MatTableModule
	],
	providers: [FetchRecordsService]
})
export class ComponentsModule {}
