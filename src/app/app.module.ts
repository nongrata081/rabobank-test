import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ComponentsModule } from '../../projects/components/src/lib/components.module';
import { HttpClientModule } from '@angular/common/http';
import { FetchRecordsService } from '../../projects/components/src/lib/fetch-records/fetch-records.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'rabotest' }),
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatIconModule,
		RouterModule,
		MDBBootstrapModule.forRoot(),
		ComponentsModule,
		HttpClientModule
	],
	schemas: [NO_ERRORS_SCHEMA],
	providers: [FetchRecordsService],
	bootstrap: [AppComponent]
})
export class AppModule {}
