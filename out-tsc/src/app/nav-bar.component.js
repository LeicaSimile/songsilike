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
            template: "\n    <nav class=\"container navbar\">\n        <h1>{{title}}</h1>\n        <a>Songs</a>\n        <a>Categories</a>\n        <a>About</a>\n        <span>Search</span>\n    </nav>\n  "
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=nav-bar.component.js.map