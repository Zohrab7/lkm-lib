import React from 'react';
import classname from './classname';
import tagHoc from './tag';
import { compose } from 'redux';
export const createElement = ({tag, className, mods, pure_class, ...props}) => compose(
    classname(className, mods, pure_class),
    tagHoc(tag),
)(
    ({Tag, ...rest}) => (
        <Tag {...props} {...rest} />
    )
);

const createComponent = (block, elements = []) => {
    const Component = createElement(block);
    elements.forEach(({name, className, ...rest}) => {
        Component[name] = createElement({className: `${block.className}__${className || name.toLowerCase()}`, ...rest});
    });

    return Component
};

export default createComponent;
