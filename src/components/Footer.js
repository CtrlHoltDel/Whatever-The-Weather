import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div
        className="footer_center"
        onClick={() => {
          console.log((window.location = 'http://ctrlholtdel.com'));
        }}
      >
        <BsGithub className="icon_margin" />
        <p>@CtrlHoltDel</p>
      </div>
    </footer>
  );
};

export default Footer;
