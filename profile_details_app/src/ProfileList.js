import Profile from './Profile';
import { profiles } from './profile_data';
import styles from './ProfileList.module.css';
const ProfileList = () => {
    return (
        <>
            <section className={styles.center}>
                <div>
                    <h1>Team Members</h1>
                    <div className={styles.profileContainer}>
                        {profiles.map((profile, index) => { 
                            const { img, name, job, company, link } = profile;
                            return (
                                <Profile key={index} image={img} name={name} job={job} company={company} link={link} />  
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProfileList;