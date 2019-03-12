export const classname = (base_class, modifiers = [], mixin) => applyModifiers(base_class, modifiers) + (mixin ? ` ${mixin}` : '');
// WEB
export const applyModifiers = (base_class, modifiers = []) => modifiers.reduce((className, mod) => `${className} ${base_class}_${mod}`, base_class);