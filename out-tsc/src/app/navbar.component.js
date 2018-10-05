var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = 'Songs I Like';
    }
    NavbarComponent = __decorate([
        Component({
            selector: 'app-navbar',
            template: "\n    <div class=\"container\">\n      <nav class=\"navbar navbar-fixed-top\">\n        <div class=\"navbar-header\">\n          <h1 class=\"navbar-brand\">{{title}}</h1>\n        </div>\n        <div id=\"navbar\">\n          <ul class=\"navbar list-inline\">\n            <li class=\"list-inline-item\"><a routerLink=\"\">Songs</a></li>\n            <li class=\"list-inline-item\"><a routerLink=\"categories\">Categories</a></li>\n            <li class=\"list-inline-item\"><a routerLink=\"about\">About</a></li>\n            <li class=\"list-inline-item\"><a>Search</a></li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  "
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map