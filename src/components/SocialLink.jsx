/* eslint-disable react/prop-types */
function SocialLink(props) {
  const { href, icon } = props;
  return (
    <li>
      <a href={href} target="_blank" className="nav-icon" rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
}
export default SocialLink;
