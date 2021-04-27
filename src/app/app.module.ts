import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AccountComponent } from "./account/account.component";
import { NewAccountComponent } from "./new-account/new-account.component";
import { AccountsService } from "./account.service";
import { LogginService } from "./logging.service";

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AccountsService, LogginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
