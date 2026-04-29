const projects_container = document.querySelector('.projects');

async function addProjects() {
		try {
				const response = await fetch('./data.json');
				if (!response.ok) throw new Error('Could not fetch data');

				const data = await response.json();

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
		} catch (error) {
				console.error('Error loading projects:', error);
		}
}

addProjects();
