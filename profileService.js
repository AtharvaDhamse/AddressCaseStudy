import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/profiles';

const getAllProfiles = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createProfile = async (profile) => {
  try {
    const response = await axios.post(BASE_URL, profile);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateProfile = async (profile) => {
  try {
    const response = await axios.put(`${BASE_URL}/${profile.id}`, profile);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteProfile = async (profileId) => {
  try {
    await axios.delete(`${BASE_URL}/${profileId}`);
  } catch (error) {
    throw error;
  }
};

export { getAllProfiles, createProfile, updateProfile, deleteProfile };
