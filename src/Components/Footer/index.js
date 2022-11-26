import React from "react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <div className="footer">
      <h3>Social Links</h3>
      <div className="socialLinks">
        <SocialIcon
          network="github"
          bgColor="White"
          url="https://github.com/sahebbhalla" className="link"
        />
        <SocialIcon network="email"    bgColor="White"
          url="https://github.com/sahebbhalla" className="link"/>
        <SocialIcon network="linkedin" url='https://www.linkedin.com/in/saheb-bhalla-b4b787144' bgColor="white" className="link"/>
      </div>
    </div>
  );
};

export default Footer;
