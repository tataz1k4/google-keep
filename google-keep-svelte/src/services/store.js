import { writable } from 'svelte/store';

// Criar uma nova store chamada tasks iniciada com uma array vazia. A store é usada para compartilhar dados entre os componentes Svelte.
export const tasks = writable([]);
