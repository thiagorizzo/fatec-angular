import { CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ProdutoEditarCanActivateGuard implements CanActivate {
    
    constructor(private router : Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let id = +route.url[1].path;

        if(isNaN(id) || id < 1) {
            this.router.navigate(['/produtos']);
            return false;
        }

        return true;
    }
}