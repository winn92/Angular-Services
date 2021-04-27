import { Injectable } from "@angular/core";
import { LogginService } from "./logging.service";

@Injectable()
export class AccountsService {
  constructor(private logginService: LogginService) {}
  accounts = [
    {
      name: "Master Account",
      status: "active",
    },
    {
      name: "Testaccount",
      status: "inactive",
    },
    {
      name: "Hidden Account",
      status: "unknown",
    },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.logginService.logStatusChange(status);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logginService.logStatusChange(status);
  }
}
