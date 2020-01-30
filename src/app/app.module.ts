import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { FilterService } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeGridModule, DropDownListModule],
  providers: [FilterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
