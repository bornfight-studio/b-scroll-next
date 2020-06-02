/**
 * b-scroll-next v 1.0.2
 * Author: Bornfight
 * Repo: https://github.com/bornfight/b-scroll-next
 *
 * Year: 2020
 */

import gsap from "gsap";

export default class ScrollNext {
    /**
     *
     * @param {string} options.element
     * @param {number} options.offset
     * @param {string} options.ease
     * @param {number} options.duration
     */
    constructor(options) {
        const _defaults = {
            element: ".js-scroll-next",
            offset: 0,
            ease: "power3.ease-in-out",
            duration: 0.5
        };

        this.defaults = Object.assign({}, _defaults, options);
        this.document = document.documentElement || document.body;
        this.toNextLinks = document.querySelectorAll(this.defaults.element);

        if (this.toNextLinks.length > 0) {
            this.toNextLinks.forEach(toNextLink => {
                this.toNexController(toNextLink);
            });
        }
    }

    /**
     *
     * @param {Element || HTMLElement} toNextLink
     */
    toNexController(toNextLink) {
        const toNextLinkPosTop = toNextLink.getBoundingClientRect().top;
        toNextLink.addEventListener('click', (ev) => {
            ev.preventDefault();

            gsap.to(this.document, {
                duration: this.defaults.duration,
                scrollTop: toNextLinkPosTop + toNextLink.clientHeight + this.defaults.offset,
                ease: this.defaults.ease
            })
        });
    }
}

