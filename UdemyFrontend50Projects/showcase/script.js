import data from './data.json' assert { type: 'json' };

const projects_container = document.querySelector('.projects');

function addProjects() {
	data.forEach(project => {
		const p = document.createElement('div');
		p.classList.add('card');
		p.innerHTML = `
			<div class="details">
				<a href="${project.url}" target="_blank">${project.title}</a>
				<p>${project.description}</p>
			</div>
			<div class="img-container">
				<img src="${project.src}" alt="${project.alt}">
			</div>
		`;
	
		projects_container.appendChild(p);
	});
}

addProjects();
