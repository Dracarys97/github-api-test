export interface IUser{
    login: string,
    id: number,
    node_id:string,
    name:string,
    public_repos:number,
    avatar_url:string,
    html_url:string,
    email:string,
    hireable: boolean,
    location:string
}
export interface IRepository{
    id:number,
    name:string,
    html_url:string,
    language:string,
    updated_at:string,
    created_at:string

}
