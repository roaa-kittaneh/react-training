import React from 'react';
import './ProfileCard.css'; 

import { FaUserCircle, FaClock, FaLinkedinIn } from 'react-icons/fa'; 

interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  linkedinUrl: string;
  profileImage: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  bio,
  linkedinUrl,
  profileImage,
}) => {
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-image-placeholder">
          <img src={profileImage} alt={`${name} profile`} className="profile-image" />
        </div>

        <div className="profile-info">
          <div className="name-verification-container">
            <h2 className="profile-name">{name}</h2>
          </div>
          <p className="profile-title">{title}</p>
          <p className="profile-bio">{bio}</p>
        </div>

        <div className="profile-footer">
          <div className="status-icons">
            <span className="footer-icon" title="View Profile">
              <FaUserCircle />
            </span>
            <span className="footer-icon" title="Activity">
              <FaClock />
            </span>
          </div>
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-link"
            title="Open LinkedIn Profile"
          >
            <span className="linkedin-icon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
