// Inside the component where you display profiles
import React, { useState } from 'react';
import ProfileDetails from './ProfileDetails';

const ProfileList = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id} onClick={() => handleProfileClick(profile)}>
          {/* Render profile cards here */}
        </div>
      ))}
      {selectedProfile && <ProfileDetails profile={selectedProfile} />}
    </div>
  );
};

export default ProfileList;
