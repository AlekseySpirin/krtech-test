import React, {FC} from 'react';
import {UsersTitle, UsersDescription, UsersEditBtn} from "./UserClassNames";


const User: FC = () => {
    return (
        <div>
            <h3 className={UsersTitle()}> User 1</h3>
            <p className={UsersDescription({color:'red'})}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                accusamus consectetur cupiditate dolore ducimus est harum hic, in ipsam labore minus odio
                officiis pariatur quas quo reprehenderit ut velit veritatis.</p>
            <button className={UsersEditBtn()}>Edit</button>
        </div>
    );
};

export default User;
