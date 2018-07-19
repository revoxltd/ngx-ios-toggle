import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IosToggleModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, IosToggleModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
