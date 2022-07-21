import axios from 'axios'
import { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import UserForm from '../../Components/form-component/user-form/User-form';
import {IUser} from '../../Interfaces/GithubApi';
import './Users.scss'


function Users(){
   
    let navigate:NavigateFunction = useNavigate();
    const [user, setUser] = useState<IUser>()
    
    const url = 'https://api.github.com/users/';
    const [error, setError] = useState(false);
    function searchUser(value:string){
        axios.get(url+value).then(response => {
            setUser(response.data);
            setError(false)
        }).catch(e =>{
            setError(true)
        })
    }
    function handleBack(){
        navigate("/",{replace:true});
    }
    return(
        <div className='users'>
            <div className='users__back' onClick={handleBack}>
                &#8592; Atras
            </div>
            <UserForm searchFunc={searchUser}/>
            {user?
                <div className='users__table'>
                    <div className='users__table__row'>
                        <div className='users__table__row__title'>
                            Name
                        </div>
                        <div className='users__table__row__title'>
                            N° of repos
                        </div>
                        <div className='users__table__row__title'>
                            Url
                        </div>
                        <div className='users__table__row__title'>
                            Hireable
                        </div>
                    </div>
                    <div className='users__table__row'>
                        <div className='users__table__row__user-info'>
                            {user?.name}
                        </div>
                        <div className='users__table__row__user-info'>
                            {user?.public_repos}
                        </div>
                        <div className='users__table__row__user-info'>
                            {user?.html_url}
                        </div>
                        <div className='users__table__row__user-info'>
                            {user?.hireable?"Yes":"No"}
                        </div>
                    </div>

                </div>:
                <div/>
            }
            {error?
                <div className='users__error'>
                    No se han encontrado usuarios con ese nombre
                </div>:
                <div/>
            }
        </div>
    )
}
export default Users;