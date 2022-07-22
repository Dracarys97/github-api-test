import axios from 'axios'
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import RepositoryForm from '../src/Components/form-component/repository-form/Repository-form';
import List from '../src/Components/list-component/List';
import { IRepository } from '../src/Interfaces/GithubApi';


function Repositories(){ 
    const router = useRouter()
    
    const [repositories, setRepositories] = useState<IRepository[]>()
    
    const urlRepo = 'https://api.github.com/repos/';
    const urlOrg = 'https://api.github.com/orgs/';
    const urlUser = 'https://api.github.com/users/';

    const [error, setError] = useState(false);
    /*
        This function receives username, type of the user (organization or user)
        and an optional repository if the user wants to search an specific repository of a github user
    */
    function searchRepositories(user:string,type:boolean,repository?:string){
        let url:string= ''
        let repos:IRepository[]=[];
        if(!repository){
            if(!type){
                //Call to github api to search the repos of a user
                url = urlUser+user+"/repos"
            }
            else{
                //Call to github api to search the repos of an organization
                url = urlOrg+user+"/repos"
            }
        }
        else{
            //Call to github api to search a specific repo from a user
            url =urlRepo+user+"/"+repository;
            
        }
        axios.get(url).then(response => {

            setError(false)
            if(repository){
                repos.push(response.data)
                setRepositories(repos)
            }else{
                setRepositories(response.data)
            }
        }).catch(e =>{
            setError(true)
            console.log(e)
        })
    }
    function handleBack(){
        router.push("/")
    }
    return(
        <div className='repositories' id ="repositories">
            <div className='repositories__back' data-testid="back-button" onClick={handleBack}>
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