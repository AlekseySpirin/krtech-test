import React, {FC} from 'react';
import Avatar, {AvatarProps} from '@mui/material/Avatar';
import {styled} from '@mui/material/styles';
import Badge from '@mui/material/Badge';

interface IUserAvatarProps {
  name: string,
  variantBadge?: 'dot' | 'standard' | undefined

}

const UserAvatar: FC<IUserAvatarProps & AvatarProps> = ({name, variantBadge, ...props}) => {

  const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
  }));

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

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
    <StyledBadge
      overlap="circular"
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      variant={variantBadge}
    >
      <Avatar {...stringAvatar(name)} alt={'Аватар пользователя'} {...props} />
    </StyledBadge>

  );
};

export default UserAvatar;
