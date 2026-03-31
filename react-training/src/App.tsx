import React from 'react';
import ProfileCard from './components/ProfileCard';
import profileImage from './assets/profile-image.jpeg';

const App: React.FC = () => {
  const userData = {
    name: 'Roaa Kittaneh',
    title: 'Software Engineer',
    bio: 'Software Engineer passionate about building scalable, user-centric web applications and exploring backend and frontend technologies.',
    linkedinUrl: 'https://www.linkedin.com/in/roaa-kittaneh-651618314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    profileImage,
  };

  return (
    <div>
      <ProfileCard {...userData} />
    </div>
  );
};

export default App;
