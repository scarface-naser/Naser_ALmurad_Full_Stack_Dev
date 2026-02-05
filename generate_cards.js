document.addEventListener('DOMContentLoaded', () => {
  // Make sure portfolioData exists
  if (typeof portfolioData === 'undefined') {
    console.warn('portfolioData is missing');
    return;
  }

  // Render Projects
  const projectContainer = document.querySelector('.main-container');
  if (projectContainer && portfolioData.projects) {
    // Remove ONLY existing project cards (anchors)
    projectContainer.querySelectorAll('a').forEach(el => el.remove());

    portfolioData.projects.forEach(project => {
      const cardLink = document.createElement('a');
      cardLink.href = `project.html?slug=${project.slug}`;

      cardLink.innerHTML = `
        <div class="card-container">
          <div class="inner-container">
            <div class="border-outer">
              <div class="main-card"></div>
            </div>
            <div class="glow-layer-1"></div>
            <div class="glow-layer-2"></div>
          </div>

          <div class="overlay-1"></div>
          <div class="overlay-2"></div>
          <div class="background-glow"></div>

          <!-- card content -->
          <div class="content-container">
            <div class="project-video">
              <img
                src="${project.image}"
                alt="${project.title}"
                decoding="async"
                style="
                  padding-top: 10px;
                  border-radius: 24px;
                  width: 100%;
                  max-height: 180px;
                  object-fit: contain;
                  background: rgba(255,255,255,0.05);
                "
              />
            </div>

            <div class="project-info">
              <p class="project-category">${project.tags?.[0] || 'Project'}</p>
              <strong class="project-title">
                <span style="color: #00fffb">${project.title}</span>
              </strong>
            </div>
          </div>
        </div>
      `;
      projectContainer.appendChild(cardLink);
    });
  }

  // Render Services
  const servicesContainer = document.getElementById('services-container');
  if (servicesContainer && portfolioData.services) {
    servicesContainer.innerHTML = ''; // Clear existing hardcoded or old cards

    portfolioData.services.forEach(service => {
      const serviceCard = document.createElement('a');
      serviceCard.href = `service.html?slug=${service.slug}`;
      serviceCard.className = 'card';
      serviceCard.style.textDecoration = 'none';
      serviceCard.style.color = 'inherit';
      serviceCard.style.display = 'block';

      serviceCard.innerHTML = `
        <div class="icon" style="height: 160px; position: relative">
          <lottie-player
            class="services_icon"
            src="${service.icon}"
            background="transparent"
            speed="1"
            style="width: 160px; height: 160px; position: absolute; top: 1px"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div class="info">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>
      `;
      servicesContainer.appendChild(serviceCard);
    });
  }
});
