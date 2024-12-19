import m from "mithril";
import config from "./config.json";
var root = document.body;
root.classList.add("bg-gray-200");
import photo from "./photo.jpeg";
var Card = {
	view: function() {
		return m("div", {
			class:"bg-gray-50 rounded p-8 mt-20 flex flex-col justify-center items-center shadow-lg"
		},
		[
			m("img",{ class:"rounded w-20 flex", id:"photo", src : photo }),
			m("p", {class: "text-2xl font-bold text-center mt-3 tracking-wide"}, config.name ),
			m("p", {class: "text-center mt-3"}, config.carrier ),
			m("p", {class: "text-center mt-3"}, config.description ),
			m("button",{
				class:"bg-green-200 rounded w-full pt-2 pb-2 mt-2 border-2 border-green-300"
			},"Whatsapp"),
			m("button",{
				class:"bg-indigo-700 rounded w-full pt-2 pb-2 mt-2 border-2 border-indigo-800 text-gray-100"
			},"Telegram"),
			m("button",{
				class:"bg-gray-200 rounded w-full pt-2 pb-2 mt-2 border-2 border-gray-300"
			},"Github"),
			m("button",{
				class:"bg-blue-200 rounded w-full pt-2 pb-2 mt-2 border-2 border-blue-300"
			},"Contacto"),			
		])
	}
}
m.mount(root,Card);