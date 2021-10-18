type Route = {
	endpoint: string,
	method: string,
	handler: () => unknown;
}

type ChildController = {
	index: () => {};
	show: () => {};
	create:  () => {};
	update:  () => {};
	delete:  () => {};
}
