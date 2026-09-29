/**
 * render-experience.js
 * Build experience cards from EXPERIENCE_DATA.
 */

const renderExperience = (() => {
    const { $ } = window.DOM;

    function buildCard(exp, index) {
        const card = document.createElement('article');
        card.className = 'profile-card' + (exp.expanded ? ' expanded' : '');
        const detailsId = `experience-details-${index}`;

        card.innerHTML = `
            <div class="profile-card-header" data-card-toggle role="button" tabindex="0" aria-expanded="${Boolean(exp.expanded)}" aria-controls="${detailsId}">
                <div class="flex-1 min-w-0">
                    <div class="exp-header-row">
                        <div class="exp-title-block">
                            <h3 class="exp-role">${exp.role}</h3>
                            <p class="exp-company">${exp.company}</p>
                        </div>
                        <span class="exp-dates">${exp.dates}</span>
                    </div>
                </div>
                <span class="profile-chevron" aria-hidden="true"><i class="ph-bold ph-caret-down text-xs"></i></span>
            </div>
            <div id="${detailsId}" class="profile-card-body" aria-hidden="${!exp.expanded}" ${exp.expanded ? '' : 'inert'}>
                <p class="exp-tech">Tech: ${exp.tech}</p>
                <ul data-i18n-list="${exp.i18nKey}" class="exp-bullets"></ul>
            </div>
        `;
        return card;
    }

    function render() {
        const container = $('#experience-container');
        if (!container) return;
        container.innerHTML = '';
        window.EXPERIENCE_DATA.forEach((exp, index) => container.appendChild(buildCard(exp, index)));
    }

    function init() { render(); }

    return { init, render };
})();

window.renderExperience = renderExperience;