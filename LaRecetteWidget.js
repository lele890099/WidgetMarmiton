class LaRecetteWidget extends Widget {

	
	constructor(id, app) {

			super(id, LaRecetteModel, LaRecetteView, LaRecetteController, app);

		}


	
	setUp() {

			super.setUp();

			this.header = true;

			this.footer = true;

			this.sizeX = 1;
	
			this.sizeY = 1;

			this.radius = 15;

		}


	
	async ready() {

			super.ready();

			

		}

}



class LaRecetteModel extends WidgetModel {

	
	constructor() {

			super();

		}


	
	setUp() {

			super.setUp();

		
}


}



class LaRecetteView extends WidgetView {

	
	constructor() {

			super();

		}

	
	
		setUp() {

			super.setUp();

		
}


	
		draw() {

			super.draw();

			this.link = HH.create("a");

			SS.style(this.link, {"fontSize": "10px", "textDecoration": "none"});

			this.stage.appendChild(this.link);


			

		}


	
	update(title, link) {

			this.link.innerHTML = title;

			HH.attr(this.link, {"href": "https://www.marmiton.org" + link, "target": "_blank"});

		}
	

}



class LaRecetteController extends WidgetController {

	
	constructor() {

			super();

		}


	
	setUp() {

			super.setUp();

		
}


	
	
		
		async load() {

			let result = await this.mvc.main.dom("https://marmiton.org");
			let domstr = _atob(result.response.dom);
	
		let parser = new DOMParser();

			let dom = parser.parseFromString(domstr, "text/html");
	
		let article = new xph().doc(dom).ctx(dom).craft('//*[@id="en-continu"]/div/ul/li[1]/a').firstResult;
			this.mvc.view.update(article.textContent, article.getAttribute("href"));

		}


}