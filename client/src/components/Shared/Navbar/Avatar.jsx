import { useContext } from 'react';
import avatarImg from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img className='rounded-full w-8 h-8' referrerPolicy='no-referrer' src={user && user.photoURL ? user.photoURL : avatarImg} alt="profile" />
        </div>
    );
};

export default Avatar;