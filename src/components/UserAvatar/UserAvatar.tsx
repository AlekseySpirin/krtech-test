import React, {FC} from 'react';
import Avatar, {AvatarProps} from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

import './UserAvatar.scss'
import {cn} from "@bem-react/classname";


const userAvatar = cn('User', 'Avatar')

type TUserAvatarProps = {
  name: string,
  variantBadge?: 'dot' | 'standard' | undefined

}


const UserAvatar: FC<TUserAvatarProps & AvatarProps> = ({name, variantBadge, ...props}) => {

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Badge
      className={userAvatar()}
      overlap="circular"
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      variant={variantBadge}
    >
      <Avatar {...stringAvatar(name)} alt={'Аватар пользователя'} {...props} />
    </Badge>

  );
};

export default UserAvatar;
