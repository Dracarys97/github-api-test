import {  useState } from "react";
import { Button } from "../../buttons-component/button/Button";
import PropTypes from 'prop-types'
function RepositoryForm(props:any){
    const handleSearch = props.searchFunc;
    const [searchUser, setSearchUser] = useState<string>("");
    const [searchRepository, setSearchRepository] = useState<string>("");
    const [ownerType, setOwnerType] = useState<boolean>(false);
    const handleSubmit = (event:any) => {
        event.preventDefault();
        handleSearch(searchUser,ownerType,searchRepository)
    }
    /*
        This component requires a username to work, the user can change if the searched user is an org or not 
        and can input a repository name to search an specific repository of the searched user
    */
    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__container">
                <div className="form__container__user">
                    <div className="flex-horizontal">
                        <div className="form__container__label">
                            Please type the user owner of the repositories you want to search
                        </div>
                        <input type="text" className="form-control form__container__input" required placeholder="Username" value ={searchUser} onChange = {e => setSearchUser(e.target.value)}>
                        </input>
                        
                    </div>
                    <div className="flex-horizontal form-check custom-form-check">
                        <div className="form__container__label">
                            Is an organization?
                        </div>
                        <input type="checkbox" className="form-check-input custom-check" checked={ownerType} onChange = {e => setOwnerType(e.target.checked)}></input>
                    </div>
                </div>
                <div className="form__container__label">
                    Please type the name of the repository you want to search (If needed)
                </div>
                <input type="text" className="form-control form__container__input" placeholder="Repository" value ={searchRepository} onChange = {e => setSearchRepository(e.target.value)}>
                </input>
                
                <Button type="submit">
                    Submit
                </Button>
            </div>
        </form>
    )
    
}
RepositoryForm.propTypes = {
    searchFunc: PropTypes.func.isRequired
}
export default RepositoryForm;