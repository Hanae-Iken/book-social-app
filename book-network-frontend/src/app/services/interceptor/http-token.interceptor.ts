import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../token/token.service';

export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authUrls = ['/auth/login', '/auth/register', '/auth/activate-account'];
  const isAuthRequest = authUrls.some(url => req.url.includes(url));

  if (isAuthRequest) {
    return next(req); // Pas de token pour les routes d'authentification
  }

  const tokenService = inject(TokenService);
  const token = tokenService.token;

  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq);
  }

  return next(req);
};
