import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FromNowPipe } from "./pipes/from-now.pipe";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FromNowPipe,
  ],
  exports: [
    FromNowPipe
  ]
})
export class SharedModule {
}
