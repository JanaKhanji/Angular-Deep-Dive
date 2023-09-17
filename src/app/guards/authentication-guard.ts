import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable()
export class PermissionsService {
  constructor(public router: Router) {}

  canActivate(): boolean {
    if (!user.isAuthenticated) {
      this.router.navigate(['/']);
    }
    return user.isAuthenticated;
  }
}

export const authenticationGuard: CanActivateFn = (): boolean => {
  return inject(PermissionsService).canActivate();
};

const user = {
  isAuthenticated: true,
};
