// App.js
//
import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flower: {},
		};
		this.getFlower();
	}
	getFlower() {
		fetch("/flower")
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					flower: data,
				});
				console.log(data);
			});
	}
	render() {
		return (
			<div className="App">
				<div class=" bg-indigo-50">
					{/*<!-- Header -->*/}
					<header>
						<h1 class="bg-white py-4 text-center">
							<a href="/" class="text-xl font-bold text-gray-700 cursor-pointer">
								Carano - Car Tracking Services
							</a>
						</h1>

						<nav class="mt-6">
							<ul class="flex justify-center  items-center space-x-4">
								<li>
									<a href="/" class="text-md font-semibold text-gray-600 hover:text-gray-800">
										Home
									</a>
								</li>
								<li>
									<a href="/find-rentals" class="text-md font-semibold text-gray-600 hover:text-gray-800">
										Find Rentals
									</a>
								</li>
								<li>
									<a href="/car-tracker" class="text-md font-semibold text-gray-600 hover:text-gray-800">
										Car Tracker
									</a>
								</li>
								<li>
									<a href="/about" class="text-md font-semibold text-gray-600 hover:text-gray-800">
										About
									</a>
								</li>
							</ul>
						</nav>
					</header>
					{/*<section class="min-h-250 body-font text-gray-600 " /><section />*/}
					<div class="container mx-auto px-5 py-10">
						<div class="-m-4 flex flex-wrap">
							<div class="w-full p-4 md:w-1/2 lg:w-1/4">
								<a class="relative block h-48 overflow-hidden rounded">
									<img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/420x260" />
								</a>
								<div class="mt-4">
									<h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
									<h2 class="title-font text-lg font-medium text-gray-900">Toyota BZ4X</h2>
									<p class="mt-1">01/09/2022</p>
								</div>
							</div>
							<div class="w-full p-4 md:w-1/2 lg:w-1/4">
								<a class="relative block h-48 overflow-hidden rounded">
									<img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
								</a>
								<div class="mt-4">
									<h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
									<h2 class="title-font text-lg font-medium text-gray-900">Toyota Corolla</h2>
									<p class="mt-1">01/09/2022</p>
								</div>
							</div>
							<div class="w-full p-4 md:w-1/2 lg:w-1/4">
								<a class="relative block h-48 overflow-hidden rounded">
									<img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
								</a>
								<div class="mt-4">
									<h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
									<h2 class="title-font text-lg font-medium text-gray-900">Honda Civic</h2>
									<p class="mt-1">01/09/2022</p>
								</div>
							</div>
							<div class="w-full p-4 md:w-1/2 lg:w-1/4">
								<a class="relative block h-48 overflow-hidden rounded">
									<img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
								</a>
								<div class="mt-4">
									<h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
									<h2 class="title-font text-lg font-medium text-gray-900">Honda Accord</h2>
									<p class="mt-1">01/09/2022</p>
								</div>
							</div>
							<div class="w-full p-4 md:w-1/2 lg:w-1/4">
								<a class="relative block h-48 overflow-hidden rounded">
									<img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
								</a>
								<div class="mt-4">
									<h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
									<h2 class="title-font text-lg font-medium text-gray-900">Tesla Model 3</h2>
									<p class="mt-1">01/09/2022</p>
								</div>
							</div>
							<div class="w-full p-4 md:w-1/2 lg:w-1/4">
								<a class="relative block h-48 overflow-hidden rounded">
									<img alt="ecommerce" class="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
								</a>
								<div class="mt-4">
									<h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
									<h2 class="title-font text-lg font-medium text-gray-900">Chevy Malibu</h2>
									<p class="mt-1">01/09/2022</p>
								</div>
							</div>
						</div>
					</div>
					{/*<!-- Footer -->*/}
					<footer>
						<p class="text-center  py-4 bg-white">🚘 Non-stop Car rental Service</p>
					</footer>
				</div>
			</div>
		);
	}
}
export default App;
