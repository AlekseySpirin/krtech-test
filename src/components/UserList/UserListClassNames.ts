import {ClassNameFormatter, cn} from '@bem-react/classname'

const Users: ClassNameFormatter = cn('Users')
const UsersList: ClassNameFormatter = cn('Users', 'List')
const UsersItem: ClassNameFormatter = cn('Users', 'Item')


export { UsersList,  UsersItem,  Users}
