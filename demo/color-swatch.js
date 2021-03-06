import '@polymer/polymer/polymer-legacy.js';
import '../d2l-colors.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-demo-color-swatch">
	<template strip-whitespace="">
		<style>
			:host {
				border-radius: 16px;
				box-sizing: border-box;
				color: #fff;
				display: inline-block;
				font-size: 1rem;
				font-weight: 400;
				padding: 1rem;
				margin-bottom: 1rem;
				height: 75px;
				width: 220px;
			}

			/* basic grays */
			:host([name="regolith"]) {
				background-color: var(--d2l-color-regolith);
				color: var(--d2l-color-ferrite);
			}
			:host([name="sylvite"]) {
				background-color: var(--d2l-color-sylvite);
				color: var(--d2l-color-ferrite);
			}
			:host([name="gypsum"]) {
				background-color: var(--d2l-color-gypsum);
				color: var(--d2l-color-ferrite);
			}
			:host([name="mica"]) {
				background-color: var(--d2l-color-mica);
				color: var(--d2l-color-ferrite);
			}
			:host([name="corundum"]) {
				background-color: var(--d2l-color-corundum);
				color: var(--d2l-color-ferrite);
			}
			:host([name="galena"]) {
				background-color: var(--d2l-color-galena);
			}
			:host([name="tungsten"]) {
				background-color: var(--d2l-color-tungsten);
			}
			:host([name="ferrite"]) {
				background-color: var(--d2l-color-ferrite);
			}

			/* primary accent */
			:host([name="primary-accent-action"]) {
				background-color: var(--d2l-color-primary-accent-action);
			}
			:host([name="primary-accent-indicator"]) {
				background-color: var(--d2l-color-primary-accent-indicator);
			}

			/* feedback */
			:host([name="feedback-error"]) {
				background-color: var(--d2l-color-feedback-error);
			}
			:host([name="feedback-warning"]) {
				background-color: var(--d2l-color-feedback-warning);
				color: var(--d2l-color-ferrite);
			}
			:host([name="feedback-success"]) {
				background-color: var(--d2l-color-feedback-success);
			}
			:host([name="feedback-action"]) {
				background-color: var(--d2l-color-feedback-action);
			}

			/* zircon */
			:host([name="zircon-plus-2"]) {
				background-color: var(--d2l-color-zircon-plus-2);
				color: var(--d2l-color-ferrite);
			}
			:host([name="zircon-plus-1"]) {
				background-color: var(--d2l-color-zircon-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="zircon"]) {
				background-color: var(--d2l-color-zircon);
			}
			:host([name="zircon-minus-1"]) {
				background-color: var(--d2l-color-zircon-minus-1);
			}

			/* celestine */
			:host([name="celestine-plus-2"]) {
				background-color: var(--d2l-color-celestine-plus-2);
				color: var(--d2l-color-ferrite);
			}
			:host([name="celestine-plus-1"]) {
				background-color: var(--d2l-color-celestine-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="celestine"]) {
				background-color: var(--d2l-color-celestine);
			}
			:host([name="celestine-minus-1"]) {
				background-color: var(--d2l-color-celestine-minus-1);
			}

			/* amethyst */
			:host([name="amethyst-plus-2"]) {
				background-color: var(--d2l-color-amethyst-plus-2);
				color: var(--d2l-color-ferrite);
			}
			:host([name="amethyst-plus-1"]) {
				background-color: var(--d2l-color-amethyst-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="amethyst"]) {
				background-color: var(--d2l-color-amethyst);
			}
			:host([name="amethyst-minus-1"]) {
				background-color: var(--d2l-color-amethyst-minus-1);
			}

			/* fluorite */
			:host([name="fluorite-plus-2"]) {
				background-color: var(--d2l-color-fluorite-plus-2);
				color: var(--d2l-color-ferrite);
			}
			:host([name="fluorite-plus-1"]) {
				background-color: var(--d2l-color-fluorite-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="fluorite"]) {
				background-color: var(--d2l-color-fluorite);
			}
			:host([name="fluorite-minus-1"]) {
				background-color: var(--d2l-color-fluorite-minus-1);
			}

			/* tourmaline */
			:host([name="tourmaline-plus-2"]) {
				background-color: var(--d2l-color-tourmaline-plus-2);
				color: var(--d2l-color-ferrite);
			}
			:host([name="tourmaline-plus-1"]) {
				background-color: var(--d2l-color-tourmaline-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="tourmaline"]) {
				background-color: var(--d2l-color-tourmaline);
			}
			:host([name="tourmaline-minus-1"]) {
				background-color: var(--d2l-color-tourmaline-minus-1);
			}

			/* cinnabar */
			:host([name="cinnabar-plus-2"]) {
				background-color: var(--d2l-color-cinnabar-plus-2);
				color: var(--d2l-color-ferrite);
			}
			:host([name="cinnabar-plus-1"]) {
				background-color: var(--d2l-color-cinnabar-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="cinnabar"]) {
				background-color: var(--d2l-color-cinnabar);
			}
			:host([name="cinnabar-minus-1"]) {
				background-color: var(--d2l-color-cinnabar-minus-1);
			}

			/* carnelian */
			:host([name="carnelian-plus-1"]) {
				background-color: var(--d2l-color-carnelian-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="carnelian"]) {
				background-color: var(--d2l-color-carnelian);
				color: var(--d2l-color-ferrite);
			}
			:host([name="carnelian-minus-1"]) {
				background-color: var(--d2l-color-carnelian-minus-1);
			}
			:host([name="carnelian-minus-2"]) {
				background-color: var(--d2l-color-carnelian-minus-2);
			}

			/* citrine */
			:host([name="citrine-plus-1"]) {
				background-color: var(--d2l-color-citrine-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="citrine"]) {
				background-color: var(--d2l-color-citrine);
				color: var(--d2l-color-ferrite);
			}
			:host([name="citrine-minus-1"]) {
				background-color: var(--d2l-color-citrine-minus-1);
			}
			:host([name="citrine-minus-2"]) {
				background-color: var(--d2l-color-citrine-minus-2);
			}

			/* topaz */
			:host([name="topaz-plus-1"]) {
				background-color: var(--d2l-color-topaz-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="topaz"]) {
				background-color: var(--d2l-color-topaz);
				color: var(--d2l-color-ferrite);
			}
			:host([name="topaz-minus-1"]) {
				background-color: var(--d2l-color-topaz-minus-1);
			}
			:host([name="topaz-minus-2"]) {
				background-color: var(--d2l-color-topaz-minus-2);
			}

			/* peridot */
			:host([name="peridot-plus-1"]) {
				background-color: var(--d2l-color-peridot-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="peridot"]) {
				background-color: var(--d2l-color-peridot);
				color: var(--d2l-color-ferrite);
			}
			:host([name="peridot-minus-1"]) {
				background-color: var(--d2l-color-peridot-minus-1);
			}
			:host([name="peridot-minus-2"]) {
				background-color: var(--d2l-color-peridot-minus-2);
			}

			/* olivine */
			:host([name="olivine-plus-1"]) {
				background-color: var(--d2l-color-olivine-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="olivine"]) {
				background-color: var(--d2l-color-olivine);
				color: var(--d2l-color-ferrite);
			}
			:host([name="olivine-minus-1"]) {
				background-color: var(--d2l-color-olivine-minus-1);
			}
			:host([name="olivine-minus-2"]) {
				background-color: var(--d2l-color-olivine-minus-2);
			}

			/* malachite */
			:host([name="malachite-plus-1"]) {
				background-color: var(--d2l-color-malachite-plus-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="malachite"]) {
				background-color: var(--d2l-color-malachite);
				color: var(--d2l-color-ferrite);
			}
			:host([name="malachite-minus-1"]) {
				background-color: var(--d2l-color-malachite-minus-1);
			}
			:host([name="malachite-minus-2"]) {
				background-color: var(--d2l-color-malachite-minus-2);
			}

			/* depcrecated */
			:host([name="white"]) {
				background-color: var(--d2l-color-white);
				color: var(--d2l-color-ferrite);
			}
			:host([name="woolonardo"]) {
				background-color: var(--d2l-color-woolonardo);
				color: var(--d2l-color-ferrite);
			}
			:host([name="titanius"]) {
				background-color: var(--d2l-color-titanius);
				color: var(--d2l-color-ferrite);
			}
			:host([name="pressicus"]) {
				background-color: var(--d2l-color-pressicus);
				color: var(--d2l-color-ferrite);
			}
			:host([name="violettine"]) {
				background-color: var(--d2l-color-violettine);
			}
			:host([name="panthera"]) {
				background-color: var(--d2l-color-panthera);
			}
			:host([name="koolaudica"]) {
				background-color: var(--d2l-color-koolaudica);
			}
			:host([name="deephonica"]) {
				background-color: var(--d2l-color-deephonica);
			}
			:host([name="lurite"]) {
				background-color: var(--d2l-color-lurite);
				color: var(--d2l-color-ferrite);
			}
			:host([name="azurite"]) {
				background-color: var(--d2l-color-azurite);
			}
			:host([name="celestuba"]) {
				background-color: var(--d2l-color-celestuba);
			}
			:host([name="gravah"]) {
				background-color: var(--d2l-color-gravah);
			}
			:host([name="saphirella"]) {
				background-color: var(--d2l-color-saphirella);
			}
			:host([name="chartronic"]) {
				background-color: var(--d2l-color-chartronic);
				color: var(--d2l-color-ferrite);
			}
			:host([name="celestine-light-1"]) {
				background-color: var(--d2l-color-celestine-light-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="celestine-light-2"]) {
				background-color: var(--d2l-color-celestine-light-2);
				color: var(--d2l-color-ferrite);
			}
			:host([name="olivine-light-1"]) {
				background-color: var(--d2l-color-olivine-light-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="olivine-light-2"]) {
				background-color: var(--d2l-color-olivine-light-2);
				color: var(--d2l-color-ferrite);
			}
			:host([name="zircon-light-1"]) {
				background-color: var(--d2l-color-zircon-light-1);
				color: var(--d2l-color-ferrite);
			}
			:host([name="zircon-light-2"]) {
				background-color: var(--d2l-color-zircon-light-2);
				color: var(--d2l-color-ferrite);
			}
		</style>
		<div>[[name]]</div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-demo-color-swatch',
	properties: {
		name: String
	}
});
