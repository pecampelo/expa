import Controller from "./controller";

type Route = {
	endpoint: string,
	method: string,
	handler: () => unknown;
}

const wantedRoute: Route = {
	endpoint: '',
	method: '',
	handler: () => {},
}

class Router {
	constructor() {
		this.routes = [];
		this.controllers = [];
	}
	
	routes: Route[];
	controllers: Controller[];
	
	use(routes: Route[]) {
		this.routes = routes;
	}

	async search(pathname: string, method: string): Promise<Route[] | undefined> {
		if (this.routes) {

			try {
				const route: Route | undefined = this.routes.find((route) => route.endpoint === pathname);

				if (route === undefined) {
					return [wantedRoute];
				} else {
					return [route];
				}

			} catch (err: any) {
				
				if (err.message === 'Cannot read property \'endpoints\' of undefined') {

					return [wantedRoute];
					
				}
				
				console.log(err.message);
			};
			
		}	else {
			return this.routes;
		}
	}
}

export default Router;