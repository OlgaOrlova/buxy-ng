import angular from "angular";
import template from "./tags.html";
import { buttonMoreModule } from "../button-more/button-more";
class TagsController {
  constructor() {
    this.tags = ["tag1", "tag2", "tag3"];
  }

  tagsItemClick() {}
}
export const tagsModule = angular
  .module("tags", ["ngMaterial", buttonMoreModule])
  .component("tags", {
    template,
    controller: TagsController
  }).name;