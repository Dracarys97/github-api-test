import axios from 'axios'
import { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import RepositoryForm from '../../Components/form-component/repository-form/Repository-form';
import List from '../../Components/list-component/List';
import { IRepository } from '../../Interfaces/GithubApi';
import './Repositories.scss'

function Repositories(){ 
    let navigate:NavigateFunction = useNavigate();
    const [repositories, setRepositories] = useState<IRepository[]>()
    
    const urlRepo = 'https://api.github.com/repos/';
    const urlOrg = 'https://api.github.com/orgs/';
    const urlUser = 'https://api.github.com/users/';

    const [error, setError] = useState(false);
    function searchRepositories(user:string,type:boolean,repository?:string){
        let url:string= ''
        let repos:IRepository[]=[];
        if(!repository){
            if(!type){
                url = urlUser+user+"/repos"
            }
            else{
                url = urlOrg+user+"/repos"
            }
        }
        else{
            url =urlRepo+user+"/"+repository;
            
        }
        axios.get(url).then(response => {
            console.log(response.data)
            setError(false)
            if(repository){
                repos.push(response.data)
                setRepositories(repos)
            }else{
                setRepositories(response.data)
            }
            console.log(repositories)
        }).catch(e =>{
            setError(true)
            console.log(e)
        })
    }
    function handleBack(){
        navigate("/",{replace:true});
    }
    return(
        <div className='repositories'>
            <div className='repositories__back' onClick={handleBack}>
                &#8592; Atras
            </div>
            <RepositoryForm searchFunc={searchRepositories}/>
            <List repos={repositories}/>

            {error?
                <div className='repositories__error'>
                    No se han encontrado repositorios
                </div>:
                <div/>
            }
        </div>
    )
}
export default Repositories;