import React from 'react';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

const factory = ({ propName = 'subClass', separator = '__' }) => {
  return arg => {
    const wrapComponent = componentName => WrappedComponent => {
      const convertToClassName = (element, isRoot = false) => {
        if (element && element._isReactElement && element.props) {
          let props = {};

          if (element.props[propName] || isRoot) {
            props.className = [isRoot && componentName]
              .concat(element.props.className)
              .concat(element.props[propName])
              .filter(className => !!className)
              .map(className => isRoot ? className : `${componentName}${separator}${className}`)
              .join(' ');
          }

          if (element.props.children) {
            props.children = React.Children.map(element.props.children, child => convertToClassName(child));
          }

          return React.cloneElement(element, props);
        }
        else {
          return element;
        }
      };

      const displayName = `${propName}(${getDisplayName(WrappedComponent)})`;

      return class extends WrappedComponent {
        static displayName = displayName;

        render(...args) {
          return convertToClassName(super.render(...args), true);
        }
      };
    };

    return typeof arg === 'string' ? wrapComponent(arg) : wrapComponent(getDisplayName(arg))(arg);
  };
};

export default factory({});
export { factory };
