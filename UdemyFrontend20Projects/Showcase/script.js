const projects_container = document.querySelector('.projects');

// We use an async function so we can "await" the data from the JSON file
async function addProjects() {
	try {
		// Fetch the data from the local file
		const response = await fetch('./data.json');

		// Check if the file exists and is readable
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		// Loop through the data and build the HTML
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
		console.error("Could not load projects:", error);
		projects_container.innerHTML = `<p>Error loading projects. Please try again later.</p>`;
	}
}

// Call the function to execute
addProjects();
