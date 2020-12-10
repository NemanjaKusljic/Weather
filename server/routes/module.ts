import { Server } from '../core/server';
import { RoutingModule } from '../core/express/routing-module';

import { AuthRouter } from './administration/auth';
import { UserRouter } from './administration/users';
import { CityRouter } from './administration/cities';

export class RoutesModule extends RoutingModule {
  authRouter: AuthRouter;
  userRouter: UserRouter;
  cityRouter: CityRouter

  constructor(server: Server) {
    super(server, '/api');

    this.authRouter = new AuthRouter(this.server);
    this.userRouter = new UserRouter(this.server);
    this.cityRouter = new CityRouter(this.server);
  }

  build() {
    this.server.app.use(`${ this.baseUrl }/auth`, this.authRouter.build());
    this.server.app.use(`${ this.baseUrl }/users`, this.userRouter.build());
    this.server.app.use(`${ this.baseUrl }/cities`, this.cityRouter.build());
  }
}
