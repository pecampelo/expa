type Route = {
	endpoint: string,
	method: string,
	handler?: () => unknown;
}

type RouteController = {
	index?: () => {};
	show?: () => {};
	create?:  () => {};
	update?:  () => {};
	delete?:  () => {};
}
class Controller {
	
	static instances: Controller[];
	
	constructor(label: string, methods: string, endpoint: string, routeController: RouteController, main: boolean) {
		this.label = label;
		let string = '';
		if (typeof methods === 'string' && methods.length < 5 && methods.length > 0) {
			const methodArray = methods.split('');
			methodArray.forEach((letter) => {
				if (['c', 'r', 'u', 'd'].includes(letter.toLowerCase())) {
					string += letter.toUpperCase();
				}
				return letter;
			});
		} else {
			methods === undefined;
		}
		
		this.methods = string;
		
		
		this.endpoint = endpoint;
		
		this.routeController = routeController;
		
		this.id = '/:id';
		
		this.name = '/:name';
		
		if (main) {
			this.id = '';
			this.name = '';
		}
		
		this.routes = [
			{
				'endpoint': `${this.endpoint}`,
				'method': 'GET',
				'handler': this.routeController.index,
			},
			{
				'endpoint': `${this.endpoint}${this.id}`,
				'method': 'GET',
				'handler': this.routeController.show,
			},
			{
				'endpoint': `${this.endpoint}${this.name}`,
				'method': 'GET',
				'handler': this.routeController.show,
			},
			{
				'endpoint': `${this.endpoint}`,
				'method': 'POST',
				'handler': this.routeController.create,
			},
			{
				'endpoint': `${this.endpoint}${this.id}`,
				'method': 'PUT',
				'handler': this.routeController.update,
			},
			{
				'endpoint': `${this.endpoint}${this.id}`,
				'method': 'DELETE',
				'handler': this.routeController.delete,
			},
		];
		
		delete this.id;
		delete this.name;
		
    Controller.instances.push(this);   
	}
	
	label: string;
	endpoint: string;
	methods: string;
	routeController: RouteController;
	main: boolean = false;
	id?: string;
	name?: string;
	routes: Route[];
}

export default Controller;
