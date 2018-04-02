import angular from "angular";
import template from "./app.html";

import ngMaterial from "angular-material";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";

import { transactionDialogModule } from "../transaction-dialog/transaction-dialog";

export class AppController {
  handleAddTransactionClick(event) {
    this.transactionDialogOpen = { event: event };
  }
}

export const appModule = angular
  .module("appModule", [ngMaterial, ngAnimate, ngAria, transactionDialogModule])
  .component("app", {
    template,
    controller: AppController
  }).name;
