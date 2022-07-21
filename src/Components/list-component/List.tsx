import Moment from "moment";
import { IRepository } from "../../Interfaces/GithubApi";

function List(props:any){
    const repos:IRepository[] = props.repos;
    Moment.locale('en');
    const getClasses = ((key:number)=>{
        if(!(key%2===0)){
            return "list__table__row";
        }else{
            return "list__table__row background"
        }
    })
    return(
        <div className='list__table'>
            {repos?
            <div>
                <div className='list__table__row'>
                    <div className='list__table__row__title'>
                        Name
                    </div>
                    <div className='list__table__row__title'>
                        Language
                    </div>
                    <div className='list__table__row__title'>
                        Url
                    </div>
                    <div className='list__table__row__title'>
                        Updated at
                    </div>
                    <div className='list__table__row__title'>
                        Created at
                    </div>
                </div>
                {repos.map((repo,key) =>{
                    return (
                        <div key={key} className={getClasses(key)}>
                            <div className='list__table__row__user-info'>
                                {repo?.name}
                            </div>
                            <div className='list__table__row__user-info'>
                                {repo?.language? repo?.language : "Unknown"}
                            </div>
                            <div className='list__table__row__user-info'>
                                {repo?.html_url}
                            </div>
                            <div className='list__table__row__user-info'>
                                {Moment(repo?.updated_at).format('d/MM/YYYY')}
                            </div>
                            <div className='list__table__row__user-info'>
                                {Moment(repo?.created_at).format('d/MM/YYYY')}
                            </div>
                        </div>
                    )
                })}
            </div>
            :
            <div/>
            }

        </div>
    )
}
export default List;