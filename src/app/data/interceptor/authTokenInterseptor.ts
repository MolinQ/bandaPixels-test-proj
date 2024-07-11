import {HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authTokenInterceptor : HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken()
  const auth = inject(AuthService)

  if (auth.isAuthenticated()) {
    req = req.clone({
      setHeaders: {
        Authorization: token,
      },
    });
  }

  return next(req);
}
