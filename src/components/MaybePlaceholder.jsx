const MaybePlaceholder = ({ children }) => (
  typeof children === 'string' && children.startsWith('[')
    ? <mark className="placeholder">{children}</mark>
    : children
);

export default MaybePlaceholder;
