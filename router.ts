import Controller from "./controller";

class Router {
	constructor() {
		this.routes;
		this.controllers;

	}
	
	routes: Route[];
	controllers: Controller[];

	use(routes: Route[]) {
		this.routes = routes;
	}

	async search(pathname: string, method: string): Promise<Route | Route[]> {
		if (this.routes) {

			try {

				const routes: any= this.routes.find((route) => route.endpoint === pathname);
				const route: Route[] = routes.endpoints.find((endpoint) => endpoint.method === method);
				return route;

			} catch (err: any) {

				if (err.message === 'Cannot read property \'endpoints\' of undefined') {
					return undefined;
				}
				console.log(err.message);

			}

		}	else {
			return this.routes;
		}
	}
}

export default new Router();