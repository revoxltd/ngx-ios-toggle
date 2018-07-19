import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pgSwitchComponent } from './switch.component';

@NgModule({
  declarations: [pgSwitchComponent],
  imports: [CommonModule],
  exports: [pgSwitchComponent]
})
export class IosToggleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IosToggleModule
    };
  }
}
