import type { MjoListboxItems } from "mjo-litui/types/mjo-listbox";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { BsBell, BsEnvelope, BsGear, BsPerson, BsPower } from "mjo-icons/bs";

import "mjo-litui/mjo-alert";
import "mjo-litui/mjo-avatar";
import "mjo-litui/mjo-button";
import "mjo-litui/mjo-calendar";
import "mjo-litui/mjo-listbox";
import "mjo-litui/mjo-menu-button";
import "mjo-litui/mjo-pagination";
import "mjo-litui/mjo-slider";

@customElement("components-cloud")
export class ComponentsCloud extends LitElement {
    render() {
        return html`
            <div class="container">
                <div class="cloud one">
                    <mjo-alert type="success" message="Success message"></mjo-alert>
                    <mjo-alert type="info" message="Info message"></mjo-alert>
                    <mjo-alert type="error" message="Error message"></mjo-alert>
                    <mjo-alert type="warning" message="Warning message"></mjo-alert>
                </div>
                <div class="cloud two">
                    <mjo-avatar color="primary" bordered name="Manu Overa" src="https://i.pravatar.cc/150?img=3"></mjo-avatar>
                    <mjo-avatar color="secondary" bordered name="Rafa Molina" src="https://i.pravatar.cc/150?img=4"></mjo-avatar>
                    <mjo-avatar color="default" bordered name="Julen Guerrero" src="https://i.pravatar.cc/150?img=5"></mjo-avatar>
                    <mjo-avatar color="success" bordered name="Ainoa Ferrer" src="https://i.pravatar.cc/150?img=6"></mjo-avatar>
                    <mjo-avatar name="Ramon Sanchez" nameColoured></mjo-avatar>
                </div>
                <div class="cloud three">
                    <mjo-calendar size="small"></mjo-calendar>
                </div>
                <div class="cloud four">
                    <mjo-slider min="0" max="200" color="primary" step="1" label="Slider primary" tooltip></mjo-slider>
                    <mjo-slider min="0" max="2000" color="secondary" step="10" label="Slider secondary" tooltip></mjo-slider>
                    <mjo-slider min="0" max="2000" color="primary" isRange step="10" label="Slider range" tooltip></mjo-slider>
                </div>
                <div class="cloud five">
                    <mjo-pagination totalItems="50" pageSize="10" currentPage="1" size="small" color="primary" hideFirstLast></mjo-pagination>
                </div>
                <div class="cloud six">
                    <mjo-button color="primary">Button</mjo-button>
                    <mjo-button color="secondary">Button</mjo-button>
                    <mjo-button color="success">Button</mjo-button>
                </div>
                <div class="cloud seven">
                    <mjo-menu-button effect="async" color="primary"></mjo-menu-button>
                    <mjo-menu-button effect="cross" color="secondary"></mjo-menu-button>
                    <mjo-menu-button effect="rotate" color="success"></mjo-menu-button>
                    <mjo-menu-button effect="push" color="error"></mjo-menu-button>
                </div>
                <div class="cloud eight">
                    <mjo-listbox
                        .items=${[
                            {
                                section: "User",
                            },
                            {
                                startIcon: BsPerson,
                                label: "Profile",
                            },
                            {
                                startIcon: BsEnvelope,
                                label: "Messages",
                            },
                            {
                                startIcon: BsBell,
                                label: "Notifications",
                            },
                            {
                                section: "Settings",
                            },
                            {
                                startIcon: BsGear,
                                label: "Config",
                            },
                            {
                                startIcon: BsPower,
                                label: "Log out",
                                color: "error",
                            },
                        ] as MjoListboxItems}
                    ></mjo-listbox>
                </div>
            </div>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
                --mjo-space-x-small: var(--mjo-space-xsmall);
            }

            mjo-slider {
                width: 100%;
            }

            mjo-avatar:nth-of-type(1) {
                animation: avatarFloat1 3.2s ease-in-out infinite;
                animation-delay: 0.1s;
            }

            mjo-avatar:nth-of-type(2) {
                animation: avatarFloat2 4.1s ease-in-out infinite;
                animation-delay: 0.7s;
            }

            mjo-avatar:nth-of-type(3) {
                animation: avatarFloat3 3.8s ease-in-out infinite;
                animation-delay: 1.3s;
            }

            mjo-avatar:nth-of-type(4) {
                animation: avatarFloat4 4.5s ease-in-out infinite;
                animation-delay: 0.4s;
            }

            mjo-avatar:nth-of-type(5) {
                animation: avatarFloat5 3.6s ease-in-out infinite;
                animation-delay: 1.1s;
            }

            mjo-button:nth-of-type(1) {
                animation: buttonFloat1 3.4s ease-in-out infinite;
                animation-delay: 0.2s;
            }

            mjo-button:nth-of-type(2) {
                animation: buttonFloat2 4.2s ease-in-out infinite;
                animation-delay: 0.8s;
            }

            mjo-button:nth-of-type(3) {
                animation: buttonFloat3 3.9s ease-in-out infinite;
                animation-delay: 1.5s;
            }

            mjo-menu-button:nth-of-type(1) {
                animation: menuButtonFloat1 3.7s ease-in-out infinite;
                animation-delay: 0.3s;
            }

            mjo-menu-button:nth-of-type(2) {
                animation: menuButtonFloat2 4.3s ease-in-out infinite;
                animation-delay: 0.9s;
            }

            mjo-menu-button:nth-of-type(3) {
                animation: menuButtonFloat3 3.5s ease-in-out infinite;
                animation-delay: 1.2s;
            }

            mjo-menu-button:nth-of-type(4) {
                animation: menuButtonFloat4 4s ease-in-out infinite;
                animation-delay: 0.6s;
            }

            .container {
                position: relative;
                height: 600px;
            }

            @keyframes float {
                0%,
                100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-12px);
                }
            }

            @keyframes floatAlt {
                0%,
                100% {
                    transform: translateY(0px) rotate(0deg);
                }
                25% {
                    transform: translateY(-4px) rotate(0.5deg);
                }
                75% {
                    transform: translateY(-8px) rotate(-0.5deg);
                }
            }

            @keyframes floatSlow {
                0%,
                100% {
                    transform: translateY(0px) translateX(0px);
                }
                33% {
                    transform: translateY(-6px) translateX(2px);
                }
                66% {
                    transform: translateY(-14px) translateX(-1px);
                }
            }

            @keyframes floatGentle {
                0%,
                100% {
                    transform: translateY(0px) scale(1);
                }
                50% {
                    transform: translateY(-7px) scale(1.01);
                }
            }

            @keyframes floatWave {
                0%,
                100% {
                    transform: translateY(0px) translateX(0px);
                }
                25% {
                    transform: translateY(-3px) translateX(3px);
                }
                50% {
                    transform: translateY(-9px) translateX(0px);
                }
                75% {
                    transform: translateY(-5px) translateX(-2px);
                }
            }

            @keyframes avatarFloat1 {
                0%,
                100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-3px);
                }
            }

            @keyframes avatarFloat2 {
                0%,
                100% {
                    transform: translateY(0px) rotate(0deg);
                }
                50% {
                    transform: translateY(-4px) rotate(0.8deg);
                }
            }

            @keyframes avatarFloat3 {
                0%,
                100% {
                    transform: translateY(0px) translateX(0px);
                }
                33% {
                    transform: translateY(-2px) translateX(1px);
                }
                66% {
                    transform: translateY(-5px) translateX(-0.5px);
                }
            }

            @keyframes avatarFloat4 {
                0%,
                100% {
                    transform: translateY(0px) scale(1);
                }
                50% {
                    transform: translateY(-3.5px) scale(1.02);
                }
            }

            @keyframes avatarFloat5 {
                0%,
                100% {
                    transform: translateY(0px) translateX(0px);
                }
                25% {
                    transform: translateY(-2px) translateX(-1px);
                }
                75% {
                    transform: translateY(-4px) translateX(1.5px);
                }
            }

            @keyframes buttonFloat1 {
                0%,
                100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-4px);
                }
            }

            @keyframes buttonFloat2 {
                0%,
                100% {
                    transform: translateY(0px) rotate(0deg);
                }
                50% {
                    transform: translateY(-5px) rotate(0.6deg);
                }
            }

            @keyframes buttonFloat3 {
                0%,
                100% {
                    transform: translateY(0px) translateX(0px);
                }
                33% {
                    transform: translateY(-3px) translateX(1px);
                }
                66% {
                    transform: translateY(-6px) translateX(-0.8px);
                }
            }

            @keyframes menuButtonFloat1 {
                0%,
                100% {
                    transform: translateY(0px) scale(1);
                }
                50% {
                    transform: translateY(-3px) scale(1.02);
                }
            }

            @keyframes menuButtonFloat2 {
                0%,
                100% {
                    transform: translateY(0px) translateX(0px);
                }
                25% {
                    transform: translateY(-2px) translateX(-1.5px);
                }
                75% {
                    transform: translateY(-5px) translateX(1px);
                }
            }

            @keyframes menuButtonFloat3 {
                0%,
                100% {
                    transform: translateY(0px) rotate(0deg);
                }
                50% {
                    transform: translateY(-4px) rotate(-0.7deg);
                }
            }

            @keyframes menuButtonFloat4 {
                0%,
                100% {
                    transform: translateY(0px) translateX(0px);
                }
                33% {
                    transform: translateY(-3.5px) translateX(1.2px);
                }
                66% {
                    transform: translateY(-2px) translateX(-0.8px);
                }
            }

            .cloud {
                position: absolute;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }
            .one {
                top: 60px;
                left: calc(50% - 300px);
                width: 250px;
                height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: var(--mjo-space-small);
                animation: float 7s ease-in-out infinite;
                animation-delay: 0s;
            }
            .two {
                top: 0px;
                left: calc(50% - 116px);
                width: 250px;
                height: 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: var(--mjo-space-small);
                animation: floatAlt 6.5s ease-in-out infinite;
                animation-delay: 1.2s;
            }
            .three {
                top: 80px;
                left: calc(50% - 135px);
                width: 290px;
                height: 325px;
                display: flex;
                justify-content: center;
                animation: floatSlow 8s ease-in-out infinite;
                animation-delay: 0.3s;
                z-index: 1;
            }
            .four {
                top: 300px;
                left: calc(50% - 240px);
                width: 220px;
                height: 120px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: var(--mjo-space-small);
                animation: floatGentle 5.5s ease-in-out infinite;
                animation-delay: 2.1s;
            }
            .five {
                top: 65px;
                left: calc(50% + 60px);
                width: max-content;
                height: 120px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: var(--mjo-space-small);
                animation: floatWave 6.8s ease-in-out infinite;
                animation-delay: 1.7s;
            }
            .six {
                top: 130px;
                left: calc(50% + 80px);
                width: 220px;
                height: 120px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: var(--mjo-space-small);
                animation: floatWave 6.8s ease-in-out infinite;
                animation-delay: 1.3s;
            }
            .seven {
                top: 200px;
                left: calc(50% + 35px);
                width: max-content;
                height: 120px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: var(--mjo-space-small);
                animation: floatWave 6.8s ease-in-out infinite;
                animation-delay: 2.3s;
            }
            .eight {
                top: 270px;
                left: calc(50% + 35px);
                width: 220px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: var(--mjo-space-small);
                animation: floatWave 6.8s ease-in-out infinite;
                animation-delay: 2.3s;
            }
            @media (min-width: 768px) {
                .one {
                    top: 70px;
                    left: calc(50% - 340px);
                }
                .two {
                    top: 0px;
                    left: calc(50% - 136px);
                }
                .three {
                    top: 80px;
                    left: calc(50% - 155px);
                    z-index: 1;
                }
                .four {
                    top: 300px;
                    left: calc(50% - 290px);
                }
                .five {
                    top: 60px;
                    left: calc(50% + 120px);
                }
                .six {
                    top: 130px;
                    left: calc(50% + 80px);
                }
                .seven {
                    top: 200px;
                    left: calc(50% + 135px);
                }
                .eight {
                    top: 270px;
                    left: calc(50% + 105px);
                }
            }
            @media (min-width: 1024px) {
                .one {
                    top: 60px;
                    left: calc(50% - 420px);
                }
                .two {
                    top: 0px;
                    left: calc(50% - 116px);
                }
                .three {
                    top: 80px;
                    left: calc(50% - 135px);
                }
                .four {
                    top: 300px;
                    left: calc(50% - 370px);
                }
                .five {
                    top: 40px;
                    left: calc(50% + 220px);
                }
                .six {
                    top: 130px;
                    left: calc(50% + 180px);
                }
                .seven {
                    top: 200px;
                    left: calc(50% + 205px);
                }
                .eight {
                    top: 270px;
                    left: calc(50% + 185px);
                }
            }
            mjo-listbox {
                width: 100%;
            }
            mjo-listbox,
            mjo-pagination {
                background-color: var(--mjo-background-color-low);
                border-radius: var(--mjo-radius-medium);
            }
        `,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        "components-cloud": ComponentsCloud;
    }
}
