(function () {
    analytics.ready(() => {
        // Track clicks on all links and anchor tags
        document.addEventListener('click', (e) => {
            // Targeting anchor tags at for all click events because all links are not rendered at the time of script execution to attach event listeners
            if (e.target.nodeName === 'A') {
                const href = e.target.getAttribute('href');
                const label = e.target.innerText;
                const page_section = getLinkPageSection(e.target);
                if (href && href.startsWith('http')) { // External link
                    analytics.track('Clicked Link', {
                        link_url: href,
                        label: label,
                        link_type: 'external',
                        page_section: page_section,
                    });
                } else if (href && href.startsWith('/')) { // Internal link
                    analytics.track('Clicked Link', {
                        link_url: href,
                        label: label,
                        link_type: 'internal',
                        page_section: page_section,
                    });
                } else { // Anchor link
                    analytics.track('Clicked Link', {
                        link_url: href,
                        label: label,
                        link_type: 'anchor',
                        page_section: page_section,
                    });
                }
            }
        });
    })
})();

// Get the page section of the link
function getLinkPageSection(linkElement) {
    let pageSectionElement = linkElement.closest('nav') ?? (linkElement.closest('.table-of-contents') ?? linkElement.closest('footer')); // Get the closest nav, table of contents or footer element
    let pageSectionLabel = '';
    if (pageSectionElement) {
        switch (pageSectionElement.nodeName) {
            case 'NAV':
                pageSectionLabel = pageSectionElement.getAttribute('aria-label');
                break;
            case 'FOOTER':
                pageSectionLabel = 'Footer';
                break;
            case 'UL':
                pageSectionLabel = 'Table of contents';
                break;
            default:
                pageSectionLabel = '';
        }
    } else {
        // If the link is not in a nav, table of contents or footer, then get the page section from the heading above the link
        let anchor = getAboveAnchor(linkElement);
        if (anchor) {
            pageSectionLabel = anchor.innerText;
        } else {
            let pageSectionElement = linkElement.parentElement;
            while (pageSectionElement) {
                anchor = getAboveAnchor(pageSectionElement);
                if (anchor) {
                    pageSectionLabel = anchor.innerText;
                    break;
                }
                pageSectionElement = pageSectionElement.parentElement;
            }
        }

    }
    return pageSectionLabel;
}

function getAboveAnchor(element) {
    let sibling = element.previousElementSibling;
    while (sibling) {
        if (sibling.matches('.anchor') || sibling.matches('h1') || sibling.matches('h2') || sibling.matches('h3') || sibling.matches('h4') || sibling.matches('h5') || sibling.matches('h6')) {
            return sibling;
        }
        sibling = sibling.previousElementSibling;
    }
    return null;
}
