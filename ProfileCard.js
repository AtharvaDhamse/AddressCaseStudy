import React, { useState } from 'react';
import Map from './Map';

const ProfileCard = ({ profile }) => 
{
    const [showSummary, setShowSummary] = useState(false);

    const toggleSummary = () =>
    {
        setShowSummary(!showSummary)
    }

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={toggleSummary}>Summary</button>
      {showSummary && <Map profile={profile} />}
    </div>
  );
};

export default ProfileCard;
