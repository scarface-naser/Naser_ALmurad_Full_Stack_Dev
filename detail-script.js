function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function loadProjectDetail() {
  const slug = getQueryParam('slug');
  if (!slug) {
    document.getElementById('project-title').textContent = 'Project not found';
    return;
  }

  const project = portfolioData.projects.find(p => p.slug === slug);

  if (!project) {
    document.getElementById('project-title').textContent = 'Project not found';
    return;
  }

  // Set Title
  document.getElementById('project-title').innerHTML = project.title;

  // Set Source Link
  const sourceLink = document.getElementById('project-source');
  if (project.sourceLink) {
    sourceLink.href = project.sourceLink;
  } else {
    sourceLink.style.display = 'none';
  }

  // Set Description
  document.getElementById('project-description').innerHTML = project.description;

  // Set Tags
  const tagsContainer = document.getElementById('project-tags');
  tagsContainer.innerHTML = '';
  if (project.tags && project.tags.length > 0) {
    project.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });
  }

  // Set Video
  const videoContainer = document.getElementById('project-video-container');
  videoContainer.innerHTML = '';

  if (project.youtubeId) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${project.youtubeId}`;
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoContainer.appendChild(iframe);
  } else {
    const msg = document.createElement('div');
    msg.className = 'no-video-message';
    msg.textContent = 'Project video coming soon...';
    videoContainer.appendChild(msg);
  }
}

function loadServiceDetail() {
  const slug = getQueryParam('slug');
  if (!slug) {
    document.getElementById('service-title').textContent = 'Service not found';
    return;
  }

  const service = portfolioData.services.find(s => s.slug === slug);

  if (!service) {
    document.getElementById('service-title').textContent = 'Service not found';
    return;
  }

  // Set Title
  document.getElementById('service-title').textContent = service.title;

  // Set Description
  document.getElementById('service-description').textContent = service.description;

  // Set Features
  const featuresList = document.getElementById('service-features');
  featuresList.innerHTML = '';
  if (service.features && service.features.length > 0) {
    service.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }
}
