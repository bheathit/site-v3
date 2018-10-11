import {MatButtonModule, MatCheckboxModule, MatCardHeader, MatGridListModule} from "@angular/material";
import { NgModule } from "@angular/core";


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatCardHeader, MatGridListModule],
    exports: [MatButtonModule, MatCheckboxModule, MatCardHeader, MatGridListModule],
})
export class MyMaterialModule {}