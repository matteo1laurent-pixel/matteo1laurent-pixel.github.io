/* Project search and filters adapted from Portfolio-Demo by Cao Tri DO (ISC license). */

(function () {
    const list = document.getElementById('projectList');
    const searchInput = document.getElementById('projectSearch');
    const filterButtons = document.querySelectorAll('.filter');
    const resultCount = document.getElementById('resultCount');
    const emptyMessage = document.getElementById('emptyMessage');
    const themeButton = document.getElementById('themeButton');

    let activeFilter = 'all';

    function escapeHtml(text) {
        const element = document.createElement('span');
        element.textContent = text;
        return element.innerHTML;
    }

    function projectRow(project) {
        const result = project.resultValue
            ? `<p class="result"><strong>${escapeHtml(project.resultValue)}</strong><span>${escapeHtml(project.resultLabel)}</span></p>`
            : '';
        const link = project.link
            ? `<a class="project-link" href="${escapeHtml(project.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.linkLabel || 'View project')}</a>`
            : '';

        return `
            <article class="project" data-category="${escapeHtml(project.category)}">
                <div class="project-heading">
                    <h3>${escapeHtml(project.title)}</h3>
                    <p class="context">${escapeHtml(project.context)}</p>
                </div>
                <div class="project-body">
                    <p>${escapeHtml(project.description)}</p>
                    <p class="tools">${escapeHtml(project.tools)}</p>
                    ${link}
                </div>
                ${result}
            </article>`;
    }

    function applyFilters() {
        const term = searchInput.value.toLowerCase().trim();
        let visible = 0;

        list.querySelectorAll('.project').forEach((row, index) => {
            const project = PROJECTS[index];
            const text = [
                project.title,
                project.context,
                project.description,
                project.tools,
            ]
                .join(' ')
                .toLowerCase();
            const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
            const matchesSearch = term === '' || text.includes(term);
            const show = matchesFilter && matchesSearch;

            row.hidden = !show;
            if (show) visible += 1;
        });

        resultCount.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
        emptyMessage.hidden = visible !== 0;
    }

    function setUpProjects() {
        list.innerHTML = PROJECTS.map(projectRow).join('');
        searchInput.addEventListener('input', applyFilters);

        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                activeFilter = button.dataset.filter;
                filterButtons.forEach((other) => {
                    other.setAttribute('aria-pressed', String(other === button));
                });
                applyFilters();
            });
        });

        document.getElementById('clearFilters').addEventListener('click', () => {
            searchInput.value = '';
            filterButtons[0].click();
            searchInput.focus();
        });

        applyFilters();
    }

    function setUpContactLinks() {
        document.querySelectorAll('[data-email]').forEach((link) => {
            link.href = `mailto:${PROFILE.email}`;
        });

        ['github', 'linkedin', 'cv'].forEach((key) => {
            document.querySelectorAll(`[data-profile="${key}"]`).forEach((link) => {
                if (PROFILE[key]) {
                    link.href = PROFILE[key];
                } else {
                    link.hidden = true;
                }
            });
        });
    }

    function savedTheme() {
        try {
            return localStorage.getItem('theme');
        } catch {
            return null;
        }
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        themeButton.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
        try {
            localStorage.setItem('theme', theme);
        } catch {
            /* The theme still works for this visit. */
        }
    }

    function setUpTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(savedTheme() || (prefersDark ? 'dark' : 'light'));

        themeButton.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    document.getElementById('year').textContent = new Date().getFullYear();
    setUpTheme();
    setUpContactLinks();
    setUpProjects();
})();
