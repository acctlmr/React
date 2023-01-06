import { useState } from 'react';
import { profileData } from "./profile_data";
import { FaTrashAlt } from 'react-icons/fa';
const Profile = () => {
    const [userProfile, setUserProfile] = useState(profileData);
    const removeProfile = (id) => {
        const newProfileList = userProfile.filter((profile) => profile.id !== id);
        setUserProfile(newProfileList);
    }
    return (
        <>
        <section className="--flex-center --bg-primary">
                <div className="container">
                    <h2>User Profile App</h2>
                    {userProfile.map((profile) => {
                        const { id, name, job, img } = profile;
                        return (
                            <>
                                <div className="profile --card -flex-between">
                                    <img src={img} alt="Profile Image" />
                                    <div className="desc">
                                        <h4 className="text-light">Name: {name}</h4>
                                        <p className="text-light">Job: {job}</p>
                                    </div>
                                    <FaTrashAlt size={18} className="icon" onClick={()=>removeProfile(id) } />
                                </div>
                            </>
                        );
                    })}
                    <button className="--btn btn-danger" onClick={()=>setUserProfile([])}>Clear All</button>
                </div>                
        </section>
        </>
    );
}

export default Profile;