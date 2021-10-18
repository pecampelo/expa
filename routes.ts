import Controller from "./controller";
import ServerController from "./serverController";

Controller.instances = [];

const main 	= 	new Controller('Main',			'R', 		'/',				ServerController, 	true);

export default Controller.instances;